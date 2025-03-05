import Image from 'next/image';

import Link from 'next/link';
import { ThemeToggle } from '@/components';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { HomeLink } from '../homeLink/HomeLink';

export const Header = () => {
  return (
    <header className="w-full h-full py-4 flex items-center sticky top-0">
      <div className="flex items-center">
        <HomeLink/>
      </div>
      <div className='w-auto ml-auto flex space-x-2'>
        <ThemeToggle />
        <Link href="#footer">
          <EnvelopeIcon className="w-5 h-5 text-black dark:text-white hover:text-surface-3 hover:dark:text-purple"/>
        </Link>
      </div>
    </header>
  );
};
