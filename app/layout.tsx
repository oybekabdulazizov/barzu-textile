import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Barzu',
  description: 'Barzu Textile',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${dmSans.className} min-h-screen flex flex-col justify-between`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
