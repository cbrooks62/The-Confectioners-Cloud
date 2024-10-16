//Purpose: Created the navbar that will be displayed on every page, and set appropriate routes for the corresponding buttons.
import { logout } from "../../Services/UserProfileServices.jsx";
import "./NavBar.css"
import { Link } from "react-router-dom";

export const CloudNavBar = ({ isLoggedIn, setIsLoggedIn, currentUser }) => {
  const userId = currentUser.id;                               

  return (
    <div className="nav-container">
      <ul className="navbar-TCC">
        <i>
        <img
            alt="logo"
            src="src/assets/logo.png"
            style={{
              height: 100,
              width: 100,
              paddingRight: 5,
            }}
          />
        </i>
        {isLoggedIn && ( <li className="navbar-pages"> <Link to="/">Home</Link></li> )}
        <li className="navbar-pages"> <Link to="/Recipes">Recipes</Link></li>
        <li className="navbar-pages"> <Link to="/Profile">Profile</Link></li> 
        
        <li
         aria-current="page"
         className="nav-link"
         style={{ cursor: "pointer" }}
         onClick={() => {
        logout();
        setIsLoggedIn(false);
         }}>  <Link to="/Login" className="logout-link">
         {" "}
         Logout
       </Link></li>
      </ul>
    </div>
  );
};
