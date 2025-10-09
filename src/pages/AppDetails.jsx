import React from 'react';
import { useParams } from 'react-router';
import useApplications from '../Hooks/useApplications';
import Container from '../Components/Container';
import { FiDownload } from "react-icons/fi";
import { TiStarFullOutline } from 'react-icons/ti';
import { AiFillLike } from 'react-icons/ai';

const AppDetails = () => {
    const { id } = useParams();
    const { applications, loading, error } = useApplications();
    const app = applications.find(p => String(p.id) === id);
    if (loading) {
        return <div className='text-center py-20 text-3xl font-bold'>Loading...</div>
    }

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app || {};

    const formatDownloads = (value) => {
        if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
        if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
        return value;
    };

    const formatReviews = (value) => {
        if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
        if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
        return value;
    };

    const totalReviews = ratings.reduce((sum, rating) => sum + rating.count, 0);
    const getRatingPercentage = (count) => {
        return totalReviews > 0 ? ((count / totalReviews) * 100).toFixed(1) : 0;
    };

    if (!app) {
        return <div className='text-center py-20 text-3xl font-bold'>App Not Found</div>
    }
    return (
        <div className="bg-gray-50 py-8">
            <Container>
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

                    <div className="flex flex-col md:flex-row items-start p-6 border-b border-gray-200">
                        <div className="w-80 h-80 bg-gray-200 flex items-center justify-center mb-4 md:mb-0 md:mr-15">
                            <img src={image} alt="" className=" object-contain p-4" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 pb-3">{title}</h1>
                            <p className='text-[#627382]'>Developed By : <span className='font-semibold text-purple-600'>{companyName}</span> </p>
                            <div className="flex flex-col md:flex-row flex-wrap md:items-center gap-15 mt-4">
                                <div className="space-y-1">
                                    <FiDownload className='text-green-500 text-4xl ' />
                                    <h3 className='text-[#001931] font-semibold'>Downloads</h3>
                                    <div className='text-4xl text-[#001931] font-bold'>
                                        {formatDownloads(downloads)}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <TiStarFullOutline className='text-[#FF8811] text-4xl ' />
                                    <h3 className='text-[#001931] font-semibold'>Average Ratings</h3>
                                    <div className='text-4xl text-[#001931] font-bold'>
                                        {ratingAvg}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <AiFillLike className='text-purple-500 text-4xl ' />
                                    <h3 className='text-[#001931] font-semibold'>Total Reviews</h3>
                                    <div className='text-4xl text-[#001931] font-bold'>
                                        {formatReviews(reviews)}
                                    </div>
                                </div>
                            </div>
                            <button className=" cursor-pointer mt-6 px-4 py-2 bg-[#00D390] text-white font-semibold rounded">
                                Install Now ({size})
                            </button>
                        </div>
                    </div>


                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Ratings</h2>
                        <div className="mt-4 space-y-4">
                            {ratings.map((rating, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="w-20 text-[#627382] mr-3">{rating.name}</span>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-yellow-500 h-2.5 rounded-full"
                                            style={{ width: `${getRatingPercentage(rating.count)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Description</h2>
                        <span className="leading-relaxed text-[#627382] ">
                            {description}
                        </span>
                        <span className="leading-relaxed text-[#627382] ">
                            {description}
                        </span>
                        <span className="leading-relaxed text-[#627382] ">
                            {description}
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AppDetails;