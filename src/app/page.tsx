import { Header } from '@/components';

export default function Home() {
  return (
    // <div className="wrapper  min-h-screen overflow-hidden bg-gradient-to-b from-orange from-10% via-gold via-20%  to-lilac to-90% ">
    <div className="wrapper  min-h-screen overflow-hidden bg-lilac">
      <div className="w-full max-w-lg mx-auto relative z-2">
        <Header/>
      </div>
      <div className="bg-white-400 w-full max-w-lg mx-auto p-4 pb-8 sm:p-8 rounded-3xl mt-20 relative z-1">
        <div className='overlays'>
          <div className="gradient-overlay1"></div>
          <div className="gradient-overlay2"></div>
        </div>

        <div className='relative z-1'>
          <h1 className="text-4xl md:text-8xl font-bold font-heading text-theme-heading transition-colors">
          Hi, I am Jose! 👋</h1>
          <p className="text-md text-theme-text md:text-lg my-6">I am a full stack software engineer working with JavaScript and on all-things-web. I passionate to create applications user-centric. I am currently based in Buenaventura, Colombia (🇨🇴).</p>
        </div>

      </div>
    </div>

  );
}
