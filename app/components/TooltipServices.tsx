// components/TooltipServices.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // app router
import type { Service } from "@/data/services";

interface TooltipServicesProps {
  services: Service[];
  onClose?: () => void;
  onHover?: (id: number | null) => void; // 👈 NEW
}

const TooltipServices: React.FC<TooltipServicesProps> = ({ services, onClose, onHover }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleItemClick = (serviceId: number) => {
    router.push(`/services?serviceId=${serviceId}&open=1`);
    onClose?.();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.18 }}
      className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg z-50"
    >
      <ul className="text-sm text-white relative">
        {services.map((service, index) => (
          <li
            key={service.id}
            className="px-4 py-2 hover:bg-pink-600 hover:text-white cursor-pointer transition-colors duration-200 relative"
            onMouseEnter={() => {
              setHoveredIndex(index);
              onHover?.(service.id); // 👈 notify Services.tsx
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              onHover?.(null); // 👈 reset
            }}
            onClick={() => handleItemClick(service.id)}
          >
            {service.name}
            {/* (keep nested tooltip code unchanged) */}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};


export default TooltipServices;
