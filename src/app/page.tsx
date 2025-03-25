import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SkyDive from "./components/SkyDive";

export default function Home() {
  const headingTest: string = "Sippin'";
  return (
    <>
      <Hero />
      <SkyDive />
    </>
  );
}
