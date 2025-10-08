import React from 'react';
import Banner from '../Components/Banner';
import { Link, } from 'react-router';
import Container from '../Components/Container';
import AppCards from '../Components/AppCards';
import useApplications from '../Hooks/useApplications';

const Home = () => {

    const {applications, loading, error} = useApplications();
    return (
        <div>
            <Banner></Banner>
            <Container>
                <div className='py-12 text-center'>
                    <h2 className='text-3xl md:text-5xl font-bold'>Trending Apps</h2>
                    <p className='text-[#627382] mt-3'>Explore All Trending Apps on the Market developed by us</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
                        {applications.slice(0, 8).map(application =>(
                            <AppCards key={application.id} application={application}/>
                        ))}
                    </div>

                    <Link to={"/application"} className='btn px-7 py-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-15'>Show All</Link>
                </div>
            </Container>
        </div>
    );
};

export default Home;