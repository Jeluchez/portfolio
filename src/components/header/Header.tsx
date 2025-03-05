import Image from 'next/image';

import Link from 'next/link';
import { ThemeToggle } from '@/components';

export const Header = () => {
  return (
    <header className="w-full h-full py-4 flex items-center sticky top-0">
      <div className="flex items-center">
        <Link href="/" className="flex  items-center">
          <Image
            src="/avatar-icon.png"
            alt="icon"
            width={20}
            height={20}
            className="scale-x-[-1] mr-2"
          />
          <span className="font-bold text-lg">jeluchez.com</span>
        </Link>
      </div>
      <div className='w-auto ml-auto'>
        <ThemeToggle />
      </div>
    </header>
  );
};
