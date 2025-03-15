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
    className="text-[1rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] font-semibold leading-[2] mx-auto my-[25px] bg-gradient-to-r from-green-400 via-lime-500 to-green-400 bg-clip-text text-transparent"
    style={{ margin: 0 }}
  >
    Organized by Information Technology Department, TGPCET
  </h5>
<br />
<br />
     
<br />
<div style={{ display: "flex" ,gap : "1rem" , } } className=" flex flex-wrap justify-center">


{/* Countdown Timer */}
<h2 className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text border-[3px] border-blue-400/50 rounded-xl shadow-[4px_4px_20px_#0088ff80] font-bold text-[clamp(1.2rem,3vw,1.8rem)] max-w-[150px] w-[clamp(100px,12vw,150px)] p-4 text-center relative">
  {timeLeft.days} <br />days
</h2>
<h2 className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text border-[3px] border-blue-400/50 rounded-xl shadow-[4px_4px_20px_#0088ff80] font-bold text-[clamp(1.2rem,3vw,1.8rem)] max-w-[150px] w-[clamp(100px,12vw,150px)] p-4 text-center relative">
   {timeLeft.hours} <br /> hours 
</h2>
<h2 className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text border-[3px] border-blue-400/50 rounded-xl shadow-[4px_4px_20px_#0088ff80] font-bold text-[clamp(1.2rem,3vw,1.8rem)] max-w-[150px] w-[clamp(100px,12vw,150px)] p-4 text-center relative">
  {timeLeft.minutes} <br /> minutes 
</h2>
<h2 className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text border-[3px] border-blue-400/50 rounded-xl shadow-[4px_4px_20px_#0088ff80] font-bold text-[clamp(1.2rem,3vw,1.8rem)] max-w-[150px] w-[clamp(100px,12vw,150px)] p-4 text-center relative">
   {timeLeft.seconds} <br /> seconds
</h2>

</div>
      </div>
    </div>
  );
};

export default Countdown;


