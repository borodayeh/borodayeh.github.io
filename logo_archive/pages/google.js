import React from 'react';
import LogoDisplay from '../components/LogoDisplay';

const GooglePage = () => {
    const googleData = {
        logoData: {
            category: "Technology",
            yearRange: "1998 - Present",
            description: "Google's logo represents the company's playful and innovative approach to technology. The colorful, geometric letters have become one of the most recognizable brand marks in the world."
        },
        logoImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png",
        companyName: "Google",
        foundedYear: 1998,
        designer: "Ruth Kedar",
        colors: [
            { name: "Google Blue", value: "#4285F4" },
            { name: "Google Red", value: "#EA4335" },
            { name: "Google Yellow", value: "#FBBC05" },
            { name: "Google Green", value: "#34A853" }
        ],
        history: [
            {
                year: "1998",
                title: "First Logo",
                description: "The original Google logo was created by Sergey Brin using GIMP. It featured a simple wordmark with a green 'G' and red 'o'.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
            },
            {
                year: "1999",
                title: "Ruth Kedar Design",
                description: "Professional designer Ruth Kedar created a new logo with the now-famous primary colors and playful typography."
            },
            {
                year: "2015",
                title: "Current Logo",
                description: "Google introduced a new, flatter design that maintains the playful character while being more modern and scalable."
            }
        ],
        variations: [
            {
                title: "Primary Logo",
                description: "Standard Google logo with full wordmark",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
            },
            {
                title: "G Icon",
                description: "Standalone G icon for favicon and small applications",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
            },
            {
                title: "Monochrome",
                description: "Single-color version for specific applications",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png",
                bgColor: "bg-gray-800"
            }
        ]
    };

    return <LogoDisplay {...googleData} />;
};

export default GooglePage; 