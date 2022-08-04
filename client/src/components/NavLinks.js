import { NavLink } from "react-router-dom";
import links from "../utils/links";

const NavLinks = ({ toggleSidebar }) => {
    return <div className="nav-links">
        {links.map((link) => {
            const { id, text, icon, path } = link;
            return <NavLink key={id} to={path} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={toggleSidebar}>
                <span className="icon">{icon}</span>
                {text}
            </NavLink>
        })}
    </div>
}

export default NavLinks;