import React from 'react';
import { io } from 'socket.io-client'
import {SocketContext} from './SocketContext'

const initial_State = {

    socket: io(`${process.env.REACT_APP_PUERTO}`),
}

function SocketPrivider({children}) {
  
    return (

        <SocketContext.Provider value={initial_State.socket}></SocketContext.Provider>
    ) 

}

export default SocketPrivider;
