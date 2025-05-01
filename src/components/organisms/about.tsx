import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="mx-auto mt-10 max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      <img
        src="/assets/about.jpeg"
        alt="About Us"
        width={1200}
        height={800}
        className="h-64 w-full rounded-lg object-cover"
      />
      <h2 className="text-2x1 mt-6 font-semibold text-gray-800">who are we?</h2>
      <p className="mt-4 text-gray-600">
        We are a team dedicated to bringing you a fast, safe and enjoyable
        online shopping experience. From quality products to excellent customer
        service, we are here for you.
      </p>

      <h2 className="text-2x1 mt-6 font-semibold text-gray-800">our mission</h2>
      <p className="mt-4 text-gray-600">
        making it easy for customers to shop with technology-based
      </p>
    </section>
  );
};

export default AboutUs;
