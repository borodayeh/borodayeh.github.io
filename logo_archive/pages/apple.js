import React from 'react';
import LogoDisplay from '../components/LogoDisplay';

const ApplePage = () => {
    const appleData = {
        logoData: {
            category: "Technology",
            yearRange: "1977 - Present",
            description: "The Apple logo is one of the most iconic brand marks in history. The bitten apple symbolizes knowledge, innovation, and the biblical reference to the fruit of knowledge."
        },
        logoImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png",
        companyName: "Apple",
        foundedYear: 1976,
        designer: "Rob Janoff",
        colors: [
            { name: "Apple Black", value: "#000000" },
            { name: "Apple White", value: "#FFFFFF" },
            { name: "Apple Gray", value: "#86868B" }
        ],
        history: [
            {
                year: "1976",
                title: "Newton's Apple",
                description: "The first Apple logo featured Sir Isaac Newton sitting under an apple tree, designed by Ronald Wayne.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Apple_Computer_Logo_rainbow.svg/800px-Apple_Computer_Logo_rainbow.svg.png"
            },
            {
                year: "1977",
                title: "Rainbow Apple",
                description: "Rob Janoff designed the iconic rainbow apple logo, which was used until 1998.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Apple_Computer_Logo_rainbow.svg/800px-Apple_Computer_Logo_rainbow.svg.png"
            },
            {
                year: "1998",
                title: "Monochrome Era",
                description: "Apple simplified its logo to a monochrome design, reflecting its focus on clean, minimalist design."
            }
        ],
        variations: [
            {
                title: "Primary Logo",
                description: "Standard black Apple logo",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png"
            },
            {
                title: "White Version",
                description: "White Apple logo for dark backgrounds",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png",
                bgColor: "bg-gray-800"
            },
            {
                title: "Rainbow Legacy",
                description: "Historic rainbow version from 1977-1998",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Apple_Computer_Logo_rainbow.svg/800px-Apple_Computer_Logo_rainbow.svg.png"
            }
        ]
    };

    return <LogoDisplay {...appleData} />;
};

export default ApplePage; 