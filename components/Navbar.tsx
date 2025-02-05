import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="flex h-24 items-center rounded-[50px] px-10 shadow-md">
      <nav className="flex w-full items-center gap-4">
        <Link href="/" className="text-xl font-black text-black">
          <Image
            src="/images/logo.png"
            width={70}
            height={60}
            alt="Logo of the company"
          />
        </Link>
        <div className="flex w-full flex-row-reverse gap-4">
          <Button title="test" />
          <Link href="/" className="text-xl font-black text-black">
            memories
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
