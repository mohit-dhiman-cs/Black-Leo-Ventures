import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What if my startup is pre-revenue?",
            answer: "We work with startups at all stages, including pre-revenue. Our team specializes in helping early-stage founders articulate their vision, build compelling financial projections, and connect with investors who focus on seed and pre-seed opportunities. We'll help you showcase your market potential, team strength, and traction metrics that matter most to early-stage investors."
        },
        {
            question: "How many investor introductions will I actually get?",
            answer: "Quality over quantity is our motto. We match you with investors specifically interested in your sector, stage, and geography. While the exact number varies based on your startup's profile, we ensure every introduction is a warm, qualified lead."
        },
        {
            question: "What's your fee structure?",
            answer: "We believe in transparency. Our fee structure is designed to align with your success. We offer flexible models including fee-based, equity-based, and hybrid options, ensuring we grow only when you grow."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Everything you need to know about working with Black Leo Ventures
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-[#151515] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md dark:hover:shadow-none">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                            >
                                <span className="text-lg font-bold text-black dark:text-white">{faq.question}</span>
                                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div className={`px-8 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
