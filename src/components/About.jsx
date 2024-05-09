import Image from "next/image"

import coingecko from "../../public/assets/Coingecko.svg"
import Coinmarketcap from "../../public/assets/Coinmarketcap.svg"
import dextools from "../../public/assets/dextools.svg"

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#FFAA02] text-black">
        <div className="flex flex-col items-center justify-center max-w-[530px]">
            <h1 className="md:text-[76px] text-[38px] mt-10 font-bold">About Us</h1>
            <p className="text-[#100E09] md:text-[19px] px-8 md:p-0 text-center">Bloqva ia a revolutionary video platform designed to empower content creators in the music and film industry by providing a decentralized ecosystem where they can monetize their work efficiently. The platform operates on block chain technology,utilizing native cryptocurrrency token called bloquy.</p>
        </div>
        <div className="flex mb-5 gap-5">
            <Image src={coingecko} alt="coingecko" className="w-[90px] md:w-full" />
            <Image src={Coinmarketcap} alt="Coinmarketcap" className="w-[90px] md:w-full" />
            <Image src={dextools} alt="dextools" className="w-[90px] md:w-full" />
        </div>
    </section>
  )
}

export default About
