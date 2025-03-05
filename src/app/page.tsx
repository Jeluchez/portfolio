'use client';
import { Footer, Header } from '@/components';
import { careerData } from '@/constants/careerData';
import { CareerHistory2 } from '@/components/careerHistory/CareerHistory2';
import GithubGrid from '@/components/projects/Projects';
import { Skills } from '@/components/skill/Skills';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Home() {

  const { scrollYProgress } = useScroll();
  const careerOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const careerY = useTransform(scrollYProgress, [0.5, 0.7], [100, 0]);
  return (
    // <div className="wrapper  min-h-screen overflow-hidden bg-gradient-to-b from-orange from-10% via-gold via-20%  to-lilac to-90% ">
    <div className="wrapper  min-h-screen overflow-hidden bg-lilac dark:bg-dark-purple flex flex-col text-lg">
      <div className="w-full max-w-lg mx-auto relative z-2 h-[var(--h-header)] px-4 sm:px-0">
        <Header/>
      </div>
      {/* <main className='flex-1'> */}
      <div className='overlays w-full h-[500px] top-0 overflow-hidden absolute'>
        <div className="gradient-overlay1"></div>
        <div className="gradient-overlay2"></div>
      </div>
      {/* summary */}
      <div className='flex flex-col h-[calc(100vh-var(--h-header))] justify-center items-center'>
        <div className="w-full max-w-lg mx-auto p-4 pb-8 sm:p-8 rounded-3xl -mt-[var(--h-header)] text-center">
          <div className='relative z-1'>
            <h1 className="text-3xl md:text-6xl font-bold font-heading text-theme-heading transition-colors">
          Hi, I am Jose! 👋🏾</h1>
          </div>
        </div>
        <Image
          src="/avatar_face.webp"
          alt="icon"
          width={300}
          height={300}
          className="w-56 sm:w-300"
        />

        <ChevronDownIcon className='floating-arrow bottom-8 absolute w-6'/>
      </div>


      {/* about me */}

      <div className=" w-full  max-w-lg mx-auto p-4 pb-32 relative z-1 flex px-4">
        <div className='sm:flex-2/3'>
          <h2 className="text-xl md:text-3xl font-bold font-heading text-theme-heading transition-colors">
          About me 🤷🏾‍♂️</h2>
          <p className="text-md text-theme-text md:text-lg my-6">I am a full stack software engineer working with JavaScript and on all-things-web. I passionate to create applications user-centric. I am currently based in Buenaventura, Colombia (🇨🇴).
          </p>
          <p className="text-md text-theme-text md:text-lg my-6">
          I have over five years of experience working as a developer. In the past couple of years, I’ve been more focused on technologies such as React and Nextjs. I’ve had the opportunity to work in a multicultural team on a large project with many small, interconnected teams. I’ve also participated in medium to small projects where I had to build the entire application from design to deployment.
          </p>
        </div>
        <div>
          <Image
            src="/about.png"
            alt="about me"
            width={700}
            height={600}
            className="[clip-path:ellipse(100%_50%_at_center)] hidden sm:block"
          />
        </div>
      </div>

      {/* projects */}
      <div className=" w-full  max-w-lg mx-auto px-4 pb-32 sm:p-8 sm:pb-32 relative z-1 flex">
        <div className='flex-2/3'>
          <h2 className="text-xl md:text-3xl font-bold font-heading text-theme-heading transition-colors mb-8">
          Recent projects 🧰</h2>
          <GithubGrid/>
        </div>
      </div>


      {/* Experience */}
      <motion.div
        style={{
          opacity: careerOpacity,
          y: careerY
        }}
      >
        <CareerHistory2 careerData={careerData} />
      </motion.div>
      {/* skill */}
      <Skills/>

      <Footer/>
    </div>

  );
}
