import "./App.css"
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
      <ItemListContainer greeting ="'En las manos del artesano está el alma y la escencia de lo simple y lo bello'" />
    </div>
  );
  
};


export default App;
