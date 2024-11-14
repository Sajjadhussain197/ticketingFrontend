"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CalculatorUi from "./CalculatorUi";

export default function PricingSection() {
  const [ticketPrice, setTicketPrice] = useState(2);
  const [totalTickets, setTotalTickets] = useState(10);

  const totalTicketPrice = ticketPrice * totalTickets;
  const bookingFee = totalTicketPrice * 0.065 + 0.3;

  return (
    <section  id="pricing" className="px-4">
        <div className="flex flex-col items-center justify-center bg-white py-16 ">
            
      <div className="w-[80%] flex flex-col items-center justify-center px-4">
      <div className="mb-2 mx-auto inline-block rounded-md bg-[#FF1493] px-4 text-white text-[30px]">
          PRICING
        </div>
        <h2 className="mb-12 text-3xl font-semibold sm:text-2xl">
          We keep it simple, no contracts, no need to pre pay, no fuss.
        </h2>
        <div className="flex gap-8 items-end justify-around px-[10%]">
          <Card className="overflow-hidden bg-gradient-to-br from-[#F81A84] to-[#2200F3] w-full max-w-xs">
            <CardHeader className="p-6 text-white">
              <CardTitle className="text-xl">Exclusive Discounts for Charities</CardTitle>
            </CardHeader>
            <CardFooter className="p-6">
              <Button className="w-full bg-white text-[#F81A84] hover:bg-gray-100">Get Discount</Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-[#010035] to-[#020056] w-full max-w-xs">
            <CardHeader className="relative p-6 text-white">
              <Button className="bg-gradient-to-b from-[#9281FF] to-[#2200F3] text-white px-4 py-2 rounded-full">
                Paid Events
              </Button>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-5xl font-bold">6.5%</span>
                <span className="ml-2 text-3xl">+</span>
              </div>
              <div className="mt-2 text-4xl font-bold">£0.30</div>
            </CardHeader>
            <CardContent className="p-6 text-center text-sm text-white">
              <p>Per ticket sold</p>
              <p className="mt-1 text-xs opacity-75">exclusive of processing fees.*</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden w-full max-w-xs">
            <CardHeader className="bg-gradient-to-r from-[#010035] to-[#020056] p-6 text-center text-white">
              <CardTitle className="mb-2 text-2xl">Free Events</CardTitle>
              <div className="text-4xl font-bold">No Fee</div>
            </CardHeader>
          </Card>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Stripe payment processor, need to register with stripe and connect their account, this helps vendors keep their costs low. Funds will be deposited directly to their account, we don't get any of the funds, we take the platform fee.*
        </p>

      </div>

        </div>
      <CalculatorUi />
    </section>
  )
}