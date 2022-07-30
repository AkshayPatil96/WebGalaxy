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
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";
import "./Chat.css";

let socket;

const Chat = () => {
  const { chatRoom } = useParams();

  const user = JSON.parse(localStorage.getItem("user"));
  // console.log("user: ", user._id);

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const backendUrl = "http://localhost:8080/";

  useEffect(() => {
    socket = io(backendUrl, { withCredentials: true });

    socket.emit(
      "join",
      { id: user._id, name: user.username, room: chatRoom },
      (error) => {
        if (error) {
          alert(error);
        }
      }
    );

    return () => {
      socket.off("join");
    };
  }, [chatRoom, user._id, user.username]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.off("message");
      socket.off("roomData");
    };
  }, []);

  console.log("message: ", message);
  console.log("messages: ", messages);
  console.log("users: ", users);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
