import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Web Craft (UI/UX)",
    subtitle: "A Great Fundraising Opportunity to Showcase Your Talent",
    date: "5th April, 2025",
    location: "TGPCET,Nagpur",
    EntryFees: 120,
    IFees: 50,
    time: "10:00 AM - 4:00 PM",
    mode: "Offline",
    problemStatement: [
      "IT Department Portal",
      "Student Innovation ",
      "TNP portal ",
      "Smart Attendance",
      "Anonomasy Complete",
    ],
    about: [
      {
        heading: "About the Event",
        description: [
          "Web Craft (UI/UX) is an exciting competition designed for creative minds passionate about designing intuitive and visually appealing user experiences.",
          "Participants will have the opportunity to showcase their UI/UX skills by crafting innovative, user-friendly web designs that solve real-world problems.",
          "This event encourages designers to think critically about usability, aesthetics, and accessibility while working within time constraints.",
          "Judges will evaluate designs based on creativity, functionality, user engagement, and responsiveness, making it a perfect platform to gain industry insights and recognition.",
        ],
      },
    ],
    highlights: [
      "Creativity & Functionality",
      "Team Collaboration",
      "Exciting Prizes & Recognition",
      "Innovative Challenges",
      "Networking Opportunities",
      "Unleash Your Potential",
    ],
    contacts: [
      { name: "Prajakta Bhatkar", phone: "+91 7499971182" },
      { name: "Harsh Bawane", phone: "+91 9322103145" },
    ],
  },
  {
    id: 2,
    title: "Project Competition",
    subtitle: "Present Your Innovative Tech Projects",
    date: "5th April, 2025",
    location: "TGPCET,Nagpur",
    EntryFees: 120,
    IFees: 50,
    time: "10:00 AM - 4:00 PM",
    img:"WhatsApp Image 2025-03-17 at 20.59.35_eb4241d4.jpg",
    mode: "Offline",
    about: [
      {
        heading: "About the Event",
        description: [
          "The Project Competition is a platform for students and professionals to showcase their innovative ideas and technical expertise through working projects.",
          "Participants can present projects across various domains, including Artificial Intelligence, Web & App Development, IoT, Blockchain, Cybersecurity, and more.",
          "This event is designed to encourage creativity, problem-solving, and technical excellence, providing participants an opportunity to demonstrate their ability to transform ideas into functional solutions.",
          "Each project will be evaluated based on innovation, real-world applicability, technical complexity, and presentation skills.",
        ],
      },
    ],
    highlights: [
      "Technical Innovation",
      "Team Collaboration",
      "Exciting Rewards",
    ],
    contacts: [
      { name: "Roshan Khandekar ", phone: "+91 9209851880" },
      { name: "Ishika Wasnik ", phone: "+91 9834401276" },
    ],
  },
  {
    id: 3,
    title: "Poster Competition",
    subtitle: "Design Creative and Impactful Posters",
    date: "5th April, 2025",
    location: "TGPCET,Nagpur",
    EntryFees: 120,
    IFees: 50,
    time: "10:00 AM - 4:00 PM",
    img:"WhatsApp Image 2025-03-17 at 20.59.35_fbc35e73.jpg",
    mode: "Online & Offline",
    problemStatement: [
      "Space Exploration: The Future",
      "The Power of Solar Energy",
      "Digital Learning: A New Era",
      " Global Warming: A Wake-Up Call",
      "Hyperautomation : the end of manual work",
    ],
    about: [
      {
        heading: "About the Event",
        description: [
          "Unleash your creativity and artistic skills by designing visually appealing posters that effectively communicate powerful ideas.",
          "This competition provides a platform for students, designers, and artists to express their thoughts through striking visuals and compelling storytelling.",
          "Participants can choose themes from various categories, including technology, social awareness, sustainability, innovation, and more.",
          "The competition will be judged on creativity, originality, clarity of message, design aesthetics, and overall impact.",
        ],
      },
    ],
    highlights: [
      "Creativity & Design",
      "Best Poster Award",
      "Exposure & Recognition",
    ],
    contacts: [
      { name: "Khushi Pardhi", phone: "+91 8149373998" },
      { name: "Rutuja Kshirsagar", phone: "+91 9921286511" },
    ],
  },
  {
    id: 4,
    title: "E-Gaming",
    subtitle: "Compete in Valorant, BGMI, and Free Fire",
    date: "5th April, 2025",
    location: "TGPCET,Nagpur",
    EntryFees: 120,
    IFees: 50,
    time: "10:00 AM - 4:00 PM",
    img:"egaming.PNG",
    mode: "Offline",
    about: [
      {
        heading: "About the Event",
        description: [
          "Step into the ultimate battleground of e-sports and test your gaming skills in an intense and competitive environment.",
          "This event brings together passionate gamers to compete in some of the most popular titles: Valorant, BGMI, and Free Fire.",

          "The tournament will be conducted in different stages, including qualifiers, semi-finals, and grand finals, ensuring a fair and competitive challenge for all participants.",
          "Teams and solo players will have the opportunity to showcase their reflexes, tactical strategies, and teamwork in fast-paced action-packed games.",
          "Winners will receive exciting prizes, recognition, and a chance to prove themselves among the best in the gaming community.",
        ],
      },
    ],
    highlights: [
      "Intense Gaming Battles",
      "Massive Prize Pool",
      "Compete with the Best",
    ],
    contacts: [
      { name: "Anshul Ramteke", phone: "+91 8605383520" },
      { name: "Pranav Ladole", phone: "+91 9325506283" },
    ],
  },
  {
    id: 5,
    title: "Problem Solving",
    subtitle: "Solve Real-World Problems with Innovative Solutions",
    date: "5th April, 2025",
    location: "TGPCET, Nagpur",
    EntryFees: "Free",
    IFees: "Free",
    time: "10:00 AM - 4:00 PM",
    mode: "Offline",
    problemStatement: [
      "Agriculture: Improve crop yield and sustainability.",
      "Food: Reduce food waste and ensure food security.",
      "Environment: Combat climate change and promote renewable energy.",
      "Defence Security ",
      "Education: Revolutionize learning through technology.",
    ],
    about: [
      {
        heading: "About the Event",
        description: [
          "The Problem Solving event is a platform for creative minds to tackle real-world challenges and propose innovative solutions.",
          "Participants will work individually or in teams to analyze problems, brainstorm ideas, and develop actionable solutions.",
          "This event encourages critical thinking, collaboration, and out-of-the-box problem-solving skills.",
          "Participants will present their solutions to a panel of judges, who will evaluate based on creativity, feasibility, and impact.",
          "Whether you're a student, professional, or enthusiast, this event is your chance to make a difference and showcase your problem-solving prowess.",
        ],
      },
    ],
    highlights: [
      "Real-World Challenges",
      "Innovative Solutions",
      "Expert Mentorship",
      "Networking Opportunities",
      "Prizes and Recognition",
      
    ],
    contacts: [
      { name: "Arya Deshmukh", phone: "+91 9890205953" },
      { name: "Prajwal Tekale", phone: "+91 8421270924" },
    ],
  }
];


const EventInfo = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));
  // console.log(event);
  
  useEffect(() => {
    if (event) {
      // console.log(event);
      
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []); // Add `event` as a dependency

  if (!event) {
    return <h2 className="text-center text-white">Event not found</h2>;
  }

  return (
    <div className="text-white min-h-screen px-4 py-3 mb-8 ">
      <div className="max-w-4xl mx-auto">
        {/* Event Header Section */}
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl sm:text-5xl mb-3 md:text-6xl bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            {event.title}
          </h1>
            {/* Event Image */}
            
            {event.img && (
  <div className="flex justify-center mb-12">
    <img
      src={`/${event.img}`} // Assuming images are stored in the `public` folder
      alt={event.title}
      className="rounded-lg shadow-lg w-full max-w-sm "
    />
  </div>
)}
          <p className="mt-4 text-lg text-gray-300">{event.subtitle}</p>
          <div className="mt-6 space-y-2 text-gray-300">
            <p>
              🗓️ <span className="font-semibold">Date:</span>{" "}
              <span className="text-orange-400">{event.date}</span>
            </p>
            <p>
              ⏳ <span className="font-semibold">Timing:</span>{" "}
              <span className="text-green-400">{event.time}</span>
            </p>
            <p>
              📍 <span className="font-semibold">Location:</span>{" "}
              <span className="text-gray-400">{event.location}</span>
            </p>
            <p>
              🖥️ <span className="font-semibold">Mode:</span>{" "}
              <span className="text-purple-400">{event.mode}</span>
            </p>
            <p>
              <span className="font-semibold">Group Entry Fees (MAX 3-4 Members):</span>{" "}
              <span className="text-yellow-400 font-bold">₹ {event.EntryFees}</span>
            </p>
            <p>
              <span className="font-semibold">Solo Entry Fees:</span>{" "}
              <span className="text-yellow-400 font-bold">₹ {event.IFees}</span>
            </p>
          </div>
        </div>
<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
 {/* Problem Statements Section */}
 {event.problemStatement && event.problemStatement.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center text-cyan-400 mb-4">
              Problem Statements
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {event.problemStatement.map((statement, index) => (
                <li key={index}>{statement}</li>
              ))}
            </ul>
          </div>
        )}
</div>
       {/* Download PPT Button (Only for Poster Competition) */}
       {event.id === 3 && ( // Check if the event is Poster Competition
          <div className="flex justify-center mb-12">
            <a
              href="/poster competition tgpcet.pptx" // Replace with the actual path to the PPT file
              download="Poster_Competition_Guidelines.pptx"
              className="bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform hover:shadow-cyan-500/50 "
            >
              Use Poster Format
            </a>
          </div>
        )}

        {/* Register Button */}
        <div className="flex justify-center mb-12">
          <button
            className="bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform hover:shadow-cyan-500/50"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeaZU2cy_ZZGOkNJQv8SYu-MY6x4XKCcnl7N6iMvQFPY8ZyrQ/formResponse",
                "_blank"
              )
            }
          >
            Register Now
          </button>
        </div>

        {/* About the Event Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
            About the Event
          </h2>
          {event.about.map((section, index) => (
            <div key={index} className="space-y-4 text-gray-300">
              {section.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Key Highlights Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
            Key Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                <p className="text-center text-gray-300">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Contact Us</h2>
          <p className="text-gray-300 mb-4">
            For any inquiries or further details, please contact:
          </p>
          <div className="space-y-2">
            {event.contacts.map((contact, index) => (
              <p key={index} className="text-gray-300">
                <span className="font-semibold">{contact.name}:</span>{" "}
                <a
                  href={`tel:${contact.phone}`}
                  className="text-cyan-400 hover:underline"
                >
                  {contact.phone}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;