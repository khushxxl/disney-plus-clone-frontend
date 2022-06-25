/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = () => {
  return (
    <div className="m-10 flex items-center justify-between mx-20">
      <div>
        <div className="flex text-gray-400 space-x-5">
          <p className="cursor-pointer hover:text-blue-600">
            About Disney+ Hotstar
          </p>
          <p className="cursor-pointer hover:text-blue-600">Terms of Use</p>
          <p className="cursor-pointer hover:text-blue-600">Privacy</p>
          <p className="cursor-pointer hover:text-blue-600">FAQ</p>
          <p className="cursor-pointer hover:text-blue-600">Feedback</p>
          <p className="cursor-pointer hover:text-blue-600">Careers</p>
        </div>

        <div>
          <p className="text-white text-xs w-[700px] mt-2">
            © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all
            related channel and programming logos are service marks of, and all
            related programming visuals and elements are the property of, Home
            Box Office, Inc. All rights reserved.
          </p>
        </div>
      </div>

      <div>
        <div>
          <p className="text-gray-400 text-sm">Connect with us</p>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <div className="bg-gray-500 p-2 rounded-lg hover:bg-blue-300 cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077041.png"
              alt=""
              className="h-7 w-7 "
            />
          </div>
          <div className="bg-gray-500 p-2 rounded-lg hover:bg-blue-300 cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174876.png"
              alt=""
              className="h-7 w-7 "
            />
          </div>
        </div>
      </div>

      {/* <div>
        <div className="flex">
          <div className="bg-gray-500 p-2 rounded-lg hover:bg-blue-300 cursor-pointer">
            <img
              src={require('../images/play.png')}
              alt=""
              className="h-[50px] w-[100px]"
            />
          </div>
          <div className="bg-gray-500 p-2 rounded-lg hover:bg-blue-300 cursor-pointer">
            <img
              src={require('../images/apple.png')}
              alt=""
              //   className="h-7 w-7 "
            />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Footer
