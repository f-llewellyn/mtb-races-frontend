import type { Metadata } from 'next';
import { Geist, Geist_Mono, Poppins } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SwitchBack',
  description:
    'Signing onto MTB races is a pain in the arse. Switchback brings together all UK mountain bike races in one place.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      </head>
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
