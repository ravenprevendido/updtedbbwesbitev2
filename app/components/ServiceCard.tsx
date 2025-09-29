import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  service: {
    id: number;
    name: string;
    image: string;
    nestedTooltip?: string[];
  };
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer bg-gradient-to-b from-gray-100 to-gray-300 rounded-lg shadow-lg overflow-hidden group"
    >
      <Image
        src={service.image}
        alt={service.name}
        width={400}
        height={300}
        className="object-cover w-full h-40 transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <span className="text-lg font-semibold text-pink-500">{service.name}</span>
      </div>
      <div className="p-4 text-center text-gray-900 font-medium">{service.name}</div>
    </div>
  );
};

export default ServiceCard;
