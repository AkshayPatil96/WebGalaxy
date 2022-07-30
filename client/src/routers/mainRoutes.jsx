import React from "react";
import { Navigation } from "../components/navbar/navigationBar";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/homepage/homepage";
import { ContentPage } from "../pages/contentPage/content";
import Login from "../components/login/login";
import Register from "../components/register/register";
import Article from "../pages/Article/Article";
import JoinChat from "../components/ChatRoom/JoinChat/JoinChat";
import Chat from "../components/ChatRoom/Chat/Chat";
import Alert from "../components/alert/Alert";

export const MainRouter = () => {
  return (
    <>
      {/* <Alert /> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path={`/:id`} element={<ContentPage />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/signup"} element={<Register />}></Route>
        <Route path={"/article"} element={<Article />}></Route>
        <Route path={"/join-chat"} element={<JoinChat />}></Route>
        <Route path={"/chat/:chatRoom"} element={<Chat />}></Route>
      </Routes>
    </>
  );
};
