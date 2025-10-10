import React from 'react';
import loadingImage from '../assets/logo.png';
import Container from './Container';

const Loading = () => {
    return (
        <div>
            <Container>
                <div className="flex items-center justify-center min-h-[50vh]">
                    <img
                        className="h-20 w-20 opacity-60 animate-spin [animation-duration:0.90s]"
                        src={loadingImage}
                        alt="Loading"
                    />
                </div>
            </Container>
        </div>
    );
};

export default Loading;
