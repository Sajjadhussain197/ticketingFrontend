'use client'

import Image from 'next/image'
import { useState } from 'react'


const featureCards = [
    { text: "Easy to Use", imgSrc: "/images/easytous.svg", bgImg: "/images/h3.png" },
    { text: "Low Fees", imgSrc: "/images/lowfee.svg", bgImg: "/images/h3.png" },
    { text: "More Features", imgSrc: "/images/morefeature.svg", bgImg: "/images/h3.png" },
    { text: "Get Discounts", imgSrc: "/images/getdiscount.svg", bgImg: "/images/h3.png" },
  ]

export default function FeatureCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featureCards.map((item, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center rounded-xl overflow-hidden h-[190px] cursor-pointer transition-all duration-300 ease-in-out"
            style={{ backgroundImage: `url(${item.bgImg})` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${hoveredIndex === index ? 'opacity-50' : 'opacity-20'}`}></div>
            <div className="relative flex flex-col justify-between h-full p-4 text-white">
              <Image 
                src={item.imgSrc} 
                alt={item.text} 
                width={100} 
                height={100}
                className="mb-auto"
              />
              <h3 className="text-2xl font-semibold">{item.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}