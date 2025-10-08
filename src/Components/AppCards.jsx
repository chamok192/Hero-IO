import React from 'react';
import { FiDownload } from "react-icons/fi";

const AppCards = ({ application }) => {
    const { title, image, downloads, ratingAvg } = application;

    const formatDownloads = (value) => {
        if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
        if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
        return value;
    };

    return (
        <div className=" mt-8 max-w-sm mx-auto bg-white  rounded-lg overflow-hidden shadow-[0_0_18px_rgba(0,0,0,0.12)]">
            <div className='p-4 h-[20rem] '>
                <img src={image} alt={title} className="object-cover w-full h-full rounded-xl" />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-teal-800">{title}</h3>
                <div className="flex items-center justify-between mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-base font-medium bg-[#F1F5E8] text-[#00D390]">
                        <FiDownload className='font-bold mr-2' /> {formatDownloads(downloads)}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-base font-medium bg-[#FFF0E1] text-[#FF8811]">
                        ★ {ratingAvg}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AppCards;