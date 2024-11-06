import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CartTwo = () => {
  const cardsRef = useRef([]);

  const carData = [
    {
      name: "BMW M4",
      price: "$74,900",
      speed: "180 mph",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format"
    },
    {
      name: "Mercedes AMG GT",
      price: "$118,600",
      speed: "198 mph",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&auto=format"
    },
    {
      name: "Audi R8",
      price: "$158,600",
      speed: "205 mph",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&auto=format"
    }
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: -100,
          rotateZ: -10
        },
        {
          opacity: 1,
          x: 0,
          rotateZ: 0,
          duration: 1.2,
          delay: index * 0.4,
          ease: "elastic.out(1, 0.8)"
        }
      );
    });
  }, []);

  return (
    <div className="flex gap-8 items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {carData.map((car, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden w-[320px] transform hover:scale-105 transition-all duration-300 ease-out"
        >
          <div className="h-[220px] overflow-hidden">
            <img 
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{car.name}</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-emerald-600">{car.price}</span>
              <span className="text-sm text-gray-600">Max Speed: {car.speed}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartTwo;
