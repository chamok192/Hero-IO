import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/logo.png";
import Container from './Container';
import { FaGithub } from "react-icons/fa";


const NavBar = () => {
    return (

        <nav className='box-border border-b border-[#e9e9e9] bg-white'>
            <Container>
                <div className=" navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li> <NavLink className="font-semibold text-[#632EE3]" to={"/"}>Home</NavLink> </li>
                                <li> <NavLink className="font-semibold text-[#632EE3]" to={"/application"}>Apps</NavLink> </li>
                                <li> <NavLink className="font-semibold text-[#632EE3]" to={"/installation"}>Installation</NavLink> </li>
                            </ul>
                        </div>
                        <Link to={"/"} className="text-color1 font-bold text-xl h-[2.5rem] flex justify-between items-center gap-2"> <img className="w-[2.5rem] h-[2.5rem]" src={logo} alt="" /> HERO.IO</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <div className="flex gap-5 font-semibold">
                            <NavLink to="/" className={({ isActive }) =>
                                `${isActive ? 'text-[#9F62F2] border-b-2 border-[#9F62F2]' : 'text-black hover:text-[#9F62F2] hover:border-b-2 hover:border-[#9F62F2]'}`}>Home</NavLink>

                            <NavLink to="/application" className={({ isActive }) =>
                                `${isActive ? 'text-[#9F62F2] border-b-2 border-[#9F62F2]' : 'text-black hover:text-[#9F62F2] hover:border-b-2 hover:border-[#9F62F2]'}`}>Apps</NavLink>

                            <NavLink to="/installation" className={({ isActive }) =>
                                `${isActive ? 'text-[#9F62F2] border-b-2 border-[#9F62F2]' : 'text-black hover:text-[#9F62F2] hover:border-b-2 hover:border-[#9F62F2]'}`}>Installation</NavLink>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <a
                            href="https://github.com/chamok192"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none text-white hover:opacity-90"
                        ><FaGithub />  Contribute
                        </a>
                    </div>
                </div>
            </Container>
        </nav>



    );
};

export default NavBar;