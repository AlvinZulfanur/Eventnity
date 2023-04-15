import { useState } from "react"

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false)
  return (
    <nav className="py-8 px-5 bg-purple-500 lg:bg-white lg:px-0">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="lg:w-2/12 w-6/12 font-sans text-3xl text-white lg:text-black font-semibold">
            Eventnity.
          </div>
          <div className="lg:hidden w-6/12 text-end px-2">
            <button onClick={() => setOffCanvas(!offCanvas)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M3 12H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div
            className={`lg:w-8/12 lg:bg-white lg:static lg:mr-12 bg-green-700 w-full lg:h-auto h-screen fixed top-0 transition-all ${
              offCanvas ? "left-0" : "-left-full"
            }`}
          >
            <button
              className="absolute top-10 right-10 lg:hidden"
              onClick={() => setOffCanvas(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <ul className="flex lg:flex-row flex-col items-center space-y-5 lg:space-y-0 lg:space-x-6 justify-end text-lg ">
              <li>Home</li>
              <li>Pricing</li>
              <li>Event</li>
              <li>Resources</li>
              <li>Helpdesk</li>
            </ul>
          </div>
          <div className="w-2/12 hidden lg:block text-end text-lg">
            <button className="hover:border hover:p-1 hover:border-purple-500 transition-all">
              Login
            </button>
            <button className="bg-purple-500 px-6 py-2 rounded-lg text-white hover:bg-purple-400 ml-4 transition-all">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
