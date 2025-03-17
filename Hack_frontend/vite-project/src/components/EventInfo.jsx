import React from "react";
import { useParams } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Web Craft (UI/UX)",
    subtitle: "A Great Fundraising Opportunity to Showcase Your Talent",
    date: "5th April, 2025",
    location:"TGPCET,Nagpur",
    EntryFees: 120,
    IFees:50,
    time:"10:00 AM - 4:00 PM",
    problemStatement:[
      "Departmental Portal Web Design",
      "T&P Portal Web Design ",
      "Student Inovation Idea Web Design",
    ],
    about: [
      {
        heading: "About the Event",
        description: [
          "Web Craft (UI/UX) is an exciting competition designed for creative minds passionate about designing intuitive and visually appealing user experiences.",
        "Participants will have the opportunity to showcase their UI/UX skills by crafting innovative, user-friendly web designs that solve real-world problems.",
        "This event encourages designers to think critically about usability, aesthetics, and accessibility while working within time constraints.",
        "Judges will evaluate designs based on creativity, functionality, user engagement, and responsiveness, making it a perfect platform to gain industry insights and recognition."
        ]
      }
    ],
    highlights: [
      "Creativity & Functionality",
      "Team Collaboration",
      "Exciting Prizes & Recognition",
      "Innovative Challenges",
      "Networking Opportunities",
      "Unleash Your Potential"
    ],
    contacts: [
      { name: "Prajakta Bhatkar", phone: "+91 7499971182" },
      { name: "Harsh Bawane", phone: "+91 9322103145" }
    ]
  },
  {
    id: 2,
    title: "Project Competition",
    subtitle: "Present Your Innovative Tech Projects",
    date: "5th April, 2025",
    location:"TGPCET,Nagpur",
    EntryFees: 120,
    IFees:50,
    time:"10:00 AM - 4:00 PM",
    about: [
      {
        heading: "About the Event",
        description: [
          "The Project Competition is a platform for students and professionals to showcase their innovative ideas and technical expertise through working projects.",
          "Participants can present projects across various domains, including Artificial Intelligence, Web & App Development, IoT, Blockchain, Cybersecurity, and more.",
          "This event is designed to encourage creativity, problem-solving, and technical excellence, providing participants an opportunity to demonstrate their ability to transform ideas into functional solutions.",
          "Each project will be evaluated based on innovation, real-world applicability, technical complexity, and presentation skills.",
  
        ]
      }
    ],
    highlights: [
      "Technical Innovation",
      "Team Collaboration",
      "Exciting Rewards"
    ],
    contacts: [
      { name: "Roshan Khandekar ", phone: "+91 9209851880" },
      { name: "Ishika Wasnik ", phone: "+91 9834401276" },
    ]
  },
  {
    id: 3,
    title: "Poster Competition",
    subtitle: "Design Creative and Impactful Posters",
    date: "5th April, 2025",
    location:"TGPCET,Nagpur",
    EntryFees: 120,
    IFees:50,
    time:"10:00 AM - 4:00 PM",
    about: [
      {
        heading: "About the Event",
        description: [
          "Unleash your creativity and artistic skills by designing visually appealing posters that effectively communicate powerful ideas.",
          "This competition provides a platform for students, designers, and artists to express their thoughts through striking visuals and compelling storytelling.",
          "Participants can choose themes from various categories, including technology, social awareness, sustainability, innovation, and more.",
          "The competition will be judged on creativity, originality, clarity of message, design aesthetics, and overall impact.",
          
        ]
      }
    ],
    highlights: [
      "Creativity & Design",
      "Best Poster Award",
      "Exposure & Recognition"
    ],
    contacts: [
      { name: "Khushi Pardhi", phone: "+91 8149373998" },
      { name: "Rutuja Kshirsagar", phone: "+91 9921286511" },
    ]
  },
  {
    id: 4,
    title: "E-Gaming",
    subtitle: "Compete in Valorant, BGMI, and Free Fire",
    date: "5th April, 2025",
    location:"TGPCET,Nagpur",
    EntryFees: 120,
    IFees:50,
    time:"10:00 AM - 4:00 PM",
    about: [
      {
        heading: "About the Event",
        description: [
         "Step into the ultimate battleground of e-sports and test your gaming skills in an intense and competitive environment.",
        "This event brings together passionate gamers to compete in some of the most popular titles: Valorant, BGMI, and Free Fire.",
       
        "The tournament will be conducted in different stages, including qualifiers, semi-finals, and grand finals, ensuring a fair and competitive challenge for all participants.",
        "Teams and solo players will have the opportunity to showcase their reflexes, tactical strategies, and teamwork in fast-paced action-packed games.",
        "Winners will receive exciting prizes, recognition, and a chance to prove themselves among the best in the gaming community.",
        ]
      }
    ],
    highlights: [
      "Intense Gaming Battles",
      "Massive Prize Pool",
      "Compete with the Best"
    ],
    contacts: [
      { name: "Anshul Ramteke", phone: "+91 8605383520" },
      { name: "Pranav Ladole", phone: "+91 9325506283" },
    ]
  },
  {
    id: 5,
    title: "Startup Pitch Fest",
    subtitle: "Pitch Your Startup Ideas to Investors",
    date: "5th April, 2025",
    location:"TGPCET,Nagpur",
    EntryFees: "Free",
    IFees:"Free",
    time:"10:00 AM - 4:00 PM",
    about: [
      {
        heading: "About the Event",
        description: [
          "A golden opportunity for budding entrepreneurs to pitch their startup ideas to investors and industry leaders."
        ]
      }
    ],
    highlights: [
      "Funding Opportunities",
      "Networking with Investors",
      "Exclusive Mentorship"
    ],
    contacts: [
      { name: "Arya Deshmukh", phone: "+91 9890205953" },
      { name: "Prajwal Tekale", phone: "+91 8421270924" },
    ]
  }
];

const EventInfo = () => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <h2 className="text-center text-white">Event not found</h2>;
  }

  return (
    <div className="text-white min-h-screen px-4 py-4 flex flex-col items-center">
      <div className="mb-16 w-full max-w-4xl flex flex-col items-center">
        <div className="text-center">
        <h1 className=" font-bold tracking-[5px] uppercase font-bold uppercase tracking-widest text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent
  text-[2rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.5rem]">
  {event.title}
</h1>
   <img src="/egaming.PNG" alt="" />
          <p className="mt-2 text-lg">{event.subtitle}</p>
          <p className="mt-2 font-semibold"> 🗓️ Date : <span className="  text-orange-400 font-semibold"> {event.date}</span></p>
          <p className="mt-2 font-semibold">⏳Timing : <span className="  text-green-400 font-semibold"> {event.time}</span></p>
          <p className="mt-2 font-semibold">📍Location: <span className="text-white text-gray-400">{event.location}</span></p>
          <p className="mt-2 font-semibold">Group Entry Fees (MAX 3 - 4 Member) : <span className="text-yellow-400 font-bold text-lg">₹ {event.EntryFees}</span></p>
          <p className="mt-2 font-semibold">Solo Entry Fees : <span className="text-yellow-400 font-bold text-lg">₹ {event.IFees}</span></p>
        </div>
        <div className="flex justify-center">
        <button
  className="mt-6 bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeaZU2cy_ZZGOkNJQv8SYu-MY6x4XKCcnl7N6iMvQFPY8ZyrQ/viewform", "_blank")}
>
  Register Now
</button>
        </div>
        <div className="max-w-3xl text-center mt-8">
          <h2 className="text-center text-3xl font-bold text-blue-400">About the Event</h2>
          {event.about.map((section, index) => (
            <div key={index}>
              {section.description.map((desc, i) => (
                <p key={i} className="mt-4 text-gray-300">{desc}</p>
              ))}
            </div>
          ))}
        </div>
      
        <div className="mt-16">
          <h2 className="text-center text-3xl font-bold text-blue-400">Key Highlights</h2>
          <div className="grid grid-cols-3 gap-4 mt-6 text-center">
            {event.highlights.map((highlight, index) => (
              <div key={index} className="p-4 border border-gray-700 rounded-lg">{highlight}</div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-blue-400">Contact Us</h2>
          <p className="mt-2">For any inquiries or further details, please contact:</p>
          {event.contacts.map((contact, index) => (
            <p key={index} className="mt-2 font-semibold">{contact.name}: {contact.phone}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
