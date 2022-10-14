import React, { useState } from 'react';
import { io } from 'socket.io-client';
import Chat from './Chat';
import './MessageBox.css';


const socket = io.connect("http://localhost:5000")


const MessageBox = () => {

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    };


    return (
        <div className='message-box'>
            <div className="card w-lg bg-base-100 p-10 shadow-2xl">
                {!showChat ? (
                    <div className="joinChatContainer">
                        <h3>Join A Chat</h3>
                        <input type="text" placeholder="Type here" className="input w-full max-w-xs" onChange={(event) => {
                            setUsername(event.target.value);
                        }} />

                        <input type="text" placeholder="Type here" className="input w-full max-w-xs" onChange={(event) => {
                            setRoom(event.target.value);
                        }} />
                        <button onClick={joinRoom} className="btn  w-full ">Join A Room</button> 
                    </div>
                ) : (
                    <Chat socket={socket} username={username} room={room} />
                )}
            </div>

        </div>
    );
};

export default MessageBox;