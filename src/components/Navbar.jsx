import Image from "next/image"

import logo from "../../public/assets/logo.svg"
import telegram from "../../public/assets/telegram.svg"
import X from "../../public/assets/X.svg"

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <nav className="flex bg-black h-[74px] md:px-20 px-8">
        <div className="flex items-center">
          <a href="/">
              <Image src={logo} alt="logo" className="md:w-full w-[90px]"/>
          </a>
        </div>
      </nav>
      <nav className="flex  w-[100%] bg-black h-[74px] md:px-20 px-8">
        <div className="flex items-center gap-3">
          <div className="bg-[#FFAA02] flex items-center justify-center px-5 h-8 rounded-3xl cursor-pointer">
              <a href="">Docs</a>
          </div>
          <div className="bg-[#FFAA02] flex items-center justify-start pl-[2px] rounded-full w-8 h-8 cursor-pointer">
              <a href="">
                  <Image src={telegram} alt="telegram" />
              </a>
          </div>
          <div className="bg-[#FFAA02] flex items-center justify-center rounded-full w-8 h-8 cursor-pointer">
              <a href="">
                  <Image src={X} alt="X" />
              </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
