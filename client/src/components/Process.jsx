import React from 'react';

const steps = [
    {
        id: 1,
        title: 'Apply & Audit',
        description: 'We assess your pitch deck, financial metrics, and overall fundraising readiness with a comprehensive audit.',
        duration: '7 days'
    },
    {
        id: 2,
        title: 'Strategize & Build',
        description: 'We build your pitch deck, financial model, and compelling founder story that resonates with investors.',
        duration: '14 days'
    },
    {
        id: 3,
        title: 'Match & Connect',
        description: 'We match you with the right investors, send warm introductions, and prepare you for winning pitches.',
        duration: '21 days'
    },
    {
        id: 4,
        title: 'Close & Support',
        description: 'We negotiate terms, support due diligence, and ensure successful fund dispersal and ongoing growth.',
        duration: '30 days'
    }
];

const Process = () => {
    return (
        <section id="process" className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-4 tracking-tight">
                        Our 4-Step Funding System
                    </h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                        A proven, systematic approach to securing the right funding for your startup
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.id} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8 border border-gray-100 dark:border-white/10 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-2xl font-bold text-black mb-6 shadow-md">
                                {step.id}
                            </div>
                            <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                                {step.description}
                            </p>
                            <div className="flex items-center text-gray-500 dark:text-gray-500 text-sm font-medium mt-auto">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                {step.duration}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xs text-gray-400 italic">
                        * Timeline is approximate and may vary based on individual startup's requirements. Not guaranteed.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Process;
