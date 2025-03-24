import Image from 'next/image';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function Home() {
  const headingTest: string = 'Sippin\'';
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-3xl text-center'>Welcome to Sippin! </h1>
    </main>
  );
}
