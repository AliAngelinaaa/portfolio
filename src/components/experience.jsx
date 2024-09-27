import React from 'react';
import { motion } from 'framer-motion';
import exData from './exData';

function Experience(){
  return (
    <div className="container mx-auto px-4 py-8">
        
      <h1 className="text-3xl font-bold text-rose-600 mb-6">Work Experience</h1>
      <div className="space-y-8">
        {exData.map((data,index) => (
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src={data.Image} alt="At Company 1 Workplace" className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{data.Title}</h2>
            <h3 className="text-lg text-gray-600 mb-2">{data.Company}</h3>
            <p className="text-gray-500 mb-4">{data.Date}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {data.Description.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
        ))}
      </div>
    </div>
  );



}
export default Experience;