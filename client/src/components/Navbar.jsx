import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Initialize theme
    React.useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            // Default to dark for this specific brand if no preference
            if (!localStorage.theme) document.documentElement.classList.add('dark');
        }
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Grants', href: 'https://getgrants.in/', external: true },
        { name: 'About Us', href: '/about' },
        { name: 'Company Profile', href: 'https://drive.google.com/file/d/1sU4-aKaIxF-ZB-IjXw9h4cwf8QEnB4q2/view', icon: true, external: true },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-sm border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <a href="#" className="flex items-center gap-3 group">
                            <img src="/lion-icon.png" alt="Black Leo" className="h-16 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-md" />
                            <div className="flex flex-col leading-none font-display font-bold tracking-tighter text-black dark:text-white">
                                <span className="text-2xl">BLACK LEO</span>
                                <span className="text-bronze text-lg tracking-[0.2em]">VENTURES</span>
                            </div>
                        </a>
                    </div>
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className={`text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${link.name === 'Company Profile' ? 'opacity-80' : ''}`}
                                >
                                    {link.icon && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                    )}
                                    {link.name}
                                </a>
                            ))}

                            <button
                                onClick={() => {
                                    document.documentElement.classList.toggle('dark');
                                    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
                                }}
                                className="text-gray-500 hover:text-black dark:hover:text-white transition-colors p-2"
                                aria-label="Toggle Theme"
                            >
                                <svg className="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <svg className="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            </button>

                            <a href="#contact" className="bg-gold text-black px-6 py-2 rounded-md font-bold hover:bg-[#F0C000] transition-colors duration-300 text-sm">
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-lemon-green block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="px-3 py-2">
                            <button
                                onClick={() => {
                                    document.documentElement.classList.toggle('dark');
                                    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
                                }}
                                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-lemon-green transition-colors"
                            >
                                <span className="mr-2">Switch Theme</span>
                                <svg className="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <svg className="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            </button>
                        </div>

                        <button className="w-full text-left bg-lemon-green text-black px-3 py-2 rounded-md font-bold hover:bg-black hover:text-lemon-green dark:hover:bg-white dark:hover:text-black transition-colors duration-300 mt-4">
                            Apply for Funding
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
