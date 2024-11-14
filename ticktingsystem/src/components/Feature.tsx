import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Build your event page",
    description: "Create a beautiful event listing page with all the information your attendees need.",
    icon:"/images/features/booking.svg"    
  },
  {
    title: "Reporting and analytics",
    description: "Get detailed insights into your event's performance with our comprehensive analytics tools.",
    icon: "/images/features/booking.svg"  
  },
  {
    title: "Pass the fees on",
    description: "Easily manage and allocate fees to ensure transparent pricing for your attendees.",
    icon: "/images/features/booking.svg"  
  },
  {
    title: "Secure payment methods",
    description: "Offer a variety of secure payment options to make transactions smooth and safe.",
    icon: "/images/features/booking.svg"   
  },
  {
    title: "Multiple ticket types",
    description: "Create different ticket categories to cater to various attendee preferences and needs.",
    icon: "/images/features/booking.svg"  
  },
  {
    title: "Booking widget for your website",
    description: "Embed a booking widget directly on your website for seamless ticket purchases.",
    icon: "/images/features/booking.svg"    
  },
  {
    title: "Add donation pages for events",
    description: "Set up donation options to support charitable causes alongside your events.",
    icon: "/images/features/booking.svg"    
  },
  {
    title: "Attendee check-in",
    description: "Streamline the check-in process with our efficient digital tools process with our efficient digital tools and printouts.",
    icon: "/images/features/booking.svg"    
  },
  {
    title: "Manage orders",
    description: "Keep track of all ticket orders and manage them effortlessly through our platform.",
    icon: "/images/features/booking.svg"    
  },
  {
    title: "Discount codes",
    description: "Create and manage promotional codes to offer special discounts to your attendees.",
    icon: "/images/features/booking.svg"    
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full flex flex-col gap-10  bg-white  px-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center">
        <div className="mb-2 mx-auto inline-block rounded-md bg-[#FF1493] px-4 text-white text-[30px]">
          FEATURES
        </div>
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
          Simplified ticketing with a full suite of features
        </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index} className="border-none  flex flex-row items-center justify-center px-2">
                <div className=" h-25 w-25 rounded-full bg-[#1E0A3C] p-4">
                  <img src={feature.icon} alt="" className="h-9 w-10 text-white" />
                </div>
              <div>
              <CardHeader >
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div
      className="flex flex-col items-center justify-center
       py-16 bg-gradient-to-r from-[#010035] from-20% to-[#020056] rounded-lg"
    >
      <h2 className="mb-4 text-3xl font-bold text-white">
        A simpler way to manage events
      </h2>
      <button className="rounded-md bg-[#FF1493] px-6 py-2 text-sm font-semibold text-white">
        Create Event
      </button>
    </div>

    </section>
  )
}