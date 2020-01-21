const express = require('express');
const nodeCache = require('node-cache');
const router = express.Router();

const ROOM_ID_LENGTH = 4;
const ROOM_TTL = 43200;
const CHECK_PERIOD = 600;

const generateRoomId = (length) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for(let i = 0; i < length; i++ ) {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return result;
}

const myNodeCache = new nodeCache({ stdTTL: ROOM_TTL, checkperiod: CHECK_PERIOD } );

// Really needs authentication as current solution allows anyone to edit anything :-p will need to check room owner etc before allowing clearing a key etc

router.post('/host', (req, res) => {    
    const newRoomId = generateRoomId(ROOM_ID_LENGTH);
    const room = {
        roomId: newRoomId,
        host: req.body.host,
        votes: {},
        history: []
    };

    room.success = myNodeCache.set(newRoomId, room);

    res.json(room);
});

router.post('/vote/:roomId', (req,res)=> {
    const room = myNodeCache.get(req.params.roomId);

    if(room == undefined){
        res.status(404).json({ message:'Room Not Found: ' + req.params.roomId});
    }

    // without authentication this is defo a weak solution and someone can vote for someone else just by matching their name :-D
    room.votes[req.body.name] = req.body;
    room.history.push(req.body);

    // without checking, im sure this will have race condition issues
    room.success =  myNodeCache.set(req.params.roomId, room);

    res.json(room);
});

router.delete('/:roomId', (req,res) => {
    const room = myNodeCache.get(req.params.roomId);

    if(room == undefined){
        res.status(404).json({ message:'Room Not Found: ' + req.params.roomId});
    }

    const status = myNodeCache.del(req.params.roomId);

    res.json({message:'Deleted room ' + req.params.roomId, status: status});
});

router.delete('/history/:roomId', (req,res) => {
    const room = myNodeCache.get(req.params.roomId);

    if(room == undefined){
        res.status(404).json({ message:'Room Not Found: ' + req.params.roomId});
    }

    room.history = [];

    const status = myNodeCache.set(req.params.roomId, room);

    res.json({message:'Deleted room history ' + req.params.roomId, status: status});
});

router.get('/:roomId', (req, res) => {
    const room = myNodeCache.get(req.params.roomId);

    if(room === undefined){
        res.status(404).json({ message:'Room Not Found: ' + req.params.roomId});
    }

    res.json(room);
});

router.get('/', (req, res) => {
    const rooms = myNodeCache.keys();
    const stats = myNodeCache.getStats();

    res.json({stats: stats, rooms: rooms});
})

module.exports = router;