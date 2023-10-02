

/** Show all dogs
 * State:
 * - isLoaded : Boolean if fetched data is available
 * - dogList : Array of dogs
 *
 * App -> DogList
 */
function DogList({dogList}) {
  /** Show dog name and image */

  function renderDogList() {
    return dogList.map((dog) => (
      <div className="Dog" key={dog.name}>
        <h2>{dog.name}</h2>
        <img style={{height: "300px" }}src={`/${dog.src}.jpg`} />
      </div>
    ));
  }

  return (
    <div className="DogList">
      {renderDogList()}
    </div>
  );
}

export default DogList;
