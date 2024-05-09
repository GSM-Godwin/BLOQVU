import React from 'react'

const Roadmap = () => {
  return (
    <section className="pb-52 md:px-20 px-5" style={{ backgroundImage: `url(/assets/roadmap-bg.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <h1 className='text-white mt-16 mb-8 font-bold md:text-[76px] text-[38px] flex items-center justify-center'>Roadmap</h1>
        <div className='flex flex-wrap justify-center backdrop-blur-md backdrop-brightness-110 backdrop-contrast-[50%] rounded-xl p-16 gap-8 border-[#FFAA02] border-[2px] pb-24'>
            <div className='md:max-w-[300px]'>
                <div className="flex bg-gradient-to-r from-[#FFAA02] to-[#FFF500] rounded-3xl md:items-center justify-center md:w-[279px] w-[250px] font-bold md:text-[19px]  text-[#100E09]">Presale launch (Q2 2024):</div>
                <p className='text-white md:text-[16px] text-[12px]'>Selling tokens to initial adopters of $BLOQY boosting $BLOQY’s value.</p>
            </div>
            <div className='max-w-[300px]'>
                <div className="flex bg-gradient-to-r from-[#FFAA02] to-[#FFF500] rounded-3xl items-center justify-center md:w-[279px] w-[250px] font-bold md:text-[19px] text-[#100E09]">BLOQVU launch (Q2 2024):</div>
                <p className='text-white md:text-[16px] text-[12px]'>BLOQVU platform launch, and onboarding artist and users.</p>
            </div>
            <div className='max-w-[300px]'>
                <div className="flex bg-gradient-to-r from-[#FFAA02] to-[#FFF500] rounded-3xl items-center justify-center md:w-[279px] w-[250px] font-bold md:text-[19px] text-[#100E09]">DEX Integration (Q3 2024):</div>
                <p className='text-white md:text-[16px] text-[12px]'>Creating initial buzz for BLOQY community, by listing on decentralized exchanges.</p>
            </div>
            <div className='max-w-[300px]'>
                <div className="flex bg-gradient-to-r from-[#FFAA02] to-[#FFF500] rounded-3xl items-center justify-center md:w-[279px] w-[250px] font-bold md:text-[19px] text-[#100E09]">BLOQVU Exploding (Q3 2024):</div>
                <p className='text-white md:text-[16px] text-[12px]'>Viral content and BLOQ token popularity forces. <br />$BLOQVU TO THE MOON!!!</p>
            </div>
            <div className='max-w-[300px]'>
                <div className="flex bg-gradient-to-r from-[#FFAA02] to-[#FFF500] rounded-3xl items-center justify-center md:w-[279px] w-[250px] font-bold md:text-[19px] text-[#100E09]">CEX Exploration (Q3 2024):</div>
                <p className='text-white md:text-[16px] text-[12px]'>Building legitimacy within the crypto community by exploring centralized exchange listings</p>
            </div>
        </div>
    </section>
  )
}

export default Roadmap
