import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onNext, onPrev }) => {
  return (
    <div className="flex justify-center items-center space-x-4 my-4">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`px-4 py-2 font-semibold text-white bg-[#133e87] rounded-lg ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
      >
        Previous
      </button>
      <span className="text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 font-semibold text-white bg-[#133e87] rounded-lg ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
      >
        Next
      </button>
    </div>
  );
};
