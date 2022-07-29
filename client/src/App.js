
import "./App.css";
import Login from "./components/login/login";
import Article from './pages/Article/Article';
import {Routes, Route} from "react-router-dom"
import Register from "./components/register/register";


import { MainRouter } from "./routers/mainRoutes";


function App() {
  return (
    <div className="area">
    <div className="App">
      <ul className="circles">
      <img className='image' width='100px' src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89" alt="" />  <img className='image' width='100px' src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89" alt="" />  <img className='image' width='100px' src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89" alt="" />
      <img className='image' width='100px' src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89" alt="" />
      <img className='image' width='100px' src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89" alt="" />
    </ul>
    <MainRouter/>
    </div>
    </div>
  );
}

export default App;
