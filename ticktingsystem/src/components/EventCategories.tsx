import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const categories = [
  { name: 'Social', image: '/images/categoreis/Academic.png?height=270&width=390' },
  { name: 'Academic', image: '/images/categoreis/marriage.png?height=270&width=390' },
  { name: 'Marriage', image: '/images/categoreis/Academic.png?height=270&width=390' },
  { name: 'Eid Events', image: '/images/categoreis/Academic.png?height=270&width=390' },
  { name: 'Community', image: '/images/categoreis/editevent.png?height=270&width=390' },
  { name: 'Nasheeds', image: '/images/categoreis/Academic.png?height=270&width=390' },
  { name: 'Charity', image: '/images/categoreis/Academic.png?height=270&width=390' },
  { name: 'Free', image: '/images/categoreis/Academic.png?height=270&width=390' },
]

export default function EventCategories() {
  return (
    <section className="w-full bg-white  px-10">
      <div className="container mx-auto px-4 w-[95%] flex flex-col items-center justify-cente">
      
      <div className="mb-2 mx-auto inline-block rounded-md bg-[#FF1493] px-4 text-white text-[30px]">
      CATEGORIES
        </div>
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl mb-4">
          Wide range of Muslim event categories
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div 
              key={category.name} 
              className={`relative overflow-hidden rounded-xl h-80 ${
                (index % 4 === 1) ? 'mt-20' : 
                (index % 4 === 2) ? '-mt-5' : 
                (index % 4 === 3) ? 'mt-20' : 
                'mt-0'
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10
              transition-opacity duration-300 hover:bg-opacity-30"></div>
              <div className="absolute bottom-4 left-8 cursor-pointer right-4 flex items-center gap-8">
                <span className="text-white text-lg font-semibold">{category.name}</span>
                  <ArrowRight className="text-white" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}