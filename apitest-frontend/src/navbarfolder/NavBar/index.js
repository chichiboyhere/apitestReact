import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { logout } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import "../StyleNavDropDown.css";
import assets from "../../assets";


const Navbar = () => {
  const dispatch = useDispatch();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showTestMenu, setShowTestMenu] = useState(false);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const showTestHandler = () => {
    setShowTestMenu(true);
  }

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <>
      <Nav>
        <div>
        <NavLink to="/">
          <img src={assets.apitestLogo} className="logoImg"/>
        </NavLink>
        <Bars
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        />
        {userInfo ? (
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
            onClick={() => {
              setIsNavExpanded(false);
            }}
          >
            <ul>
              <li>
                <Link to="/my-app" className="wrapper">Mental Game</Link>
              </li>
              <li>
                  <div className="wrapper">Verbal Tests</div>
                  <div className="drop-content_mobile">
                    <Link to="/verbalTestOne" className="dropdown-content-mobile__li">#1 Test</Link>
                    <Link to="/verbalTestTwo"  className="dropdown-content-mobile__li">#2 Test</Link>
                    <Link to="/verbalTestThree"  className="dropdown-content-mobile__li">#3 Test</Link>
                  </div>   
                
              </li>
              
              <li>
                 <div className="wrapper">Quantitative Tests</div>
                 <div className="drop-content_mobile">
                    <Link to="/quantitativeTestOne" className="dropdown-content-mobile__li">#1 Test</Link>
                    <Link to="/quantitativeTestTwo"  className="dropdown-content-mobile__li">#2 Test</Link>
                    <Link to="/quantitativeTestThree"  className="dropdown-content-mobile__li">#3 Test</Link>
                  </div>
              </li>
              <li>
                <Link to="/contact" className="wrapper">Contact</Link>
              </li>
              <li>
                <button onClick={logoutHandler} className="loggoutButton" >Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
            onClick={() => {
              setIsNavExpanded(false);
            }}
          >
            <ul>
              <li>
                <Link to="/auth">Sign In</Link>
              </li>
            </ul>
          </div>
        )}
        </div>
        {userInfo ? (
          <>
            <NavMenu>
              <NavLink
                to="/my-app"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                Mental
              </NavLink>
              
              <div className="dropdown">
                  <button className="dropbtn">Verbal Tests
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <Link to="/verbalTestOne" className="dropdown-content__li">#1 Test</Link>
                    <Link to="/verbalTestTwo"  className="dropdown-content__li">#2 Test</Link>
                    <Link to="/verbalTestThree"  className="dropdown-content__li">#3 Test</Link>
                  </div>
              </div>
              
              <div className="dropdown">
                  <button className="dropbtn">Quantitative Tests
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <Link to="/quantitativeTestOne" className="dropdown-content__li">#1 Test</Link>
                    <Link to="/quantitativeTestTwo"  className="dropdown-content__li">#2 Test</Link>
                    <Link to="/quantitativeTestThree"  className="dropdown-content__li">#3 Test</Link>
                  </div>
              </div>
              <NavLink
                to="/contact"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                Contact
              </NavLink>
              <button onClick={logoutHandler} className="loggoutButton">Logout</button>
            </NavMenu>
          </>
        ) : (
          <>
            <NavBtn>
              <NavBtnLink to="/auth">Sign In</NavBtnLink>
            </NavBtn>
          </>
        )}
        
      </Nav>
    </>
  );
};

export default Navbar;
