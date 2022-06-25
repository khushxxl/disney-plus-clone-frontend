import React from 'react'
import { MenuIcon, SearchIcon } from '@heroicons/react/solid'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center top-0 sticky z-50 bg-[#0B111B]">
      {/* LEFT  */}
      <div className="flex items-center space-x-5">
        <div>
          <MenuIcon className="h-7 w-7 text-gray-300 cursor-pointer" />
        </div>

        <div className="cursor-pointer">
          <Image
            height={50}
            width={100}
            src={
              'https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg'
            }
            alt=""
          />
        </div>

        <div className="flex space-x-10 text-gray-400  items-center">
          <p className="cursor-pointer hover:text-white">TV</p>
          <p className="cursor-pointer hover:text-white">Movies</p>
          <p className="cursor-pointer hover:text-white">Sports</p>
          <p className="cursor-pointer hover:text-white">Disney+</p>
          <p className="cursor-pointer hover:text-white">KIDS</p>
        </div>
      </div>

      {/* Right  */}

      <div className="flex items-center justify-center space-x-5">
        <div className=" border-b-2 border-gray-400 items-center flex">
          <input
            type="text"
            name=""
            id=""
            className="outline-none bg-transparent text-white w-[250px] focus:w-[400px]"
            placeholder="Search"
          />
          <SearchIcon className="h-5 w-5 text-gray-400 cursor-pointer" />
        </div>

        <div>
          <button className="p-1 bg-blue-600 text-white text-sm rounded-lg">
            SUBSCRIBE
          </button>
        </div>
        <div>
          <p className="text-white text-sm cursor-pointer">LOGIN</p>
        </div>
      </div>
    </div>
  )
}

export default Header
