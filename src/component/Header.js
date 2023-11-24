import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/homepage">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <label>First Name</label>
                    <input class="w3-input" type="text"/>

                </nav>



            </header>

        </>
    )
}
export default Header;
