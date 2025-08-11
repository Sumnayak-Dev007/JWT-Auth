import { useContext } from 'react';
import { jwtDecode } from "jwt-decode"; // <-- changed import
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");
  let user_id = null;

  if (token) {
    try {
      const accessToken = JSON.parse(token).access; // assuming it's stored as JSON
      const decoded = jwtDecode(accessToken);
      user_id = decoded.user_id;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img
  style={{ width: "80px", padding: "6px" }}
  src="https://cdn-icons-png.flaticon.com/512/2917/2917999.png"
  alt="Tulip Logo"
/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            {!token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            )}

            {token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={logoutUser} style={{ cursor: "pointer" }}>Logout</span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
