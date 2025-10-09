import React, { useEffect, useState } from 'react';
import Container from '../Components/Container';
import { FiDownload } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
    const [installation, setInstallation] = useState([]);
    const [sortOrder, setOrder] = useState('none');

    useEffect(() => {
        const savedApps = JSON.parse(localStorage.getItem('installs') || '[]');
        if (savedApps) setInstallation(savedApps);
    }, []);

    const formatDownloads = (value) => {
        if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
        if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
        return value;
    };

    const sortItems = (() => {
        if (sortOrder === 'size-asc') {
            return [...installation].sort((a, b) => b.size - a.size);
        } else if (sortOrder === 'size-dsc') {
            return [...installation].sort((a, b) => a.size - b.size);
        } else {
            return installation;
        }
    })();

    const handleUninstall = (appId) => {
        if (!appId) return;
        const existingInstalls = JSON.parse(localStorage.getItem('installs') || '[]');
        const updatedInstalls = existingInstalls.filter((app) => String(app.id) !== String(appId));

        if (existingInstalls.length === updatedInstalls.length) {
            toast.warning('App not found or already uninstalled', {
                position: 'top-right',
                autoClose: 3000,
            });
            return;
        }

        localStorage.setItem('installs', JSON.stringify(updatedInstalls));
        setInstallation(updatedInstalls); 
        toast.success('App uninstalled successfully!', {
            position: 'top-right',
            autoClose: 3000,
        });
    };

    return (
        <div className="bg-gray-50 min-h-screen px-4 py-10">
            <Container>
                <h2 className="text-5xl font-bold text-center text-gray-800 mb-4">Your Installed Apps</h2>
                <p className="text-gray-500 mb-6 text-center">Explore All Trending Apps on the Market developed by us</p>
                <div className="flex justify-end mb-4">
                    <label htmlFor="size-sort" className="form-control w-full max-w-xs">
                        <select
                            id="size-sort"
                            name="size-sort"
                            className="select select-bordered"
                            value={sortOrder}
                            onChange={(e) => setOrder(e.target.value)}
                        >
                            <option value="none">Sort By Size</option>
                            <option value="size-asc">High-Low</option>
                            <option value="size-dsc">Low-High</option>
                        </select>
                    </label>
                </div>
                <p className="text-gray-700 font-semibold mb-4">({installation.length}) Apps Found</p>
                {installation.length === 0 ? (
                    <p className="text-gray-500 text-5xl font-semibold text-center py-16">No App Installed!</p>
                ) : (
                    sortItems.map((app, index) => (
                        <div
                            key={index}
                            className="space-y-3 md:flex md:justify-between md:items-center bg-white mb-3 rounded-lg shadow-lg"
                        >
                            <div className="flex flex-col justify-center md:flex md:items-start bg-white">
                                <div className="p-3 h-[8rem]">
                                    <img src={app.image} alt="" className="object-contain w-full h-full rounded-xl" />
                                </div>
                                <div className="pl-4">
                                    <h3 className="text-xl font-semibold text-teal-800">{app.title}</h3>
                                    <div className="flex gap-3 items-center justify-between mt-2">
                                        <div className="inline-flex items-center px-2 py-1 rounded-full text-base font-medium bg-[#F1F5E8] text-[#00D390]">
                                            <FiDownload className="font-bold mr-2" /> {formatDownloads(app.downloads)}
                                        </div>
                                        <div className="px-3 py-1 rounded-full text-base font-medium bg-[#FFF0E1] text-[#FF8811]">
                                            ★{app.ratingAvg}
                                        </div>
                                        <div>
                                            <span className="text-gray-600 font-medium">{app.size}MB</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="btn bg-green-500 text-white px-4 rounded"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))
                )}
                <ToastContainer />
            </Container>
        </div>
    );
};

export default Installation;