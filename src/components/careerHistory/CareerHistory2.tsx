'use client';
import { useState, useRef } from 'react';
import { motion, useInView, Variants, AnimatePresence } from 'framer-motion';

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

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  })
};

const lineVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: '100%',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut'
    }
  }
};

const bulletVariants: Variants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10
    }
  },
  hover: {
    scale: 1.2,
    backgroundColor: '#FF7D00', // Orange color from your theme
    transition: { duration: 0.2 }
  }
};

const detailsVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const listItemVariants: Variants = {
  collapsed: { opacity: 0, x: -10 },
  expanded: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

const techBadgeVariants: Variants = {
  collapsed: { opacity: 0, y: 10, scale: 0.8 },
  expanded: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
};

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
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Career History</h2>

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
                className="absolute left-7 top-8 w-0.5 bg-purple-800 z-0"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              />
            )}

            <div className="flex gap-4">
              {/* Timeline dot */}
              <motion.div
                className="mt-1.5 flex-shrink-0 w-4 h-4 rounded-full bg-orange z-10"
                variants={bulletVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              />

              {/* Content */}
              <div className="flex-1">
                <motion.div
                  onClick={() => toggleExpand(index)}
                  className="cursor-pointer bg-white-400 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  whileHover={{
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="sm:flex sm:justify-between sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-lg text-orange mt-1">{job.company} | {job.client}</p>
                      <p className="text-gray-600 mt-1">{job.location}</p>
                    </div>
                    <motion.p
                      className="mt-2 sm:mt-0 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium tag"
                      animate={{
                        backgroundColor: expandedJob === index ? '#FF7D00' : '#f8f8f8',
                        color: expandedJob === index ? '#fff' : '#333'
                      }}
                    >
                      {job.period}
                    </motion.p>
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
                              <span className="text-gray-700">{responsibility}</span>
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

                  <div className="mt-4 flex justify-center">
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(index);
                      }}
                      className="text-orange hover:text-orange-800 font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedJob === index ? 'Show Less' : 'Show More'}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
