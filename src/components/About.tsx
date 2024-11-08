import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export const About= ({ about }:{about:any}) => {
    console.log(about)
  return (
    <div className="container mx-auto py-12 px-6 my-[10%]">
      <div className="flex justify-center items-center">
        <Card className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <img
              src={about.logo}
              alt={`${about.companyName} logo`}
              className="w-32 h-32 sm:w-48 sm:h-48 object-contain mb-6 sm:mb-0"
            />
            <div className="sm:ml-6 text-center sm:text-left my-auto">
              <h2 className="text-3xl font-bold text-[#133e87]">{about.companyName}</h2>
              {/* <p className="text-lg text-gray-700 mt-2">{about.companyName}</p> */}
              <div className="mt-4">
                <p className="text-sm text-gray-500">Email: {about.email?about.email:"N/A"}</p>
                <p className="text-sm text-gray-500">Phone: {about.phone?about.phone:"N/A"}</p>
                <p className="text-sm text-gray-500">Location: {about.companyAdress?about.companyAdress:"N/A"}</p>
                <Link
                  to='/'
                  className="text-sm text-[#133e87] hover:text-blue-600"
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
