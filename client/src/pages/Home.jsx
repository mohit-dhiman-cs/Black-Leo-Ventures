import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Problem from '../components/Problem';
import Process from '../components/Process';
import SuccessStories from '../components/SuccessStories';
import FundingSystem from '../components/FundingSystem';
import PartnershipModels from '../components/PartnershipModels';
import FounderNote from '../components/FounderNote';
import FAQ from '../components/FAQ';
import Commitment from '../components/Commitment';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-white dark:bg-dark-bg min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <Hero />
            <Problem />
            <Process />
            <Services />
            {/*
       - [x] Create "Indian Startup Success Stories" Section
    - [x] Ensure Theme Support for New Content
- [x] **Add Final Content Sections**
    - [x] Add "Our 4-Step Funding System" Section
    - [x] Add "Flexible Partnership Models" Section
    - [x] Add "Founder Note / Call to Action" Section
    - [x] Verify Layout and Theme Switching
- [ ] Push Changes to GitHub      */}
            <SuccessStories />
            <FounderNote />
            <FundingSystem />
            <PartnershipModels />
            <FAQ />
            <Commitment />
            <CallToAction />

            {/* Mission / Connect Section */}
            <div id="philosophy" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent dark:from-black dark:to-transparent z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:text-center">
                        <h2 className="text-base text-lemon-green font-semibold tracking-wide uppercase">Our Philosophy</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Bridging the Gap Between Build and Scale
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 lg:mx-auto">
                            We believe that great founders deserve more than just a check. They deserve a partner who understands the code, the market, and the hustle.
                        </p>
                    </div>

                    <div id="contact" className="mt-16 bg-transparent">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

const ContactForm = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/contact/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div className="w-full flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
                <h2 className="text-4xl font-extrabold tracking-tight text-black dark:text-white mb-6">
                    Ready to build the <span className="text-gold">future?</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Whether you need funding, development resources, or strategic advice, Black Leo Ventures is here to help you deploy your vision.
                </p>

                <div className="space-y-6">
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email Us</p>
                            <p className="text-lg font-medium text-black dark:text-white">hello@blackleoventures.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 bg-white dark:bg-white/5 rounded-2xl p-8 border border-gray-100 dark:border-white/10 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gold focus:bg-white focus:ring-1 focus:ring-gold dark:bg-black/50 dark:border-white/10 dark:text-white dark:placeholder-gray-500 dark:focus:bg-black dark:focus:border-gold transition-colors"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gold focus:bg-white focus:ring-1 focus:ring-gold dark:bg-black/50 dark:border-white/10 dark:text-white dark:placeholder-gray-500 dark:focus:bg-black dark:focus:border-gold transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-gold focus:bg-white focus:ring-1 focus:ring-gold dark:bg-black/50 dark:border-white/10 dark:text-white dark:placeholder-gray-500 dark:focus:bg-black dark:focus:border-gold transition-colors"
                            placeholder="How can we help?"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-black bg-gold hover:bg-[#F0C000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-all duration-300 disabled:opacity-50 shadow-lg"
                        >
                            {status === 'sending' ? (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                        {status === 'success' && <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg text-center font-medium">Message sent successfully!</div>}
                        {status === 'error' && <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-center font-medium">Something went wrong. Please try again.</div>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Home;
