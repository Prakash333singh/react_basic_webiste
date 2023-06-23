import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/brand_logo.png";


const Header = () => {
    return (
        <header className='flex justify-between m-0 p-5 align-middle box-border'>
            <div className='mx-20'>
                <img src={logo} alt="#" />
            </div>
            <nav className='flex gap-8 text-lg text-gray-600 font-semibold'>
                <Link to={"/"}>MENU</Link>
                <Link>LOCATION</Link>
                <Link>ABOUT</Link>
                <Link>CONTACT</Link>
            </nav>

            <button className='bg-red-600 text-white  px-7 rounded mr-4'>Login</button>

        </header>
    )
}

export default Header
