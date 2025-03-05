'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { careerData } from '../../constants/careerData';


export const  CareerHistory = () =>{
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className="w-full  max-w-lg mx-auto sm:p-8 sm:pb-32">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Career History</h2>

      <div className="space-y-8">
        {careerData.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline line */}
            {index < careerData.length - 1 && (
              <div className="absolute left-7 top-8 w-0.5 h-full bg-purple-800 z-0" />
            )}

            <div className="flex gap-4">
              {/* Timeline dot */}
              <div className="mt-1.5 flex-shrink-0 w-4 h-4 rounded-full bg-orange z-10" />

              {/* Content */}
              <div className="flex-1">
                <div
                  onClick={() => toggleExpand(index)}
                  className="cursor-pointer bg-white-400 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="sm:flex sm:justify-between sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-lg text-orange mt-1">{job.company} | {job.client}</p>
                      <p className="text-gray-600 mt-1">{job.location}</p>
                    </div>
                    <p className="mt-2 sm:mt-0 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium tag">
                      {job.period}
                    </p>
                  </div>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedJob === index ? 'auto' : 0,
                      opacity: expandedJob === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900">Responsibilities:</h4>
                      <ul className="mt-2 space-y-2">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mt-1 mr-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple" />
                            <span className="text-gray-700">{responsibility}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-medium text-gray-900 mt-4">Technologies:</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {job.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tag"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(index);
                      }}
                      className="text-orange hover:text-orange-800 font-medium"
                    >
                      {expandedJob === index ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
