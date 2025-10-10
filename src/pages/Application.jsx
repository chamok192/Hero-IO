import React, { useState, useTransition } from 'react';
import useApplications from '../Hooks/useApplications';
import AppCards from '../Components/AppCards';
import Container from '../Components/Container';
import Loading from '../Components/Loading';


const Application = () => {
    const { applications, loading } = useApplications();
    const [search, setSearch] = useState('');
    const [isPending, startTransition] = useTransition();
    const term = search.trim().toLocaleLowerCase();
    const matchedApps = term ? applications
        .filter(app => app.title
            .toLocaleLowerCase()
            .includes(term)) : applications;

    return (
        <div>
            <Container>
                <div className='py-12 '>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-5xl font-bold'>Our All Applications</h2>
                        <p className='text-[#627382] mt-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4'>
                        <div className='font-semibold'> <span>({matchedApps.length})</span> Apps Found</div>

                        <div>
                            <label className="input">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input value={search} onChange={(e) => startTransition(() => setSearch(e.target.value))} type="search" required placeholder="Search" />
                            </label>
                        </div>
                    </div>

                    {
                        (loading || isPending) ? (<Loading />)
                            : (
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
                                    {matchedApps.length === 0 ? (
                                        <p className='text-gray-500 text-5xl font-semibold text-center py-16'>No App Found</p>
                                    ) : (

                                        matchedApps.map(application => (
                                            <AppCards key={application.id} application={application} />
                                        ))
                                    )}
                                </div>


                            )
                    }
                </div>

            </Container>
        </div>
    );
};

export default Application;