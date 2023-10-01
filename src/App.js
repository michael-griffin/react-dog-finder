import './App.css';
import Nav from './Nav';
import DogList from './Doglist';
import DogDetails from '.DogDetails';

import { BrowserRouter, Routes, Route } from "react-router-dom";
//App should render <Nav /> and a list of routes

function App() {
  return (
    <div className="App">
      <h1>Good luck!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<DogList />} />
          <Route path="/dogs/:name" element={<DogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
