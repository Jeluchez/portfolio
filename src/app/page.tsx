import { Footer, Header } from '@/components';
import { Skills } from '@/components/skill/Skills';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Home() {
  return (
    // <div className="wrapper  min-h-screen overflow-hidden bg-gradient-to-b from-orange from-10% via-gold via-20%  to-lilac to-90% ">
    <div className="wrapper  min-h-screen overflow-hidden bg-lilac flex flex-col text-lg">
      <div className="w-full max-w-lg mx-auto relative z-2 h-[var(--h-header)]">
        <Header/>
      </div>
      {/* <main className='flex-1'> */}
      <div className='overlays w-full h-[550px] top-0 overflow-hidden fixed'>
        <div className="gradient-overlay1"></div>
        <div className="gradient-overlay2"></div>
      </div>
      {/* summary */}
      <div className='flex h-[calc(100vh-var(--h-header))] justify-center items-center'>
        <div className=" bg-white-400 w-full h-[300px] max-w-lg mx-auto p-4 pb-8 sm:p-8 rounded-3xl -mt-[var(--h-header)]">
          <div className='relative z-1'>
            <h1 className="text-4xl md:text-8xl font-bold font-heading text-theme-heading transition-colors">
          Hi, I am Jose! 👋</h1>
            <p className="text-md text-theme-text md:text-lg my-6">I am a full stack software engineer working with JavaScript and on all-things-web. I passionate to create applications user-centric. I am currently based in Buenaventura, Colombia (🇨🇴).</p>
          </div>
        </div>

        <ChevronDownIcon className='floating-arrow bottom-8 absolute w-6'/>
      </div>

      {/* about me */}

      <div className=" w-full  max-w-lg mx-auto p-4 pb-8 sm:p-8  relative z-1 flex">
        <div className='flex-2/3'>
          <h2 className="text-xl md:text-3xl font-bold font-heading text-theme-heading transition-colors">
          About me</h2>
          <p className="text-md text-theme-text md:text-lg my-6">Hi again! Thanks for scrolling this far🤗...like I was saying,
          I have over 6 year of experience years of experience working as a full stack developer I’ve worked on the frontend, backend, and a little bit of mobile. and the last couple of years I’ve been more focused on technologies such as React and Nextjs.
          I’ve had the opportunity to work in a multicultural team with a huge project with many small interconnected team. Also I’ve participated in small projects when I have had to create the project from scratch.
          </p>
        </div>
        <div>
          <Image
            src="/about.png"
            alt="about me"
            width={700}
            height={600}
            className="[clip-path:ellipse(100%_50%_at_center)]"
          />
        </div>
      </div>

      {/* skill */}
      <Skills/>
      <Footer/>
    </div>

  );
}
