import React, { useState } from "react";
import { Link } from "react-router-dom";

const JoinChat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <div>
        <h1>Create Chat Room</h1>
        <div>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input type="text" onChange={(e) => setRoom(e.target.value)} />
        </div>
        <Link
          onClick={(e) => (!room || !name ? e.preventDefault() : null)}
          to={`/chat?room=${room}&name=${name}`}
        >
          <button>Create Chat Room</button>
        </Link>
      </div>
    </div>
  );
};

export default JoinChat;
