const Tokeconomics = () => {
  return (
    <section className="w-full md:px-20 px-8 text-white mb-10">
        <h1 className='text-white md:mt-[-60px] mt-[-140px] md:mb-8 mb-20 font-bold md:text-[76px] text-[38px] flex items-center justify-center'>Tokeconomics</h1>
        <p className="md:text-[19px] font-light flex md:mt-[-50px] mt-[-80px] justify-center">Total supply: 10,000,000,000</p>
        <div className="flex md:flex-wrap md:flex-row flex-col justify-start gap-x-[15vw] mt-3">
            <div className="flex flex-col md:w-[40%] gap-2 mb-10">
                <p className="text-[16px] font-bold"><span className="text-[#FFAA02]">Presale: </span> 30%</p>
                <div className="flex relative max-w-[500px] h-[12px] bg-[#595856] rounded-xl">
                    <div className="flex absolute left-0 w-[30%] bg-[#FFAA02] rounded-xl h-full" />
                </div>
            </div>
            <div className="flex flex-col md:w-[40%] gap-2 mb-10">
                <p className="text-[16px] font-bold"><span className="text-[#FFAA02]">Team: </span> 25%</p>
                <div className="flex relative max-w-[500px] h-[12px] bg-[#595856] rounded-xl">
                    <div className="flex absolute left-0 w-[25%] bg-[#FFAA02] rounded-xl h-full" />
                </div>
            </div>
            <div className="flex flex-col md:w-[40%] gap-2 mb-10">
                <p className="text-[16px] font-bold"><span className="text-[#FFAA02]">Liquidity: </span> 20%</p>
                <div className="flex relative max-w-[500px] h-[12px] bg-[#595856] rounded-xl">
                    <div className="flex absolute left-0 w-[20%] bg-[#FFAA02] rounded-xl h-full" />
                </div>
            </div>
            <div className="flex flex-col md:w-[40%] gap-2 mb-10">
                <p className="text-[16px] font-bold"><span className="text-[#FFAA02]">Marketing: </span> 10%</p>
                <div className="flex relative max-w-[500px] h-[12px] bg-[#595856] rounded-xl">
                    <div className="flex absolute left-0 w-[10%] bg-[#FFAA02] rounded-xl h-full" />
                </div>
            </div>
            <div className="flex flex-col md:w-[40%] gap-2 mb-10">
                <p className="text-[16px] font-bold"><span className="text-[#FFAA02]">Community: </span> 15%</p>
                <div className="flex relative max-w-[500px] h-[12px] bg-[#595856] rounded-xl">
                    <div className="flex absolute left-0 w-[15%] bg-[#FFAA02] rounded-xl h-full" />
                </div>
            </div>
            <div className="text-black flex items-center justify-center md:px-10 h-10 rounded-full bg-[#FFAA02] ">
                Contract Ownership Renounced
            </div>
        </div>
    </section>
  )
}

export default Tokeconomics
