import React from "react";

// Import venue images
import jollywood from "../assets/venue/venue1.jpg";
import ananta from "../assets/venue/venue2.jpg";
import bageecha from "../assets/venue/venue3.jpg";
import pushkara from "../assets/venue/venue4.jpg";
import bhanwar from "../assets/venue/venue5.JPG";
import fort from "../assets/venue/venue6.jpg";
import regenta from "../assets/venue/venue2.jpg";
import westin from "../assets/venue/venue1.jpg";
import countryside from "../assets/venue/venue5.JPG";
import kesariya from "../assets/venue/venue6.jpg";

// Decorative image under heading
import divider from "../assets/s1.png"; // <- Add this image to your assets

const venues = [
  {
    name: "Jollywood Resort",
    image: jollywood,
    mapLink: "https://maps.google.com/?q=Jollywood+Resort+Pushkar",
    description:
      "A luxurious venue surrounded by serene landscapes, perfect for destination weddings and peaceful retreats.",
    features: ["Panoramic views", "Private villas and lawns", "On-site event planners"],
  },
  {
    name: "Ananta Resort",
    image: ananta,
    mapLink: "https://maps.google.com/?q=Ananta+Resort+Pushkar",
    description:
      "Known for its grandeur and elegance, Ananta offers world-class amenities and stunning hill views.",
    features: ["Infinity pool", "Lavish banquet halls", "Luxury spa and rooms"],
  },
  {
    name: "Bageecha Resort",
    image: bageecha,
    mapLink: "https://maps.google.com/?q=Bageecha+Resort+Pushkar",
    description:
      "A garden-themed resort ideal for traditional weddings and open-air events.",
    features: ["Lush gardens", "Open-air dining", "Ethnic decor options"],
  },
  {
    name: "Pushkara Resort",
    image: pushkara,
    mapLink: "https://maps.google.com/?q=Pushkara+Resort+Pushkar",
    description:
      "Combining Rajasthani charm with modern luxury, this resort is a popular wedding destination.",
    features: ["Cultural ambiance", "Indoor & outdoor venues", "Heritage-style architecture"],
  },
  {
    name: "Bhanwar Singh Palace",
    image: bhanwar,
    mapLink: "https://maps.google.com/?q=Bhanwar+Singh+Palace+Pushkar",
    description:
      "A royal palace resort offering a regal backdrop for events and celebrations.",
    features: ["Palatial architecture", "Grand ballroom", "Valet & concierge service"],
  },
  {
    name: "Pushkara Fort",
    image: fort,
    mapLink: "https://maps.google.com/?q=Pushkara+Fort+Pushkar",
    description:
      "A heritage fort venue with rustic elegance, ideal for traditional ceremonies.",
    features: ["Fort-style venue", "Cultural programs", "Camel & elephant rides"],
  },
  {
    name: "Regenta Resort",
    image: regenta,
    mapLink: "https://maps.google.com/?q=Regenta+Resort+Pushkar",
    description:
      "Modern amenities meet natural charm, perfect for a balanced celebration experience.",
    features: ["Poolside functions", "Multi-cuisine restaurant", "Conference facilities"],
  },
  {
    name: "The Westin Resort",
    image: westin,
    mapLink: "https://maps.google.com/?q=The+Westin+Pushkar",
    description:
      "Luxury and comfort define this high-end resort with picturesque views and international hospitality.",
    features: ["5-star amenities", "Spa & wellness center", "Private balconies"],
  },
  {
    name: "The Country Side Resort",
    image: countryside,
    mapLink: "https://maps.google.com/?q=The+Country+Side+Resort+Pushkar",
    description:
      "A peaceful escape with rustic charm, ideal for intimate events and nature lovers.",
    features: ["Eco-friendly environment", "Organic food", "Budget-friendly packages"],
  },
  {
    name: "Kesariya Bagh Resort",
    image: kesariya,
    mapLink: "https://maps.google.com/?q=Kesariya+Bagh+Pushkar",
    description:
      "A culturally rich venue offering traditional Rajasthani hospitality in a tranquil setting.",
    features: ["Folk music & dance", "Spacious lawns", "Heritage architecture"],
  },
];

const Venue = () => {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
    
      <h1 className="text-4xl font-bold text-pink-800 text-center"> Top Venue</h1>
   

        <div className="flex justify-center mb-10 mt-3">
                <img src={divider} alt="Divider" className="h-6" />
              </div>
      


      <div className="space-y-12">
        {venues.map((venue, index) => (
          <a
            key={index}
            href={venue.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start bg-pink-200 p-6 rounded-lg shadow-md border border-pink-100 hover:shadow-lg hover:border-pink-300 transform hover:scale-105 transition duration-300"
>
        
              <div className="w-full md:w-1/2">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-64 object-cover rounded-lg shadow-sm"
                />
              </div>

        
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold text-pink-700">
                  {venue.name}
                </h2>
                <p className="text-pink-700 mt-2">{venue.description}</p>
                <ul className="list-disc pl-5 mt-3 space-y-1 text-pink-600">
                  {venue.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Venue;
