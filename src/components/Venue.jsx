import React from "react";

// Sample images
import venue1 from "../assets/venue/venue1.jpg";
import venue2 from "../assets/venue/venue2.jpg";
import venue3 from "../assets/venue/venue3.jpg";
import venue4 from "../assets/venue/venue4.jpg";
import venue5 from "../assets/venue/venue5.JPG";

import venue6 from "../assets/venue/venue6.jpg";

// Sample venue data
const venues = [
  {
    name: "Jollywood resort",
    description:
      "A perfect place for your wedding celebrations with modern facilities and beautiful decor.",
    image: venue1,
    mapLink: "https://maps.app.goo.gl/2ewQkP7dGGermzfY7?g_st=aw",
  },
  {
    name: "The Westin Pushkar Resort & Spa",
    description:
      "An open-air venue surrounded by nature and luxury for your dream day.",
    image: venue2,
    mapLink: "https://maps.google.com/?cid=2061227694950579194&entry=gps&g_st=aw",
  },
  {
    name: "Bageecha resort",
    description:
      "A blend of tradition and elegance for cultural and royal celebrations.",
    image: venue3,
    mapLink: "https://maps.app.goo.gl/nHMLq1tDZXN2em6a9?g_st=aw",
  },
  {
    name: "Pushkar Fort",
    description:
      "Perfectly crafted outdoor venue for grand wedding ceremonies and parties.",
    image: venue4,
    mapLink: "https://maps.app.goo.gl/9sGmffXYN2z4aagj9?g_st=aw",
  },
  {
    name: "The Country Side Resort",
    description:
      "Celebrate your love with a beautiful view and elegant open space.",
    image: venue5,
    mapLink: "https://maps.google.com/?cid=2313147457633772692&entry=gps&g_st=aw",
  },
  {
    name: "Kesariya Bagh Resort",
    description:
      "Classic charm meets modern luxury in this centrally located venue.",
    image: venue6,
    mapLink: "https://maps.google.com/?cid=8235544928662673220&entry=gps&g_st=aw",
  },
];

const Venue = () => {
  return (
    <div className="mt-8 mb-8">
      <div className="venue-section py-10 bg-pink-100 container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-pink-800 mb-2"> Venues</h2>
          <p className="text-pink-700 text-lg">
            Explore the highlights of our venue collection
          </p>
        </div>

        {/* Venue Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {venues.map((venue, index) => (
            <a
              key={index}
              href={venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="venue-card block max-w-sm w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="venue-image h-[200px] overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-pink-800 mb-2">
                  {venue.name}
                </h3>
                <p className="text-pink-600 mb-4">{venue.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Venue;
