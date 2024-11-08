import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export const Erorr = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-[#133e87]">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="mt-6">
        <Button color="gray" className="bg-[#CBDCEB] font-bold text-[#133E87] hover:bg-[#CBDCEB] hover:text-[#133e87]">
          Go Home
        </Button>
      </Link>
    </div>
  );
};
