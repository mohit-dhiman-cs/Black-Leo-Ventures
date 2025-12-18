import React, { useState, useEffect } from 'react';

const Services = () => {
    const services = [
        {
            title: "Funds for Startups",
            description: "Direct access to our network of Angels, VCs, and Family Offices. We structure your round to close faster.",
            icon: (
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Funds for Funds",
            description: "We help Micro-VCs and Emerging Managers raise capital from LPs, Family Offices, and Corporate Treasuries.",
            icon: (
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            title: "Grants & Incubation Support",
            description: "Navigate government grants, incubator programs, and non-dilutive funding opportunities.",
            icon: (
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Deal Origination & Structuring",
            description: "End-to-end deal structuring, term sheet negotiation, and transaction execution.",
            icon: (
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Mergers and Acquisitions",
            description: "Strategic mergers and acquisitions guidance for growth and exit opportunities.",
            icon: (
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            )
        },
        {
            title: "Documentation",
            description: "Comprehensive legal and compliance documentation support for seamless deals.",
            icon: (
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        }
    ];

    return (
        <div id="services" className="py-24 bg-white dark:bg-black relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-4">
                    <span className="px-4 py-2 border border-gray-300 dark:border-white/20 rounded-full text-gray-700 dark:text-white text-sm font-medium">Our Expertise</span>
                </div>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-black dark:text-white sm:text-5xl mb-6">
                        Comprehensive Solutions for <span className="text-[#B8860B] dark:text-gold">Your Success</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                        From funding to strategic growth, we provide end-to-end support tailored to your startup's unique needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-200 dark:bg-[#1A1A1A] dark:border-white/5 p-10 rounded-3xl hover:border-[#B8860B]/30 dark:hover:border-gold/30 transition-all duration-300 group shadow-sm hover:shadow-md dark:shadow-none">
                            <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-[#B8860B]/10 text-[#B8860B] dark:bg-gold/10 dark:text-gold mb-8 group-hover:bg-[#B8860B] dark:group-hover:bg-gold group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                                {React.cloneElement(service.icon, { className: "w-8 h-8 text-[#B8860B] dark:text-gold group-hover:text-white dark:group-hover:text-black transition-colors duration-300" })}
                            </div>
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
