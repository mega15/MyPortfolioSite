import React, { useState } from "react";
import {Nav, Navbar} from "react-bootstrap";
import { Link, useLocation,NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { BiHome, BiUser, BiDesktop, BiMailSend } from "react-icons/bi";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

import './Sidebar.css';
import SidebarLogo from "./img/sidebarLogo.png"

function Sidebar() {
   
    const year = new Date().getFullYear();
    const [activeElement, setActiveElement] = useState(0);

    return (
        <>
        <div>
        <Nav className="col-md-12 d-block sidebar">
                <Nav.Item>
                    <Image src={SidebarLogo} roundedCircle />
                </Nav.Item>

                <Nav.Item>
                <Navbar.Brand className="xs-logo-my-name" href="/">MG</Navbar.Brand>
                <Navbar.Brand className="logo-my-name" href="/">Mauricio Gonz&aacute;lez</Navbar.Brand>
                </Nav.Item>

            <Nav.Item>
            <Link className="social-icon" to="/"><BsLinkedin size={24} className="sbicon" /></Link>
            <Link className="social-icon" to="/"><BsFacebook size={24} className="sbicon" /></Link>
                </Nav.Item>
            
            <hr />
            <div className="sblinks">
                <ItemSidebar id={1} name="Home" path = "/" activeElement={activeElement} setActiveElement={setActiveElement}>
                    <BiHome size={24} className="sbicon" />
                </ItemSidebar>
                <ItemSidebar id={2} name="Profile" path = "/profile" activeElement={activeElement} setActiveElement={setActiveElement}>
                    <BiUser size={24} className="sbicon" />
                </ItemSidebar>
                <ItemSidebar id={3} name="Portfolio" path = "/portfolio" activeElement={activeElement} setActiveElement={setActiveElement}>
                    <BiDesktop size={24} className="sbicon" />
                </ItemSidebar>
                <ItemSidebar id={4} name="Contact" path = "/contact" activeElement={activeElement} setActiveElement={setActiveElement}>
                    <BiMailSend size={24} className="sbicon" />
                </ItemSidebar>
            </div>
            <div className="copyright">
                © Copyright <br />
                <strong>Mauricio Gonzalez</strong> <br />
                {year}
            </div>
            
            </Nav>

            
        </div>
            
          
        </>
        );
  };

function ItemSidebar(props:{id:number, name:string, path:string, activeElement:number, setActiveElement:(element:number)=>void, children: JSX.Element}){
    const location = useLocation();

    return (
        <Nav.Item 
        className={[props.activeElement === props.id ? "active" : "",location.pathname === props.path ? "selected" : ""].join(" ")} 
        onMouseEnter={() => props.setActiveElement(props.id)} onMouseLeave={() => props.setActiveElement(0)}>
            <NavLink to={props.path}>{props.children}{props.name}</NavLink>
        </Nav.Item>
    );
}

  export default Sidebar;