

import Image from "next/image"
import telegram from "../../public/assets/telegram.svg"
import X from "../../public/assets/X.svg"

const Header = () => {
  return (
    <header className="lg:h-[100vh] w-full" style={{ backgroundImage: `url(/assets/hero-bg.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <section className="flex flex-col items-center text-white justify-center md:pt-[100px] py-[50px] w-full gap-3">
        <h1 className="font-bold text-[38px] md:text-[76px] leading-[80px]">BLOQVU</h1>
        <p className="md:text-[23px] text-[14px] flex text-center font-light leading-7">The next gen web3 video platform <br /> hosting exclusive content and rewarding the fans</p>
        <div className="flex flex-col gap-2 mb-3">
            <div className="flex items-center justify-center cursor-pointer text-black h-[44px] md:w-[348px] w-[280px] bg-[#FFAA02] rounded-3xl">
                <a href="" className="text-[16px] font-light">Buy $BLOQY From UNISWAP</a>
            </div>
            <div className="flex items-center justify-center cursor-pointer text-black h-[44px] md:w-[348px] w-[280px] bg-[#FFAA02] rounded-3xl">
                <a href="" className="text-[16px] font-light">View Dexscreener Chart</a>
            </div>
        </div>
            <p className="text-[12px] flex justify-center flex-col md:flex-row md:text-[16px]"><span className="text-[#FFAA02]">Contact Address: </span>0x9de16c805a3227b9b92e39a446f9d56cf59fe640</p>
            <div className="flex items-center justify-center gap-3 mt-10 mb-5">
                <div className="bg-white flex items-center justify-start pl-[2px] rounded-full w-8 h-8 cursor-pointer">
                    <a href="">
                        <Image src={telegram} alt="telegram" />
                    </a>
                </div>
                <div className="bg-white flex items-center justify-center rounded-full w-8 h-8 cursor-pointer">
                    <a href="">
                        <Image src={X} alt="X" />
                    </a>
                </div>
            </div>
        </section>
    </header>
  )
}

export default Header
