import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <a href="/" className="flex items-center gap-3">
                            {/* Light Mode Logo */}
                            <img src="/logo-light.png" alt="Black Leo Ventures" className="h-12 w-auto dark:hidden" />
                            {/* Dark Mode Logo */}
                            <img src="/logo-dark.png" alt="Black Leo Ventures" className="h-12 w-auto hidden dark:block" />
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Empowering startups with strategic funding and mentorship.
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
