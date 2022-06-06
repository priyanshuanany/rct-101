import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Products } from "./components/Products";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {
        <Navbar/>
        <Home/>
        <Products/>
      }
    </div>
  );
}

export default App;
