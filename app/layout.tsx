import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const shabnamFD = localFont({
  src: [
    {
      path: './fonts/Shabnam-Bold-FD.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Shabnam-Medium-FD.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Shabnam-FD.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Shabnam-Light-FD.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Shabnam-Thin-FD.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-shabnam-fd',
});

export const metadata: Metadata = {
  title: 'آکادمی کاکتوس',
  description: 'آموزش‌های حضوری و آنلاین رباتیک',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={shabnamFD.variable}>{children}</body>
    </html>
  );
}
