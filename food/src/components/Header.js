const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">AMAZON</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                    <li>
                        <a>Cart</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
