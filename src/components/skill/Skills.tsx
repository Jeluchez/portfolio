import React from 'react';
import { Aws, Docker, Firebase, Flutter, Git, NextIcon, NodeIcon, ReactIcon,Sql,Typescript } from '@/components/icons';
import { CiCd } from '../icons/CiCd';

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
      title: 'Sql'
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
    }

  ];
  return (
    <div className=" w-full  max-w-lg mx-auto p-4 pb-8 sm:p-8  relative z-1">
      <h2 className="text-xl md:text-3xl font-bold font-heading text-theme-heading transition-colors">
      My Skills 💻</h2>
      <div className='mt-8 flex space-x-4 space-y-16 flex-wrap justify-center items-center'>
        {items.map(({ icon: Icon,title }, index) => (
          <div key={index} className='flex flex-col items-center justify-center w-1/6'>
            <Icon className='w-14 h-14'/>
            <span className='text-sm block mt-1'>{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
