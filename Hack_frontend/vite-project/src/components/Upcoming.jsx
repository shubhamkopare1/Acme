import React from "react";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Web Craft(UI/UX) Design",
    description:
      "Showcase your creativity and design intuitive user experiences in this ultimate UI/UX competition.",
    img: "esport.jpg",
    entryFee: 120,
    date: "5 April 2025",
    time:"10:00 AM - 4:00 PM",
    location: "TGPCET,Nagpur",
  },
  {
    id: 2,
    title: "Project Competition",
    description:
      "Present your innovative tech projects and showcase your problem-solving skills",
    img: "project.jpg",
    entryFee: 120,
    date: "5 April 2025",
    time:"10:00 AM - 4:00 PM",
    location: "TGPCET,Nagpur",
  },
  {
    id: 3,
    title: "Poster Competition",
    description:
      "Design creative and impactful posters that visually communicate powerful ideas.",
    img: "Debate.jpg",
    entryFee: 120,
    date: "5 April 2025",
    time:"10:00 AM - 4:00 PM",
    location: "TGPCET,Nagpur",
  },
  {
    id: 4,
    title: "E-Gaming",
    description:
      "Compete in top-tier gaming battles featuring Valorant, BGMI, and Free Fire. Show your skills and dominate the battlefield!",
    img: "Projects.jpg",
    entryFee: 120,
    date: "5 April 2025",
    time:"10:00 AM - 4:00 PM",
    location: "TGPCET,Nagpur",
  },
  {
    id: 5,
    title: "Startup Pitch Fest",
    description:
      "Showcase your startup ideas to investors and industry leaders.",
    img: "Projects.jpg",
    entryFee: "Free",
    date: "5 April 2025",
    time:"10:00 AM - 4:00 PM",
    location: "TGPCET,Nagpur",
  },
];

const Upcoming = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation function

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-transparent  p-8">
      <h1 className="text-[2rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.2rem] font-bold uppercase mb-6 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-400 bg-clip-text text-transparent">
        Upcoming Events
      </h1>

      {/* Event Grid */}
      <div className="w-full h-full max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-[#101026] rounded-lg max-w-[400px] w-full p-5 text-left relative transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
          >
            {/* Event Image */}
            <img
              src={event.img}
              alt={event.title}
              className="w-full object-cover rounded-md"
            />

            {/* Event Details */}
            <div className="pb-0">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">{event.title}</h2>
                <span className="text-yellow-400 font-bold text-lg">
                  {" "}
                  ₹{event.entryFee}
                </span>
              </div>
              <p className="text-gray-300 text-sm mt-2">{event.description}</p>

              {/* Date & Location */}
              <div className="flex flex-col items-start gap-1 text-sm text-gray-400 mt-3">
                <span className="flex items-center gap-1 text-orange-400 font-semibold">
                  🗓️ Date : {event.date}
                </span>
                <span className="flex items-center gap-1 text-cyan-400  font-semibold">
                ⏳ Time : {event.time}
                </span>
                <span className="flex items-center  gap-1">
                  📍Location : {event.location}
                </span>
              </div>
              <div class="mt-5 flex gap-4"><button class="w-1/2 bg-purple-600 text-white text-sm px-4 py-2 rounded-md hover:bg-purple-700 transition hover:pointer" onClick={() => navigate(`/event/${event.id}`)}>View Details</button><button class="w-1/2 bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700 transition" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeaZU2cy_ZZGOkNJQv8SYu-MY6x4XKCcnl7N6iMvQFPY8ZyrQ/viewform", "_blank")}>Register</button></div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Upcoming;
