import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useLocation
import { FaHome,FaBriefcase, FaCheckCircle, FaInfoCircle, FaPhoneAlt,  FaUserShield, FaUserTie, FaUser,FaUserPlus, FaUserAlt, FaUsers,  FaSignOutAlt } from "react-icons/fa";

function NavBar() {
  const [data, setData] = useState("");
  const [userType, setUserType] = useState("");
  const nav = useNavigate();    

  useEffect(() => {
    const temData = JSON.parse(localStorage.getItem("data"));
    setData(temData);
    const temUserType = JSON.parse(localStorage.getItem("userType"));
    setUserType(temUserType);
  }, [location.pathname]); 

  const adminLogout = () => {
     localStorage.removeItem("data");
     localStorage.removeItem("userType");
    nav("/admin/login"); 
  };

  const seekerLogout = () => {
    localStorage.removeItem("data");
    localStorage.removeItem("userType");
   nav("/seeker/login"); 
 };
 const recruiterLogout = () => {
  localStorage.removeItem("data");
  localStorage.removeItem("userType");
 nav("/recruiter/login"); 
};

if (userType === "admin") {
  return (
    <>
      <div className="row navbar_main_row mb-1 sticky-top mb-1 ps-5 pe-4">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="">
                <img className='nav_bar_logo' src={`http://localhost:9000/upload/${data.img}`} />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link nav_font" aria-current="page" to="/admin">
                    <FaHome className="menu-icon" />&nbsp; Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav_font" aria-current="page" to="/admin/seekerlist">
                    <FaUsers className="menu-icon" />&nbsp;Seeker List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav_font" aria-current="page" to="/admin/recruiterlist">
                    <FaUserTie className="menu-icon" />&nbsp;Recruiter List
                    </Link>
                  </li> 
                  <li className="nav-item" onClick={adminLogout}>
                    <Link className="nav-link nav_font" aria-current="page">
                    <FaSignOutAlt className="menu-icon" />&nbsp;LogOut
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
} else if (userType === "seeker") {
  return (
    <>
      <div className="row navbar_main_row mb-1 sticky-top mb-1 ps-5 pe-4">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="">
              <img className='nav_bar_logo' src={`http://localhost:9000/upload/${data.img}`} />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link nav_font" aria-current="page" to="/seeker">
                    <FaHome className="menu-icon" />&nbsp;Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav_font" aria-current="page" to="/seeker/jobapply">
                    <FaBriefcase className="menu-icon" />&nbsp;Apply Job
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav_font" aria-current="page" to="/seeker/appliedjob">
                    <FaCheckCircle className="menu-icon" />&nbsp;Applied Job
                    </Link>
                  </li> 
                  <li className="nav-item" onClick={seekerLogout}>
                    <Link className="nav-link nav_font" aria-current="page">
                    <FaSignOutAlt className="menu-icon" />&nbsp;LogOut
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
} else if (userType === "recruiter") {
  return (
    <>
      <div className="row navbar_main_row mb-1 sticky-top mb-1 ps-5 pe-4">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="">
              <img className='nav_bar_logo' src={`http://localhost:9000/upload/${data.logo}`} />
            
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link nav_font" aria-current="page" to="/recruiter">
                    <FaHome className="menu-icon" />&nbsp;Dashboard
                    </Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link className="nav-link nav_font" aria-current="page" to="/recruiter/PostJob">
                    <FaBriefcase />&nbsp;Job Post
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav_font" aria-current="page" to="/recruiter/postedjob">
                    <FaUser className="menu-icon" />&nbsp; postedJobs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav_font" aria-current="page" to="/recruiter/appliedjob">
                    <FaCheckCircle className="menu-icon" />&nbsp;Applied Job
                    </Link>
                  </li>
                  
                  <li className="nav-item" onClick={recruiterLogout}>
                    <Link className="nav-link nav_font" aria-current="page">
                    <FaSignOutAlt className="menu-icon" />&nbsp;LogOut
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
} else {
  return (
    <>
      <div className="row navbar_main_row sticky-top mb-1 ps-5 pe-4">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="">
                <img src="/logo.png" alt="logo" height={"70px"} />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link nav_font" aria-current="page" to="/">
                    <FaHome />&nbsp;Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav_font" to="/findjob">
                    <FaBriefcase />&nbsp;Find a Job
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav_font" to="/about">
                    <FaInfoCircle />&nbsp;About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link nav_font" to="/contact" tabIndex={-1} aria-disabled="true">
                    <FaPhoneAlt />&nbsp;Contact
                    </Link>
                  </li>
                </ul>
                <div className="dropdown ms-auto mt-2">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle custom-btn"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Registration</b>
                  </button>
                  <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link className="dropdown-item" to="recruiter/register">
                      <FaUserPlus />&nbsp;Recruiter
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/seeker/register">
                      <FaUserAlt />&nbsp;Job Seeker
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown ms-4 mt-2 me-5">
                  <button
                    className="btn btn-outline-primary dropdown-toggle custom-btn"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Login</b>
                  </button>
                  <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton2">
                    <li>
                      <Link className="dropdown-item" to="/admin/login">
                      <FaUserShield />&nbsp;Admin Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/recruiter/login">
                      <FaUserTie />&nbsp;Recruiter Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/seeker/login">
                      <FaUser />&nbsp; Seeker Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

}

export default NavBar;