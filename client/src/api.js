import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: './api/',
    headers: {'x-client':'web-application'}
});

export function GetStatsAndRooms() {
    return axiosInstance.get('stats')
        .then( response => { 
            console.log("GET_STATS_AND_ROOMS");
            console.log(response); 
            return response;
        }).catch(console.log);
}

export function GetRoom(roomId) {
    return axiosInstance.get(`room/${roomId}`)
        .then( response => { 
            console.log('GET_ROOM');
            console.log(response); 
            return response;
        }).catch(console.log);
}

export function DeleteRoom(roomId) {
    return axiosInstance.delete(`room/${roomId}`)
        .then( response => { 
            console.log('DELETE_ROOM');
            console.log(response); 
            return response;
        }).catch(console.log);
}

export function DeleteRoomHistory(roomId) {
    return axiosInstance.delete(`room/history/${roomId}`)
        .then( response => { 
            console.log('DELETE_ROOM_HISTORY');
            console.log(response); 
            return response;
        }).catch(console.log);
}

export function PostHostRoom(body) {
    return axiosInstance.post(`room/host/`, body)
    .then( response => { 
        console.log('POST_HOST_ROOM');
        console.log(response); 
        return response;
    }).catch(console.log);
}

export function PostVote(roomId, body) {
    return axiosInstance.post(`room/vote/${roomId}`, body)
    .then( response => { 
        console.log('POST_VOTE');
        console.log(response); 
        return response;
    }).catch(console.log);
}