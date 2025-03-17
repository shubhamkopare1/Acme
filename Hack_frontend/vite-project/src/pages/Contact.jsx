import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-white py-4 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[3rem] font-bold uppercase tracking-widest text-center animate-pulse bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
  📞 Get in Touch
</h2>

        <p className="text-gray-400 mt-2">
        Don't hesitate to connect for any questions, collaborations, or just a friendly chat! 😊
        </p>

        <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-orange-400"> Our Event Address</h3>
          <p className="mt-2">
            <strong>Address:</strong> Tulsiramji Gaikwad Patil College Of Engineering, Mohgao, Nagpur, Maharashtra 
          </p>
          <p className="mt-2">
            <strong>Represent :</strong>  Information Technology
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href="https://www.tgpcet.com/" className="text-blue-400 hover:underline">
              https://www.tgpcet.com/
            </a>
          </p>
        
         
          <p>
            <strong> Aniket Narnaware : </strong> +91 7498258715
          </p>
          <p>
            <strong>Arya Deshmukh : </strong> +91 9890205953

          </p>
          <p>
            <strong> Pratik Sable : </strong> +91 8669831622


          </p>
          <p>
            <strong>Location:</strong> TGPCET , Information Technology Department
          </p>

          {/* <div className="flex justify-center space-x-4 mt-4 flex-wrap ">
            <a href="#" className="bg-blue-600 p-3 rounded-lg text-white flex items-center">
              <FaFacebook className="mr-2" /> Facebook
            </a>
            <a href="#" className="bg-blue-500 p-3 rounded-lg text-white flex items-center">
              <FaTwitter className="mr-2" /> Twitter
            </a>
            <a href="#" className="bg-pink-500 p-3 rounded-lg text-white flex items-center">
              <FaInstagram className="mr-2" /> Instagram
            </a>
            <a href="#" className="bg-blue-700 p-3 rounded-lg text-white flex items-center">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
          </div> */}
        </div>

        <h3 className="text-xl font-semibold text-green-400 mt-10">📌 Find Us Here</h3>

        {/* Google Map Embed */}
        <div className="mt-6">
        <iframe
  className="w-full h-80 rounded-lg shadow-lg border border-gray-700"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3495438371925!2d79.0125!3d20.9607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd495fb10c4e4f3%3A0x77a4d2c0a5a8f6f9!2sTulsiramji%20Gaikwad-Patil%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1712345678901"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
