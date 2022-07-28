import "./App.css";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/chatRoom/Chat";
import JoinChat from "./components/JoinChat/JoinChat";

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
