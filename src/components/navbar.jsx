// import react from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Navbars = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar container">
                <div className="logo">Torvan Traders</div>
                <ul>
                    <NavLink to="/"> <li className="linl">home</li></NavLink>
                    {/* <NavLink to="/products"><li className="linl1">products</li></NavLink> */}
                    <NavLink to="/about"><li>about</li></NavLink>
                    <NavLink to="/blog"><li>blog</li></NavLink>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </a>
                        <ul class="dropdown-menu">
                            <NavLink to="/Dropdown1"><li>Dropdown1</li></NavLink>
                            <NavLink to="/Dropdown2"><li>Dropdown2</li></NavLink>
                            <NavLink to="/Dropdown3"><li>Dropdown3</li></NavLink>
                        </ul>
                    </li>
                </ul>
                <button onClick={() => navigate("/login")}>Login</button>

            </div>
        </>
    )
}

export default Navbars;