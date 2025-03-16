import { useState, useEffect } from "react";
import React from "react";

const Countdown = () => {
  const targetDate = new Date("April 5, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

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
      <div className="mt-20 flex flex-col items-center text-center">
      <h1 className="text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold tracking-[5px] uppercase bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
    National Level Event
  </h1>
  {/* Heading */}
  <h3 className="text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold tracking-[5px] uppercase bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
    TECH-AXION 2K25
  </h3>
  <h5
    className="text-[1rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] font-semibold leading-[2] mx-auto my-[25px] text-gray-400"
    style={{ margin: 0 }}
  >
    Organized by Information Technology Department, TGPCET
  </h5>
<br />
<br />
     
<br />
<h1 className="text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.2rem]  font-bold uppercase mb-6 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-400 bg-clip-text text-transparent mg-0">
Countdown
</h1>
<div className="flex flex-wrap justify-center gap-6 mt-5">

        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="relative flex flex-col items-center transform transition duration-500 hover:scale-105"
          >
            {/* Outer Glass Effect */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center rounded-xl bg-[#101026] shadow-lg border border-blue-500/50 backdrop-blur-xl overflow-hidden">
              {/* Flip Animation for Countdown */}
              <div className="text-5xl sm:text-6xl font-bold text-white relative z-10 animate-flip">
                {value}
              </div>
            </div>
            {/* Unit Labels */}
            <span className="text-lg sm:text-xl uppercase mt-3 text-gray-300 tracking-widest">
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


