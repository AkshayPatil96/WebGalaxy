
import "./App.css";
import { MainRouter } from "./routers/mainRoutes";

function App() {
  return (
    <div className="area">
    <div className="App">
      <ul className="circles">
      <li></li>
      <li></li>
      <li></li>
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
