import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Tools = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tools = [
        {
            title: "AI Pitch Deck Audit",
            description: "Get instant, AI-powered feedback on your pitch deck. Analyze structure, content, and design to maximize your funding chances.",
            icon: (
                <svg className="w-8 h-8 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            link: "/audit",
            status: "Live"
        },
        {
            title: "Valuation Calculator",
            description: "Estimate your startup's valuation using industry-standard methodologies tailored for Indian markets.",
            icon: (
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 36v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            link: "#",
            status: "Coming Soon"
        },
        {
            title: "Investor Matchmaker",
            description: "Find the perfect investors for your startup based on stage, sector, and thesis alignment.",
            icon: (
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            link: "#",
            status: "Coming Soon"
        }
    ];

    return (
        <div className="bg-white dark:bg-black min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />

            <div className="pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-black dark:text-white tracking-tight mb-6">
                            AI Tools for <span className="text-[#FFD700]">Startups</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Leverage our suite of AI-powered tools to accelerate your fundraising journey and optimize your startup's growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tools.map((tool, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-[#111] rounded-3xl p-8 border border-gray-200 dark:border-white/10 hover:border-[#FFD700] dark:hover:border-[#FFD700] transition-all duration-300 group relative overflow-hidden">
                                {tool.status === "Live" && (
                                    <div className="absolute top-4 right-4 bg-green-500/10 text-green-500 text-xs font-bold px-3 py-1 rounded-full border border-green-500/20">
                                        LIVE
                                    </div>
                                )}
                                {tool.status === "Coming Soon" && (
                                    <div className="absolute top-4 right-4 bg-gray-500/10 text-gray-500 text-xs font-bold px-3 py-1 rounded-full border border-gray-500/20">
                                        COMING SOON
                                    </div>
                                )}

                                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {tool.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                                    {tool.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    {tool.description}
                                </p>

                                {tool.status === "Live" ? (
                                    <Link
                                        to={tool.link}
                                        className="inline-flex items-center text-[#FFD700] font-bold hover:translate-x-2 transition-transform duration-300"
                                    >
                                        Try Now
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                ) : (
                                    <span className="inline-flex items-center text-gray-400 font-medium cursor-not-allowed">
                                        Notify Me
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Tools;
