import React from 'react';
import { Aws, Docker, Firebase, Flutter, Git, NextIcon, NodeIcon, ReactIcon,Sql,Typescript,CiCd, Tailwind } from '@/components/icons';

export const Skills = () => {

  const items = [
    {
      icon: Typescript,
      title: 'Typescript'
    },
    {
      icon: ReactIcon,
      title: 'React'
    },
    {
      icon: NextIcon,
      title: 'Next'
    },
    {
      icon: NodeIcon,
      title: 'Node'
    },
    {
      icon: Flutter,
      title: 'Flutter'
    },
    {
      icon: Sql,
      title: 'Sql / NoSql '
    },
    {
      icon: Aws,
      title: 'AWS'
    },
    {
      icon: Firebase,
      title: 'Firebase'
    },
    {
      icon: Docker,
      title: 'Docker'
    },
    {
      icon: CiCd,
      title: 'CI/CD'
    },
    {
      icon: Git,
      title: 'Git'
    },
    {
      icon: Tailwind,
      title: 'Tailwind'
    }

  ];

  const margin:Record<string,string> = {
    'Tailwind': '-mt-16'
  };
  return (
    <div className=" w-full  max-w-lg mx-auto p-4 pb-8 sm:p-8 sm:pb-32 relative z-1">
      <h2 className="text-xl md:text-3xl font-bold font-heading text-theme-heading transition-colors">
      My Skills 💻</h2>
      <div className='mt-8 flex space-y-16 flex-wrap justify-center items-center'>
        {items.map(({ icon: Icon,title }, index) => (
          <div key={index} className={`flex flex-col w-2/6 sm:w-1/6 ${margin[title]} items-center`}>
            <Icon className='w-14 h-14 fill-black dark:fill-white-400 hover:fill-orange hover:dark:fill-purple'/>
            <span className='text-sm block mt-1'>{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
