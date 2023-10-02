import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ names }) {
    //make a list from names.

    function makeLinks() {
        return names.map((name) => {
            return (
                <NavLink key={name} to={`/dogs/${name.toLowerCase()}`}>
                    {name}
                </NavLink>
            );
        });
    }

    // let linkComponents = makeLinks();
    // console.log(linkComponents);
    return <nav className="Navbar">{makeLinks()}</nav>;
}

export default Nav;
