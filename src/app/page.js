import About from "@/components/About";
import Header from "@/components/Header";
import Roadmap from "@/components/Roadmap";
import Tokeconomics from "@/components/Tokeconomics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
