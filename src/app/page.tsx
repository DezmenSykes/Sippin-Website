import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import SkyDive from "./components/SkyDive/SkyDive";
import Carousel from "./components/Carousel/Carousel";
import Details from "./components/Details/Details";

export default function Home() {
  const headingTest: string = "Sippin'";
  return (
    <>
      <Hero />
      <SkyDive />
      <Carousel />
      <Details />
    </>
  );
}
