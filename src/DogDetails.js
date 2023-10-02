import { useParams } from "react-router-dom";

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
function DogDetails() {
    const params = useParams();
    const { name } = params;

    function find(dogName) {
        //search through imported JSON?
    }

    function displayFacts(facts) {
        return facts.map((fact, ind) => {
            <p key={ind}>{fact}</p>;
        });
    }

    return (
        <div className="DogDetails">
            <p>{/* This dog's name is {name}, who is age {age}. */}</p>
            <p>Here are some facts about {name}</p>
            {displayFacts()}
        </div>
    );
}

export default DogDetails;
