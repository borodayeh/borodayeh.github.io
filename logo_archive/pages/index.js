import React from 'react';
import Link from 'next/link';

const HomePage = () => {
    const logos = [
        {
            name: "Google",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png",
            year: "1998 - Present",
            link: "/google"
        },
        {
            name: "Apple",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png",
            year: "1977 - Present",
            link: "/apple"
        },
        {
            name: "Nike",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png",
            year: "1971 - Present",
            link: "/nike"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
                <div className="container mx-auto px-6 py-5">
                    <div className="flex justify-between items-center">
                        <a href="/" className="text-xl tracking-tight font-light">ARCHIVE</a>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="nav-link text-sm font-light">Logos</a>
                            <a href="#" className="nav-link text-sm font-light">History</a>
                            <a href="#" className="nav-link text-sm font-light">Collections</a>
                            <a href="#" className="nav-link text-sm font-light">About</a>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16">
                <h1 className="text-4xl font-light mb-12">Logo Archive</h1>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {logos.map((logo, index) => (
                        <Link href={logo.link} key={index} className="group">
                            <div className="bg-white rounded-lg aspect-square flex items-center justify-center p-8 shadow-sm group-hover:shadow-md transition-all duration-300">
                                <img src={logo.image} 
                                     alt={logo.name} 
                                     className="max-h-24 object-contain opacity-90 group-hover:opacity-100 transition"/>
                            </div>
                            <div className="mt-4">
                                <h2 className="font-medium text-lg group-hover:text-black transition">{logo.name}</h2>
                                <p className="text-gray-500 text-sm">{logo.year}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default HomePage; 