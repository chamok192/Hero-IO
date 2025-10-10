import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Components/Loading';

const MainLayout = () => {
    const navigation = useNavigation();
    const isNavigating = navigation.state !== 'idle';

    return (
        <div>
            <NavBar/>
            {isNavigating ? <Loading /> : <Outlet />}
            <Footer />
        </div>
    );
};

export default MainLayout;