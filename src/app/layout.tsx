import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='flex justify-between p-3 bg-stone-800 text-white'>
          <h2 className='text-2xl font-semibold'>Sine&apos;s Blog</h2>
          <div className='flex gap-4 items-center'>
            <Link href='/home'>home</Link>
            <Link href='/about'>about</Link>
            <Link href='/posts'>posts</Link>
            <Link href='/contact'>contact</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
