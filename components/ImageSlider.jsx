/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import Image from 'next/image'
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/solid'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  // setTimeout(nextSlide, 6000)

  return (
    <div className="flex items-center mr-10 ml-10">
      <div>
        <ArrowCircleLeftIcon
          onClick={() => prevSlide()}
          className=" text-gray-400 hover:text-white h-8 w-8 mr-5 cursor-pointer"
        />
      </div>
      <section className="slider transition transform hover:scale-105 cursor-pointer  ">
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <Image src={slide.image} alt="" height={900} className="" />
              )}
            </div>
          )
        })}
      </section>
      <div>
        <ArrowCircleRightIcon
          onClick={() => nextSlide()}
          className=" text-gray-400 hover:text-white h-8 w-8 ml-5 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default ImageSlider
