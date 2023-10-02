import { useState } from "react";

/** Show all dogs
 * State:
 * - isLoaded : Boolean if fetched data is available
 * - dogList : Array of dogs
 *
 * App -> DogList
 */
function DogList() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dogList, setDogList] = useState([]);

  /** API call to get all dogs */
  async function fetchDogs() {
    const response = await fetch("http://localhost:5001/dogs");
    const data = await response.json();
    setDogList(data);
    setIsLoaded(true);
    // return data;
  }

  /** Show dog name and image */
  function renderDogList() {
    return dogList.map((dog) => (
      <div className="Dog" key={dog.name}>
        <h2>{dog.name}</h2>
        <img style={{height: "300px" }}src={`${dog.src}.jpg`} />
      </div>
    ));
  }

  if (!isLoaded) fetchDogs();

  return (
    <div className="DogList">
      {isLoaded ? renderDogList() : <h3>LOADING...</h3>}
    </div>
  );
}

export default DogList;
