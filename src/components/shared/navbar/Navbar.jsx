import { NavLink } from "react-router-dom";
import logo from "../../../assets/molo-logo.png";

const Navbar = () => {
    return (
        <header className="container mx-auto px-6">
            <nav className="grid grid-cols-3 justify-between items-center">
                <ul className="flex">
                    <li>
                        <NavLink className={"pe-5"} to={"/fish-burger"}>
                            Fish Burger
                        </NavLink>
                        <NavLink className={"pe-5"} to={"/menu"}>
                            Menu
                        </NavLink>
                        <NavLink className={"pe-5"} to={"/about"}>
                            About
                        </NavLink>
                        <NavLink className={"pe-5"} to={"/contact"}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="flex justify-center">
                    {" "}
                    <img src={logo} alt="" />
                </div>
                <ul className="flex justify-end">
                    <li className={"ps-5"}>Facebook</li>
                    <li className={"ps-5"}>Instagram</li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
