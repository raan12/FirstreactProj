import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes, Navigate } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contactus from './Contactus';
import PropsFunction from './PropsFunction';
import PropsClass from './PropsClass';
import Events from './Events';
import Condition from './Condition';
import Users from './Users';
import Createuser from './Createuser';
import Pageerror from './Pageerror';
import Apiuser from './Apiuser';
import SingleUser from './SingleUser';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';


export default function Header() {

    const [userfirst, setuserfirst] = useState([]);
    const [loadapi, setLoadapi] = useState(false);

    useEffect(() => {
        fetch('https://api.github.com/users').then((data) => {
            data.json().then((result) => {
                setuserfirst(result);
                setLoadapi(true);
            });
        });
    }, []);

    // userlogin
    const [userLogin, setUserLogin] = useState(false);
    function LogPopup(val) {
        setUserLogin((userLogin) => !userLogin);
    }


    return (
        <>


            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 shadow-lg" style={{ height: '84px' }}>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" to="/users">Users</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" to="/createusers">Create User</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" to="/contact">Contact Us</NavLink>
                            </li>
                            {userLogin ?
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" activeClassName="active" to="/apiuser">Api User</NavLink>
                                </li> : ''}
                        </ul>

                        <div className="div-inline my-2 my-lg-0">
                           
                            {userLogin ?
                                <>
                                  

                                    <Dropdown>
                                <Dropdown.Toggle  id="dropdown-basic" variant="Secondary">
                                <img src="https://www.pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/app-assets/images/portrait/small/avatar-s-2.jpg" className="rounded-circle ml-3" width="50" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="p-0 border-0">
                                <button className="btn btn-danger btn-block" onClick={() => { LogPopup(false) }}>Logout <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-2 d-inline-block bi bi-box-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                    </svg></button>
                                </Dropdown.Menu>
                            </Dropdown>
                                </>
                                :
                                <>
                                    <button onClick={() => { LogPopup(true) }} className="btn btn-success">
                                        Login
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-2 d-inline-block bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                    </button>
                                </>
                            }
                        </div>
                    </div>
                </nav>


                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/createusers" element={<Createuser userLogin={userLogin} />} />
                    <Route path="/contact" element={<Contactus />} />
                    <Route path="/singleUser/:id" element={<SingleUser data={userfirst} loadapistatus={loadapi} />} />
                    <Route path="/apiuser" element={userLogin ? <Apiuser data={userfirst} loadapistatus={loadapi} /> : <Navigate to="/" />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Pageerror />} />
                </Routes>

            </Router>


        </>
    )
}
