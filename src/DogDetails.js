import { useParams } from "react-router-dom";

const BASE_URL = 'http://localhost:5001/dogs';
// {
//   "name": "Whiskey",
//     "age": 5,
//       "src": "whiskey",
//         "facts": [
//           "Whiskey loves eating popcorn.",
//           "Whiskey is a terrible guard dog.",
//           "Whiskey wants to cuddle with you!"
//         ];
// }

/**
 * It's either, getting all of the above from server?
 * Or getting it passed in as props?
 */
function DogDetails({dogList}) {

    const params = useParams();
    const { name } = params;
    const {src, age, facts} = dogList.filter(dog => dog.name.toLowerCase() === name)[0];


    function displayFacts(facts) {
      console.log('facts are:' , facts)
        return facts.map((fact, ind) => (
            <p key={ind}>{fact}</p>
        ));
    }


    return (
      <div className="DogDetails">
        <p>This dog's name is {name}, who is age {age}</p>
        <img style={{height: "300px" }}src={`/${src}.jpg`} />
        {displayFacts(facts)}
      </div>
    );
}

export default DogDetails;
