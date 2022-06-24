import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "pink",
        textDecoration: "none",
        color: "white",
    };
    return (
        <>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                About
            </NavLink>
            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Login
            </NavLink>
        </>
    );
}
