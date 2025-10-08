import React from 'react';
import { useRouteError } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import errorImg from "../assets/error-404.png"

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <NavBar/>

            <div className='my-8  flex flex-col justify-center items-center'>
                <img src={errorImg} alt="" />

                <h2 className='text-4xl font-bold mt-4'>Oops! Page Not Found!</h2>
                <p className='text-lg mt-2 text-gray-600'>The page you are looking for does not exist.</p>
                <p className='text-lg mt-2 text-gray-600'>{error.statusText || error.message}</p>
                <a href='/' className='mt-6 px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded'>Go Back!</a>
            </div>
            
            <Footer />
        </div>
    );
};

export default Error;