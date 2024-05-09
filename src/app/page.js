import About from "@/components/About";
import Header from "@/components/Header";
import Roadmap from "@/components/Roadmap";
import Tokeconomics from "@/components/Tokeconomics";
import Footer from "../components/Footer"
import Navbar from "@/components/Navbar";
import Nav from "@/components/Nav";
import Foot from "@/components/Foot";


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Nav />
      <Header />
      <About />
      <Roadmap />
      <Tokeconomics />
      <Foot />
    </>
  );
}
