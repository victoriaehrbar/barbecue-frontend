import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BarbecueForm from "./components/BarbecueForm";
import BarbecueIndex from "./components/BarbecueIndex";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/barbecues" element={<BarbecueIndex/>} />
          <Route path="/barbecues/new" element={<BarbecueForm/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;