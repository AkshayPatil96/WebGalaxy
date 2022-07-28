// import React, { useState } from "react";
// import { useEffect } from "react";
// import { io } from "socket.io-client";

// const socket = io.connect("http://localhost:8080");

// const Chat = () => {
//   //Room State
//   const [room, setRoom] = useState("");

//   // Messages States
//   const [message, setMessage] = useState("");
//   const [messageReceived, setMessageReceived] = useState([]);

//   const joinRoom = () => {
//     if (room !== "") {
//       socket.emit("join_room", room);
//     }
//   };

//   const sendMessage = () => {
//     socket.emit("send_message", { message, room });
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageReceived([...messageReceived, data]);
//     });
//   }, [socket]);

//   return (
//     <div className="App">
//       <input
//         placeholder="Room Number..."
//         onChange={(event) => {
//           setRoom(event.target.value);
//         }}
//       />
//       <button onClick={joinRoom}> Join Room</button>
//       <input
//         placeholder="Message..."
//         onChange={(event) => {
//           setMessage(event.target.value);
//         }}
//       />
//       <button onClick={sendMessage}> Send Message</button>
//       {messageReceived.map((msg) => (
//         <h1 key={Math.random()}> Message for Room: {msg.room}</h1>
//       ))}
//       <ul>
//         {messageReceived.map((msg) => (
//           <li key={Math.random()}>{msg.message}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Chat;

import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { io } from "socket.io-client";

const backendUrl = "http://localhost:8080";

let socket;

const Chat = () => {
  const [searchParams, setSearcParams] = useSearchParams();

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io(backendUrl);

    setName(searchParams.get("name"));
    setRoom(searchParams.get("room"));

    socket.emit("join", { name, room }, () => {
      //
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [backendUrl, searchParams]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  return <div>
    
  </div>;
};

export default Chat;
