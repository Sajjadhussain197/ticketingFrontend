import Image from 'next/image'
import { Button } from "@/components/ui/button"
import FeatureCards from './Features'

export default function HeroSection() {
  return (
    <div id="about-us" className="w-full ">
      <div
        className="relative h-[500px] overflow-hidden mb-10"
        style={{ backgroundImage: 'url(/images/bghero.png)',
             backgroundSize: 'cover',
              backgroundPosition: 'center' }}
      >
        
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(260.31deg, rgba(36, 0, 255, 0.5) 0%, rgba(248, 26, 132, 0.3) 100%)'
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white 
        text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Event ticketing made simple</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Providing a global platform for Muslim friendly events,
            built for Muslims, built by Muslims.
          </p>
          <Button className="bg-white hover:bg-purple-800 text-purple-700 text-lg py-2 px-6">
            Create Event
          </Button>
        </div>
      </div>
      <FeatureCards />
    </div>
  )
}