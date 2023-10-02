import { useParams } from "react-router-dom";

/**
 * Show dog details
 * Prop:
 * - dogList : List of dogs
 *
 * App -> DogDetails
 */
function DogDetails({ dogList }) {
    const params = useParams();
    const { name } = params;
    const { src, age, facts } = dogList.filter(
        (dog) => dog.name.toLowerCase() === name
    )[0];

    function displayFacts(facts) {
        console.log("facts are:", facts);
        return facts.map((fact, ind) => <p key={ind}>{fact}</p>);
    }

    return (
        <div className="DogDetails">
            <p>
                This dog's name is {name}, who is age {age}
            </p>
            <img style={{ height: "300px" }} src={`/${src}.jpg`} />
            {displayFacts(facts)}
        </div>
    );
}
export default DogDetails;
