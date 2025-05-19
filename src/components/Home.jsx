import React from "react";

const Home = () => {
  return (
    <div className="relative w-full min-h-full bg-gray-800">
      <img
        src="https://i.ibb.co/RG394zv1/banner-Image.jpg"
        alt="Banner Image"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#bf2160] mb-4">
          Power Up Your Fitness
        </h1>
        <p className="text-lg md:text-xl text-amber-50 max-w-2xl">
          Achieve your goals with strength, discipline, and dedication.
        </p>
      </div>
    </div>
  );
};

export default Home;
