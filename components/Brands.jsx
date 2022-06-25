import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <div className="m-10 flex flex-col lg:flex-row items-center justify-center lg:space-x-14 space-y-5 lg:space-y-0">
      <div className="bg-[#182436]  h-[200px] w-[400px] p-4 rounded-xl items-center flex justify-center transition transform hover:scale-110 duration-100 ease-in cursor-pointer">
        <Image
          alt=""
          src={require('../images/disneyLOGO.png')}
          height={200}
          width={300}
        />
      </div>
      <div className="bg-[#182436] h-[200px] w-[400px] p-4 rounded-xl items-center flex justify-center transition transform hover:scale-110 duration-100 ease-in cursor-pointer">
        <Image
          alt=""
          src={require('../images/pixarLOGO.png')}
          height={100}
          width={300}
        />
      </div>
      <div className="bg-[#182436]  h-[200px] w-[400px] p-4 rounded-xl items-center flex justify-center transition transform hover:scale-110 duration-100 ease-in cursor-pointer">
        <Image
          alt=""
          src={require('../images/marvel.png')}
          height={100}
          width={270}
        />
      </div>
      <div className="bg-[#182436]  h-[200px] w-[400px] p-4 rounded-xl items-center flex justify-center transition transform hover:scale-110 duration-100 ease-in cursor-pointer">
        <Image
          alt=""
          src={require('../images/starWARSLOGO.png')}
          height={100}
          width={250}
        />
      </div>
    </div>
  )
}

export default Brands
