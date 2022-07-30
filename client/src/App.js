
import "./App.css";
import img from "./assets/Images/cosmos.png"
import { MainRouter } from "./routers/mainRoutes";


function App() {
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
