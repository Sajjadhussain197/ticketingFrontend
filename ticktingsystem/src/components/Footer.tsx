import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#010035] to-[#020056] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-2 flex flex-col gap-2">
            <img src="/images/logofooter.svg"
            className='w-[200px]' alt="" />
            <p className="text-sm">© 2024 themuslimticket</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Customers</h3>
            <ul className="space-y-2">
              <li><Link href="/find-event" className="hover:underline">Find an event</Link></li>
              <li><Link href="/find-tickets" className="hover:underline">Find your tickets</Link></li>
              <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Organisers</h3>
            <ul className="space-y-2">
              <li><Link href="/create-event" className="hover:underline">create an event</Link></li>
              <li><Link href="/list-event" className="hover:underline">List your event</Link></li>
              <li><Link href="/help" className="hover:underline">Help</Link></li>
            </ul>
          </div>
          <div>
          <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-terms" className="hover:underline">Privacy & terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 ">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:underline">Contact us</Link></li>
              <li><Link href="https://facebook.com" className="hover:underline">Facebook</Link></li>
              <li><Link href="https://instagram.com" className="hover:underline">Instagram</Link></li>
              <li><Link href="https://x.com" className="hover:underline">X.com</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}