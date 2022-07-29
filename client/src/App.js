import "./App.css";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/ChatRoom/Chat/Chat";
import JoinChat from "./components/ChatRoom/JoinChat/JoinChat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<JoinChat />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
