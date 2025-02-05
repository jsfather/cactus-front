import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="flex h-24 items-center rounded-[50px] px-10 shadow-[0px_2px_8px_0px_#F0F1F2]">
      <nav className="flex w-full items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={70}
            height={60}
            alt="Logo of the company"
          />
        </Link>
        <div className="flex w-full flex-row-reverse items-center gap-4">
          <Button title="ورود | ثبت نام" variant="primary" />
          <Button title="دوره‌های آموزشی" variant="link" />
          <Button title="محصولات" variant="link" />
          <Button title="درباره ما" variant="link" />
          <Button title="ارتباط با ما" variant="link" />
          <Button title="بلاگ" variant="link" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
