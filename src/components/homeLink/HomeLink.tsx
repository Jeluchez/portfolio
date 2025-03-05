import Image from 'next/image';
import Link from 'next/link';

export const HomeLink = () => {
  return (
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
  );
};
