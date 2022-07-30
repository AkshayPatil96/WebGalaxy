import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { refreshToken } from "./redux/action/auth.action";
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
    <img className='.image' width='100px' src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89" alt="" />
    <img className='.image' width='100px' src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89" alt="" />
    <img className='.image' width='100px' src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89" alt="" />
    <img className='.image' width='100px' src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89" alt="" />
    <img className='.image' width='100px' src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89" alt="" />
    <img className='.image' width='100px' src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89" alt="" />
    </ul>
    <div className="App">
    <MainRouter/>
    </div>
    </div >
  );
}

export default App;
