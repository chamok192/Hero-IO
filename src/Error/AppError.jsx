import React from 'react';
import { Link} from 'react-router';
import appError from "../assets/App-Error.png"

const AppError = () => {
    
    return (
        <div>

            <div className='my-8  flex flex-col justify-center items-center'>
                <img src={appError} alt="" />

                <h2 className='text-4xl font-bold mt-4'>Oops! App Not Found!</h2>
                <p className='text-lg mt-2 text-gray-600'>The App you are requesting is not found on our system.  please try another apps</p>
            
                <Link to='/application' className='mt-6 px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded'>Go Back!</Link>
            </div>
        </div>
    );
};

export default AppError;