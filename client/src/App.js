import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { refreshToken } from "./redux/action/auth.action";
import img from "./assets/Images/cosmos.png"
import { MainRouter } from "./routers/mainRoutes";
import "./interceptors/axios";
import Alert from "./components/alert/Alert";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <div className="area" >
    <ul className="circles">
    <img className='.image' width='100px' src={img} alt="" />
    <img className='.image' width='100px' src={img} alt="" />
    <img className='.image' width='100px' src={img} alt="" />
    <img className='.image' width='100px' src={img} alt="" />
    <img className='.image' width='100px' src={img} alt="" />
    <img className='.image' width='100px' src={img} alt="" />
    </ul>
    <div className="App">
    <MainRouter/>
    </div>
    </div >
  );
}

export default App;
