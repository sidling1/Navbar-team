import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="header">
            <div className="rectangle"></div>
            <div className="links">
                <Link to="/">EVENTS</Link>
                <Link to="/">MERCH</Link>
                <Link to="/">CAMPAIGNS</Link>
                <Link to="/">TEAMS</Link>
                <Link to="/">MUN</Link>
                <Link to="/">SPONSORS</Link>
                <Link to="/">CONTESTS</Link>
                <Link to="/">BOOK TICKETS</Link>
            </div>
        </nav>
    );
}

export default Header;