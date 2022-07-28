
import "./App.css";
import { MainRouter } from "./routers/mainRoutes";

function App() {
  return (
    <div className="App">
    <div className="area">
      <ul className="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <MainRouter/>
    </div>
    </div>
  );
}

export default App;
