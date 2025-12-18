import React, { useState, useEffect } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        fetch(`${apiUrl}/api/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching services:', err);
                setLoading(false);
            });
    }, []);

    const iconMap = {
        presentation: (
            <svg className="w-8 h-8 text-lemon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
        ),
        code: (
            <svg className="w-8 h-8 text-lemon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        strategy: (
            <svg className="w-8 h-8 text-lemon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        users: (
            <svg className="w-8 h-8 text-lemon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    };

    return (
        <div id="services" className="py-24 bg-white dark:bg-dark-bg relative transition-colors duration-300">
            {/* Decorative blob */}
            <div className="absolute top-1/2 left-0 -ml-64 w-96 h-96 rounded-full bg-blue-900 blur-3xl filter opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Everything you need to <span className="text-lemon-green">scale</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                        We don't just invest; we build alongside you.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {loading ? (
                        <div className="col-span-4 text-center text-gray-600 dark:text-gray-400">Loading services...</div>
                    ) : (
                        services.map((service, index) => (
                            <div key={index} className="relative group bg-white border border-gray-200 dark:bg-white/5 dark:border-white/10 p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm shadow-sm dark:shadow-none">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-lemon-green to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
                                <div className="relative">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-lemon-green/10 dark:bg-white/10 text-gray-900 dark:text-white mb-5 transition-transform group-hover:scale-110 duration-300">
                                        {iconMap[service.iconKey] || iconMap['presentation']}
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;
