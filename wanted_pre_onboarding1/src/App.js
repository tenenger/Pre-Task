import "./App.css";
import Nav from "./Components/Nav";
import Slider from "./Components/Slider";
// import Slider from './Components/Slider';

function App() {
  return (
    <>
      <Nav></Nav>
      <div className="nav__carousel__padding"></div>
      <Slider />
    </>
  );
}

export default App;
