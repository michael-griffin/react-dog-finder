import "./App.css";
import { useState } from "react";
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//App should render <Nav /> and a list of routes

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [dogList, setDogList] = useState([]);

    /** API call to get all dogs */
    async function fetchDogs() {
        const response = await fetch("http://localhost:5001/dogs");
        const data = await response.json();
        setDogList(data);
        setIsLoaded(true);
    }

    if (!isLoaded) fetchDogs();

    //dogList.map(dog => dog.name)
    return (
        <div className="App">
            <h1>DOGS</h1>

            {isLoaded ? (
                <>
                    <BrowserRouter>
                        <Nav names={dogList.map((dog) => dog.name)} />
                        <Routes>
                            <Route
                                path="/dogs"
                                element={<DogList dogList={dogList} />}
                            />
                            <Route
                                path="/dogs/:name"
                                element={<DogDetails dogList={dogList} />}
                            />
                            <Route path="*" element={<Navigate to="/dogs" />} />
                        </Routes>
                    </BrowserRouter>
                </>
            ) : (
                <h3>LOADING...</h3>
            )}
        </div>
    );
}

export default App;
