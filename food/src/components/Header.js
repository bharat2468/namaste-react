import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    return (
        <div className="navbar bg-base-100 text-primary-content">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">
                    FOOD APP
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <ThemeToggle/>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {/* dynamic bundling for the grocery page */}
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact_us">Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
