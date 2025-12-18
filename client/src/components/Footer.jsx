import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/lion-icon.png" alt="Black Leo" className="h-14 w-auto dark:invert-0 bg-white/5 rounded-lg p-1" />
                            <div className="flex flex-col leading-none font-display font-bold tracking-tighter text-black dark:text-white">
                                <span className="text-xl">BLACK LEO</span>
                                <span className="text-bronze text-sm tracking-[0.2em]">VENTURES</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm max-w-xs">
                            Empowering the next generation of founders with capital, code, and conviction.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-gray-900 dark:text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 dark:text-gray-500 hover:text-lemon-green transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="text-gray-600 dark:text-gray-500 hover:text-lemon-green transition-colors text-sm">Portfolio</a></li>
                            <li><a href="#" className="text-gray-600 dark:text-gray-500 hover:text-lemon-green transition-colors text-sm">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 dark:text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 dark:text-gray-500 hover:text-lemon-green transition-colors text-sm">Fundraising</a></li>
                            <li><a href="#" className="text-gray-600 dark:text-gray-500 hover:text-lemon-green transition-colors text-sm">Development</a></li>
                            <li><a href="#" className="text-gray-600 dark:text-gray-500 hover:text-lemon-green transition-colors text-sm">Advisory</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 dark:text-white font-bold mb-4 uppercase text-sm tracking-wider">Connect</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 dark:text-gray-500 hover:text-lemon-green transition-colors text-sm">Twitter</a></li>
                            <li><a href="#" className="text-gray-600 dark:text-gray-500 hover:text-lemon-green transition-colors text-sm">LinkedIn</a></li>
                            <li><a href="#" className="text-gray-600 dark:text-gray-500 hover:text-lemon-green transition-colors text-sm">Email</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 text-sm">
                        &copy; {new Date().getFullYear()} Black Leo Ventures. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-600 hover:text-black dark:hover:text-white text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-600 hover:text-white text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
