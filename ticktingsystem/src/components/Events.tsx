'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

const events = [
  {
    id: 1,
    title: "Culture and Ethics Debate Session with Muslim Debate",
    image: "/images/caresole/c1.png?height=200&width=400",
    category: "Educational",
    date: "Monday • 26th May • 11:00 AM (GMT +5)",
    location: "Town Hall, Leeds, UK"
  },
  {
    id: 2,
    title: "Culture and Ethics Debate Session with Muslim Debate",
    image: "/images/caresole/c2.png?height=200&width=400",
    category: "Free",
    date: "Monday • 26th May • 11:00 AM (GMT +5)",
    location: "Town Hall, Leeds, UK"
  },
  {
    id: 3,
    title: "Culture and Ethics Debate Session with Muslim Debate",
    image: "/images/caresole/c3.png?height=200&width=400",
    category: "Social",
    date: "Monday • 26th May • 11:00 AM (GMT +5)",
    location: "Town Hall, Leeds, UK"
  },
  {
    id: 4,
    title: "Culture and Ethics Debate Session with Muslim Debate",
    image: "/images/caresole/c4.png?height=200&width=400",
    category: "Charity",
    date: "Monday • 26th May • 11:00 AM (GMT +5)",
    location: "Town Hall, Leeds, UK"
  }
]

export default function Component() {
  const [emblaRef] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' })
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    )
  }

  return (
    <div className="w-full bg-white ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center px-[5%]">
          <div className="mb-2 inline-block rounded-md bg-[#FF1493] px-4  text-white text-[30px]">
            EVENTS
          </div>
          <h2 className="mb-4 text-4xl font-bold">Discover Events</h2>
    
        <p className="mb-8 text-gray-600 text-center ">
          At Muslim Ticket, we've streamlined our process to ensure a seamless experience for both event organizers and attendees. Our approach is designed to make event planning and participation as effortless and rewarding as possible. Here's how our process works:
        </p>




        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {events.map((event) => (
              <div key={event.id} className="mr-4 flex-[0_0_300px]">
                <Card>
                  <CardHeader className="p-0">
                    <div className="relative">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={300}
                        height={200}
                        className="rounded-t-lg object-cover"
                      />
                      <div className="absolute left-2 top-2 rounded bg-[#7C3AED] px-2 py-1 text-xs font-semibold text-white">
                        {event.category}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white p-0"
                        onClick={() => toggleFavorite(event.id)}
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            favorites.includes(event.id) ? 'fill-[#FF1493] text-[#FF1493]' : 'text-gray-500'
                          }`}
                        />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="mb-2 text-lg font-semibold">{event.title}</h3>
                    <p className="mb-1 text-sm text-gray-600">{event.date}</p>
                    <p className="text-sm text-gray-600">{event.location}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300">
                      Book Tickets
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="h-2 w-16 rounded-full bg-[#7C3AED]"></div>
        </div>
      </div>
    </div>
  )
}