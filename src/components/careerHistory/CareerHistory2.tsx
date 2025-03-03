'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { cardVariants, containerVariants, detailsVariants, lineVariants, listItemVariants, techBadgeVariants } from '@/constants/animationVariants';

interface Job {
  company: string;
  client: string;
  location: string;
  period: string;
  title: string;
  responsibilities: string[];
  technologies: string[];
}

interface CareerHistoryProps {
  careerData: Job[];
}

export const CareerHistory2: React.FC<CareerHistoryProps> = ({ careerData }) => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const toggleExpand = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <motion.div
      ref={containerRef}
      className="w-full max-w-lg mx-auto sm:p-8 sm:pb-32"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <h2 className="text-xl md:text-3xl font-bold font-heading text-theme-heading transition-colors mb-8">
      Career History</h2>

      <div className="space-y-12">
        {careerData.map((job, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -5 }}
            className="relative"
          >
            {/* Timeline line */}
            {index < careerData.length - 1 && (
              <motion.div
                className="absolute left-7 top-8 w-0.5 bg-purple-800  z-0"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              />
            )}

            <div className="flex gap-4">
              {/* Timeline dot */}
              <div
                className="mt-1.5 flex-shrink-0 w-4 h-4 rounded-full bg-orange z-10"
              />
              {/* Content */}
              <div className="flex-1">
                <motion.div
                  onClick={() => toggleExpand(index)}
                  className="cursor-pointer bg-white-400  dark:bg-black-400 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  whileHover={{
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="sm:flex sm:justify-between sm:items-start">
                    <div>
                      <div className='flex'>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-light-white mr-1">{job.title}</h3>
                        <p className='mt-2 sm:mt-0 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium tag'>{job.period}</p>
                      </div>
                      <p className="text-lg text-orange mt-1">{/*job.company*/} {job.client}</p>
                      {/* <p className="text-gray-600 mt-1">{job.location}</p> */}
                    </div>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(index);
                      }}
                      className="w-6 h-6"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedJob === index ? <ChevronDownIcon/> : <ChevronUpIcon />}
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    <motion.div
                      variants={detailsVariants}
                      initial="collapsed"
                      animate={expandedJob === index ? 'expanded' : 'collapsed'}
                      exit="collapsed"
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-gray-200">
                        <h4 className="font-medium text-gray-900">Responsibilities:</h4>
                        <ul className="mt-2 space-y-2">
                          {job.responsibilities.map((responsibility, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start"
                              variants={listItemVariants}
                            >
                              <motion.span
                                className="mt-1 mr-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                              />
                              <span className="text-gray-700 dark:text-gray-400">{responsibility}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <h4 className="font-medium text-gray-900 mt-4">Technologies:</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {job.technologies.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              custom={idx}
                              variants={techBadgeVariants}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tag"
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: '#FF7D00',
                                color: '#fff'
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
