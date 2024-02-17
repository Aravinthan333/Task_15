import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "uderline",
      fontSize: isActive ? "21px" : "20px",
    };
  };
  return (
    <nav className="primary-nav">
      <NavLink to="/all" style={navLinkStyles}>
        All
      </NavLink>
      <NavLink to="/fsd" style={navLinkStyles}>
        Full Stack Development
      </NavLink>
      <NavLink to="data-science" style={navLinkStyles}>
        Data Science
      </NavLink>
      <NavLink to="cyber-security" style={navLinkStyles}>
        Cyber Security
      </NavLink>
      <NavLink to="/" style={navLinkStyles}>
        Career
      </NavLink>
    </nav>
  );
};

export default Navbar;
