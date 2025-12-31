import { useState, useEffect } from "react";
import React from "react";

const Countdown = () => {
  // Set the target date to April 5, 2025, 10:00 AM
  const targetDate = new Date("April 5, 2025 10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  // Function to calculate time remaining
  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

  // If time is over, return all zeros
  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="w-full text-white bg-transparent min-h-auto">
      {/* Added margin-top to position it below the navbar */}
      <div className=" p-6 flex flex-col items-center text-center">
        <h1 className="text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold tracking-[5px]  uppercase bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 bg-clip-text text-transparent">
          National Level Event
        </h1>
        {/* Heading */}
        <h3 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold tracking-wide uppercase bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent mt ">
          TECH-AXION 2K25
        </h3>
        <h5 className="text-lg sm:text-sm md:text-2xl lg:text-2xl  text-cyan-400 text-center mt-3 max-w-4xl leading-relaxed">
          Organized by Department of Information Technology of Tulsiramji
          Gaikwad Patil College of Engineering and Technology, Nagpur 
        </h5>
        <h5 className="text-lg sm:text-sm md:text-2xl lg:text-2xl  text-cyan-400 text-center  max-w-4xl leading-relaxed">
           (An Autonomous Institute)
        </h5>
        <br />
        <br />
        <h1 className="text-[2rem] sm:text-[1.9rem] md:text-[2rem] lg:text-[2.2rem]  font-bold uppercase mb-4 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-400 bg-clip-text text-transparent mg-0 animate-pulse">
          Countdown
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div
              key={index}
              className="text-white bg-gradient-to-br from-gray-900 to-gray-800 border-[3px] border-purple-500/60 rounded-xl shadow-md shadow-purple-500/50 hover:shadow-lg hover:shadow-purple-500/70 transition-all duration-300 ease-in-out font-extrabold text-[clamp(1rem,3vw,1.5rem)] w-[clamp(80px,15vw,130px)] p-4 text-center"
            >
              <span className="text-[clamp(1.5rem,4vw,2rem)] text-cyan-300">
                {value}
              </span>
              <br />
              <span className="text-xs uppercase tracking-widest text-gray-300">
                {unit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
