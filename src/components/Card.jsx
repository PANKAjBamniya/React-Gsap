import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Card = () => {
  const cardsRef = useRef([]);

  const carData = [
    {
      name: "Tesla Model S",
      price: "$89,990",
      speed: "200 mph",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=500&auto=format"
    },
    {
      name: "Porsche 911",
      price: "$106,100", 
      speed: "182 mph",
      image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=500&auto=format"
    },
    {
      name: "McLaren 720S",
      price: "$299,000",
      speed: "212 mph", 
      image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=500&auto=format"
    }
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          rotateY: 90
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power3.out"
        }
      );
    });
  }, []);

  return (
    <div className="flex gap-8 items-center justify-center min-h-screen">
      {carData.map((car, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="bg-white rounded-xl shadow-2xl overflow-hidden w-[300px] transform transition-transform hover:scale-105 duration-300"
        >
          <div className="h-[200px] overflow-hidden">
            <img 
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{car.name}</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-green-600">{car.price}</span>
              <span className="text-sm text-gray-600">Top Speed: {car.speed}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
