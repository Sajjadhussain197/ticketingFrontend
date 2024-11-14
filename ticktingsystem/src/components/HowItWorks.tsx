import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  const steps = [
    { number: 1, title: "Create Event", description: "Create an event and add a name, date, tickets, agenda, location and description." },
    { number: 2, title: "Choose ticket type", description: "Choose ticket type of your choice, paid free or donation." },
    { number: 3, title: "Publish events", description: "Generate sales with early-bird discounts, coupons and more." },
    { number: 4, title: "Start making sales", description: "Get paid directly to your bank account according to your schedule." },
  ]

  return (
    <div id="how-it-works" className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hwleft.png?height=200&width=400"
          alt="Left image"
          width={400}
          height={300}
          className="absolute -left-10 top-[250px] "
        />
        <Image
          src="/images/hwright.png?height=200&width=400"
          alt="Right image"
          width={400}
          height={300}
          className="absolute -right-10 bottom-[10px]"
        />
      </div>
      <div className="relative z-10 container  mx-auto  px-16">
        <div className="flex items-center justify-center mx-auto">
          <span className='mb-2 mx-auto inline-block rounded-md bg-[#FF1493] px-4 text-white text-[30px]'> 
            HOW IT WORKS
          </span>
        </div>
        <h3 className="mb-12 text-center text-2xl font-semibold">How we work out things here</h3>
        <p className="text-center text-lg">At Muslim Ticket, we've streamlined our process to ensure a seamless experience for both event organizers and attendees. Our approach is designed to make event planning and participation as effortless and rewarding as possible. Here's how our process works:</p>
        <div className="grid grid-cols-2 gap-8 w-[80%] mx-auto  mt-40">
          {steps.map((step) => (
            <Card 
              key={step.number} 
              className={`z-10 col-span-2
                 ${step.number % 2 === 0 ? 'md:col-start-2 -ml-10' : 'md:col-start-1 max-w-[60%]'}`}
            >
              <div className="flex bg-brown-500 items-center gap-1 px-2">
                <span 
                  className=" text-[80px] 
                  font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500"
                >
                  {step.number}
                </span>
                <div className='w-full '>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{step.description}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}