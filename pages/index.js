import AboutSection from "@/components/AboutSection"
import ClientSection from "@/components/ClientSection"

import CountDownSection from "@/components/CountDownSection"
import EventsSection from "@/components/EventsSection"
import FooterMenu from "@/components/FooterMenu"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import RecapSection from "@/components/RecapSection"
import VenueSection from "@/components/VenueSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <VenueSection />
      <RecapSection />
      <CountDownSection />
      <EventsSection />
      <ClientSection />
      <footer>
        <div className="container mx-auto">
          <div className="bg-gray-800 w-full h-auto rounded-3xl">
            <div className="flex lg:flex-row flex-col lg:px-32 px-5 lg:py-24 py-10">
              <div className="lg:w-3/12 w-full">
                <h2 className="font-sans lg:text-4xl text-3xl text-white font-semibold mb-2">
                  Eventnity
                </h2>
                <p className="font-sans font-medium text-white text-base lg:mb-8 mb-3">
                  Ease of being together
                </p>
                <img
                  src="/appstore.png"
                  alt="Logo App Store"
                  className="mb-4 lg:w-auto w-32"
                />
                <img
                  src="/playstore.png"
                  alt="Logo Play Store"
                  className="lg:w-auto w-32"
                />
              </div>
              <div className="lg:w-9/12">
                <div className="flex lg:flex-row flex-col lg:justify-around ">
                  <div className=" lg:w-3/12 w-full flex flex-col space-y-3">
                    <h2 className="font-sans font-semibold text-base text-white">
                      EVENTNITY
                    </h2>
                    <FooterMenu>Start for Free</FooterMenu>
                    <FooterMenu>Login</FooterMenu>
                  </div>
                  <div className=" lg:w-3/12 w-full flex flex-col space-y-3">
                    <h2 className="font-sans font-semibold text-base text-white uppercase">
                      Features
                    </h2>
                    <FooterMenu>Payment Integrations</FooterMenu>
                    <FooterMenu>Newsletter</FooterMenu>
                    <FooterMenu>Email Marketing</FooterMenu>
                    <FooterMenu>QR Code Ticketing</FooterMenu>
                    <FooterMenu>Event Hosting</FooterMenu>
                    <FooterMenu>Promote</FooterMenu>
                    <FooterMenu>Advertising</FooterMenu>
                  </div>
                  <div className=" lg:w-3/12 w-full flex flex-col space-y-3">
                    <h2 className="font-sans font-semibold text-base text-white uppercase">
                      Company
                    </h2>
                    <FooterMenu>For Bussines</FooterMenu>
                    <FooterMenu>About Us</FooterMenu>
                    <FooterMenu>Blog</FooterMenu>
                    <FooterMenu>Career</FooterMenu>
                    <FooterMenu>Event</FooterMenu>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:px-32 px-5 pb-4 lg:pb-20">
              <div className="flex items-center gap-4">
                <img src="Facebook.png" alt="Logo Facebook" />
                <img src="Instagram.png" alt="Logo Instagram" />
                <img src="Twitter.png" alt="Logo Twitter" />
                <img src="LinkedIn.png" alt="Logo LinkedIn" />
                <img src="Youtube.png" alt="Logo Youtube" />
              </div>
              <div className="flex lg:flex-row flex-col lg:items-center gap-4 lg:ml-6">
                <p className="font-serif font-medium text-xs text-gray-500">
                  Terms of Service
                </p>
                <p className="font-serif font-medium text-xs text-gray-500">
                  Privacy
                </p>
                <p className="font-serif font-medium text-xs text-gray-500">
                  Return and Refund
                </p>
              </div>
              <div className="flex flex-col space-y-3 lg:space-y-0 lg:items-center lg:ml-auto">
                <p className="font-serif font-medium text-xs text-gray-500">
                  Copyright &#169; 2023
                </p>
                <p className="font-serif font-medium text-xs text-gray-500">
                  Design By Taufik Hidayatulloh & Rafiq Al Hafizh Adha
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
