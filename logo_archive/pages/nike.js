import React from 'react';
import LogoDisplay from '../components/LogoDisplay';

const NikePage = () => {
    const nikeData = {
        logoData: {
            category: "Sportswear",
            yearRange: "1971 - Present",
            description: "The Nike Swoosh is one of the most recognizable brand symbols in the world, representing motion and speed. Designed by Carolyn Davidson in 1971 for just $35, the logo has become synonymous with athletic excellence and innovation."
        },
        logoImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png",
        companyName: "Nike",
        foundedYear: 1964,
        designer: "Carolyn Davidson",
        colors: [
            { name: "Nike Black", value: "#000000" },
            { name: "White", value: "#FFFFFF" },
            { name: "University Red", value: "#E01E1E" }
        ],
        history: [
            {
                year: "1971",
                title: "Creation of the Swoosh",
                description: "Carolyn Davidson, a graphic design student at Portland State University, created the Swoosh logo while Phil Knight was teaching accounting classes there.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nike_logo_1971.png/800px-Nike_logo_1971.png"
            },
            {
                year: "1978",
                title: "Swoosh Standalone",
                description: "Nike began using the Swoosh without the wordmark in some applications, establishing it as a standalone brand symbol."
            },
            {
                year: "1995",
                title: "Wordmark Redesign",
                description: "Nike updated its wordmark to a more contemporary sans-serif typeface while keeping the Swoosh unchanged."
            }
        ],
        variations: [
            {
                title: "Primary Logo",
                description: "Standard black Swoosh on white background",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png"
            },
            {
                title: "Reversed Logo",
                description: "White Swoosh for dark backgrounds",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png",
                bgColor: "bg-gray-800"
            },
            {
                title: "With Tagline",
                description: "Just Do It wordmark combination",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Nike_Just_Do_It_Logo.svg/800px-Nike_Just_Do_It_Logo.svg.png"
            }
        ]
    };

    return <LogoDisplay {...nikeData} />;
};

export default NikePage; 