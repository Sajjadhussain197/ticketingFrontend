'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function TicketFeeCalculator() {
  const [ticketPrice, setTicketPrice] = useState(2)
  const [totalTickets, setTotalTickets] = useState(10)
  const [totalTicketPrice, setTotalTicketPrice] = useState(0)
  const [bookingFee, setBookingFee] = useState(0)

  useEffect(() => {
    const total = ticketPrice * totalTickets
    setTotalTicketPrice(total)
    setBookingFee(calculateBookingFee(total))
  }, [ticketPrice, totalTickets])

  const calculateBookingFee = (total: number) => {
    return Number((total * 0.065 + 0.30).toFixed(2))
  }

  return (
    <div className="w-full p-4">
      <Card className="bg-gradient-to-br from-[#F81A84] to-[#2200F3] text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Ticket Fee Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="ticketPrice" className="block text-sm font-medium text-gray-700 mb-1">Ticket price</label>
                <Input
                  id="ticketPrice"
                  type="number"
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(Number(e.target.value))}
                  className="bg-gray-100 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="totalTickets" className="block text-sm font-medium text-gray-700 mb-1">Total tickets</label>
                <Input
                  id="totalTickets"
                  type="number"
                  value={totalTickets}
                  onChange={(e) => setTotalTickets(Number(e.target.value))}
                  className="bg-gray-100 text-gray-900"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-gray-900">
              <div>
                <span className="block text-sm font-medium mb-1">Total ticket price:</span>
                <span className="text-lg font-bold">£ {totalTicketPrice.toFixed(2)}</span>
              </div>
              <div>
                <span className="block text-sm font-medium mb-1">Booking fee:</span>
                <span className="text-lg font-bold">£ {bookingFee.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className=" text-lg bg-gradient-to-br from-[#F81A84] to-[#2200F3]
                 text-transparent bg-clip-text">you absorb booking fee</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Customer pays</span>
                  <span className="font-bold">£ {totalTicketPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total due to you</span>
                  <span className="font-bold">£ {(totalTicketPrice - bookingFee).toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className=" text-lg bg-gradient-to-br from-[#F81A84] to-[#2200F3]
                 text-transparent bg-clip-text">Customer pays booking fee</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Customer pays</span>
                  <span className="font-bold">£ {(totalTicketPrice + bookingFee).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total due to you</span>
                  <span className="font-bold">£ {totalTicketPrice.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}