import React from "react";

const AboutUs: React.FC = () => {
    return (
        <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <img
                src="/assets/about.jpeg"
                alt="About Us"
                width={1200}
                height={800}
                className="w-full h-64 object-cover rounded-lg"
            />
        <h2 className="text-2x1 font-semibold text-gray-800 mt-6">who are we?</h2>
        <p className="text-gray-600 mt-4">
        We are a team dedicated to bringing you a fast, safe and enjoyable online shopping experience.
        From quality products to excellent customer service, we are here for you. 
        </p>

        <h2 className="text-2x1 font-semibold text-gray-800 mt-6">our mission</h2>
        <p className="text-gray-600 mt-4">making it easy for customers to shop with technology-based</p>
        </section>
        );
};

export default AboutUs;