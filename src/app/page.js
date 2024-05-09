import About from "@/components/About";
import Header from "@/components/Header";
import Roadmap from "@/components/Roadmap";
import Tokeconomics from "@/components/Tokeconomics";
import Footer from "../constants/Footer"
import Navbar from "@/constants/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Roadmap />
      <Tokeconomics />
      <Footer />
    </>
  );
}
