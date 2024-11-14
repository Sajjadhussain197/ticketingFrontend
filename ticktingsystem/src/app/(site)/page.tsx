import { getServerSession } from "next-auth";
import EventCategories from "@/components/EventCategories";
import Events from "@/components/Events";
import FAQSection from "@/components/Faqs";
import Feature from "@/components/Feature";
import HeroSection from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/Pricing";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    return <div className="flex flex-col gap-2 justify-center items-center h-screen bg-white">
      
      <h1 className="text-2xl font-bold">Please log in to view this page.</h1>
      <Link href="/auth/signin" className="bg-[#FF1988] text-white px-4 py-2 rounded-md">Login</Link>
      </div>; 
  } 

  return (
    <div className="bg-white space-y-16">
      <HeroSection />
      <HowItWorks />
      <Events />
      <Feature />
      <PricingSection />
      <EventCategories />
      <FAQSection />
    </div>
  );
}
