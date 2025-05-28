import React from 'react';

const LogoDisplay = ({ 
    logoData,
    logoImage,
    companyName,
    foundedYear,
    designer,
    history,
    colors,
    variations
}) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
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

            {/* Main Content */}
            <main className="flex-grow">
                {/* Logo Hero Section */}
                <section className="py-16 md:py-24 fade-in">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="md:w-1/2 flex items-center justify-center bg-gray-50 rounded-2xl p-12">
                                <div className="logo-preview w-full max-w-md">
                                    <img src={logoImage} 
                                         alt={`${companyName} Logo`} 
                                         className="w-full h-auto"/>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <div className="mb-6">
                                    <span className="text-sm text-gray-500">{logoData.category} / Founded {foundedYear}</span>
                                    <h1 className="text-4xl md:text-5xl font-light mt-2">{companyName}</h1>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{logoData.yearRange}</span>
                                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{designer}</span>
                                    </div>
                                </div>
                                
                                <div className="prose max-w-none text-gray-700 mb-8">
                                    <p>{logoData.description}</p>
                                </div>
                                
                                <div className="flex flex-wrap gap-4 mb-8">
                                    <a href="#downloads" className="px-6 py-3 bg-black text-white rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition">
                                        <i className="fas fa-download"></i>
                                        <span>Download Logo</span>
                                    </a>
                                    <a href="#history" className="px-6 py-3 border border-gray-300 rounded-lg flex items-center space-x-2 hover:bg-gray-50 transition">
                                        <i className="fas fa-history"></i>
                                        <span>View History</span>
                                    </a>
                                </div>
                                
                                <div className="border-t border-gray-100 pt-6">
                                    <h3 className="text-sm font-medium mb-4">Official Colors</h3>
                                    <div className="flex space-x-4">
                                        {colors.map((color, index) => (
                                            <div key={index}
                                                 className="color-swatch w-10 h-10 rounded-full"
                                                 style={{ backgroundColor: color.value }}
                                                 title={color.name}
                                                 data-color={color.value}>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History Section */}
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-2xl font-light mb-6">Historical Evolution</h2>
                        <div className="space-y-8">
                            {history.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <h4 className="font-medium mb-1">{item.year}: {item.title}</h4>
                                    <p className="text-gray-500">{item.description}</p>
                                    {item.image && (
                                        <div className="mt-4">
                                            <img src={item.image} 
                                                 alt={item.title} 
                                                 className="w-64 h-auto border border-gray-200 rounded"/>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Variations Section */}
                <section className="py-12 md:py-20 bg-gray-50">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-2xl font-light mb-6">Logo Variations</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {variations.map((variation, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-6">
                                    <div className={`p-8 rounded flex justify-center mb-6 ${variation.bgColor || 'bg-gray-100'}`}>
                                        <img src={variation.image} 
                                             alt={variation.title} 
                                             className="h-20 object-contain"/>
                                    </div>
                                    <h3 className="font-medium mb-2">{variation.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{variation.description}</p>
                                    <a href="#" className="text-sm font-medium flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                                        <span>Download</span>
                                        <i className="fas fa-arrow-down text-xs"></i>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LogoDisplay; 