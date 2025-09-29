import React from "react";
import { motion } from "framer-motion";

interface ModalProps {
  service: { id: number; name: string; image: string; nestedTooltip?: string[] };
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ service, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-pink-600">{service.name}</h3>
        <p className="text-gray-700">Here you can add more details about {service.name}.</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
