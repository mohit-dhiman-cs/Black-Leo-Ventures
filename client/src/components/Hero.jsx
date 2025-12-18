import React from 'react';

const Hero = () => {
    return (
        <div className="relative bg-white dark:bg-dark-bg overflow-hidden min-h-screen flex items-center transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="text-left">
                        <h1 className="text-5xl tracking-tight font-extrabold text-black dark:text-white sm:text-6xl md:text-7xl leading-tight">
                            Secure <span className="text-gold text-shadow-outline">one on</span> <br />
                            <span className="text-gold text-shadow-outline">one access</span> to <br />
                            investors
                        </h1>
                        <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
                            From building your MVP to making you investor-ready, we prepare your startup for growth and provide direct access to vetted capital.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <a
                                href="/audit"
                                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-black bg-gold hover:bg-[#F0C000] transition-all duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                AI Pitch Deck Audit
                            </a>
                            <a
                                href="https://zcal.co/blackleoventures/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-bold rounded-md text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                Schedule a Meeting
                            </a>
                        </div>

                        <div className="mt-12 flex items-center gap-8 text-sm font-semibold text-gray-600 dark:text-gray-400">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                Trusted by Startups Nationwide
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Proven Track Record
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Card Visual */}
                    <div className="relative">
                        <div className="bg-[#111] rounded-2xl p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-gray-800">
                            <div className="bg-[#0a0a0a] rounded-xl border border-gray-800 p-8 min-h-[400px] flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-50"></div>

                                <h3 className="text-[#FFD700] font-bold tracking-widest text-sm uppercase mb-6">Your Growth Partner</h3>

                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    End-to-End Growth <br /> Partnership
                                </h2>

                                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto mb-10">
                                    Beyond funding, we guide you through MVP development, market validation, and scaling strategies to build a sustainable, investor-attractive business.
                                </p>

                                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FFD700]/10 to-[#FFD700]/5 border border-[#FFD700] text-[#FFD700] text-sm font-bold hover:bg-[#FFD700] hover:text-black transition-all duration-300">
                                    Your Success is Our Mission
                                </button>

                                {/* Dots */}
                                <div className="mt-8 flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                    <div className="w-8 h-2 rounded-full bg-[#FFD700]"></div>
                                </div>

                                <div className="absolute bottom-4 right-4 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Chat Bubble */}
            {/* Floating Action Button */}
            <a
                href="https://api.whatsapp.com/send/?phone=917837059633&text=Hi%2C+I%27m+interested+in+learning+more+about+Black+Leo+Ventures.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 w-14 h-14 bg-[#FFD700] rounded-full shadow-lg flex items-center justify-center text-black z-50 hover:bg-[#F0C000] transition-colors"
                aria-label="Chat on WhatsApp"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </a>
        </div>
    );
};

export default Hero;
