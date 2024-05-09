import Image from "next/image"

import logo from "../../public/assets/logo.svg"
import telegram from "../../public/assets/telegram.svg"
import X from "../../public/assets/X.svg"

const Nav = () => {
  return (
    <nav className="h-[74px] md:px-20 px-8 flex justify-between">
      <div className="flex items-center">
          <a href="/">
              <Image src={logo} alt="logo" className="md:w-full w-[90px]"/>
          </a>
        </div>
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
  )
}

export default Nav
