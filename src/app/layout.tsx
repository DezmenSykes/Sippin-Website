import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local'
import Header from './components/Header';

const alpino = localFont({
  src: '../../public/fonts/Alpino-Variable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-alpino'
})

export const metadata: Metadata = {
  title: 'Welcome to Sippin\'',
  description: 'A dope bev for the youngsters and healthy folk.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={alpino.variable}>
      <body>
        <Header />
        <main> 
           {children}
        </main>
      </body>
    </html>
  );
}
