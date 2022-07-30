import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const JoinChat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h3 className="heading">Create New Chat Room</h3>

        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!room ? e.preventDefault() : null)}
          to={`/chat/${room}`}
        >
          <button className={"button mt-20"} type="submit">
            Create Room
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinChat;
