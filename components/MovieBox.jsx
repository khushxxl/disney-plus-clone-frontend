import { PlayIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

const MovieBox = ({ title, desc, backdrop_path, poster_path }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className="flex items-center justify-center m-10 flex-col mt-3">
      <div className=" rounded-lg transition ease-out transform hover:scale-110 cursor-pointer">
        <Image
          alt={title}
          src={`${BASE_URL}${poster_path}` || `${BASE_URL}${backdrop_path}`}
          height={210}
          width={150}
          className="rounded-lg"
        />
      </div>

      <div className="hover:bg-[#0B111B] cursor-pointer duration-150 flex flex-col items-center justify-center ">
        <p className="text-gray-300  text-sm  w-[170px] text-center">{title}</p>
        <p className="text-gray-300 hidden hover:inline-flex text-[0.5rem]    w-[170px] text-center">
          {desc}
        </p>

        <div className="mt-2 flex items-center  justify-center space-x-3">
          <p className="text-white text-xs">Watch Now </p>
          <PlayIcon className="h-7 w-7 text-white" />
        </div>
      </div>
    </div>
  )
}

export default MovieBox
