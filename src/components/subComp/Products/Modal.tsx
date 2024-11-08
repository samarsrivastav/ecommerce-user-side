import React from "react";
import { Carousel } from "./Carousel";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  description: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, images, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 font-bold"
        >
          X
        </button>
        <h2 className="text-2xl font-bold text-center text-[#133e87] mb-4">
          {title}
        </h2>
        <Carousel images={images} />
        <p className="text-gray-700 text-center mt-4">{description}</p>
      </div>
    </div>
  );
};
