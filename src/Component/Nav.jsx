import React from "react";
import Food from '../Component/Food'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Navbar = () => {
    const navigate = useNavigate();
    return (
        <header className="navbar">
            <div className="nav-container">
                <h2 className="logo">Surat</h2>

                <ul className="nav-links">
                    <li className="active"><Link to="/Home">Home</Link></li>
                    <li><Link to="/Main">Main</Link></li>
                    <li><Link to="/destination">Destination</Link></li>
                    <li><Link to="/food2">Food2</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
                {/* <button className="nav-btn">Book Now</button> */}
            </div>
        </header>
    );
};

export default Navbar;



































// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className="navbar">
//       <div className="nav-container">
//         <h2 className="logo">Surat</h2>

//         <ul className="nav-links">
//           <li><NavLink to="/" end>Home</NavLink></li>
//           <li><NavLink to="/destination">Destination</NavLink></li>
//           <li><NavLink to="/food">Special Food</NavLink></li>
//           <li><NavLink to="/blog">Blog</NavLink></li>
//           <li><NavLink to="/contact">Contact</NavLink></li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

















