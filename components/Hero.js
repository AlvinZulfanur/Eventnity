import Button from "./Button"

export default function Hero() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="lg:bg-[url('/heroo.jpg')]  lg:w-full lg:h-screen bg-no-repeat bg-center rounded-3xl relative">
          <div className="lg:py-36 lg:px-11 px-6">
            <p className="lg:text-white text-black text-xl font-serif flex items-center gap-4">
              Welcome to our ticketing website!
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  viewBox="0 96 960 960"
                  width="30"
                  fill="white"
                >
                  <path d="M140 896q-26 0-43-17t-17-43V683q37-8 61.5-37.5T166 576q0-40-24.5-70T80 469V316q0-26 17-43t43-17h680q26 0 43 17t17 43v153q-37 7-61.5 37T794 576q0 40 24.5 69.5T880 683v153q0 26-17 43t-43 17H140Zm340-123q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-167q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-167q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Z" />
                </svg>
              </span>
            </p>
            <h2 className="font-serif text-5xl lg:text-7xl lg:w-8/12 lg:text-white text-black font-extrabold">
              Where Your
              <span className=" ml-2 inline-block text-transparent bg-clip-text bg-gradient-to-t from-[#6D28D9] via-[#E127FF] to-[#FF2976]">
                Event
              </span>
              Dreams Come to Life!
            </h2>
            <p className="font-serif lg:text-lg text-base text-black lg:text-white lg:w-6/12 font font-semibold">
              Not only can you purchase tickets to the hottest events in town,
              but you can also create your own custom tickets with our
              easy-to-use platform. Say goodbye to generic tickets and hello to
              personalized and professional-looking ones that will make your
              event stand out from the rest.
            </p>
          </div>
          <div className="flex Lg:items-center lg:justify-center px-6 lg:px-0 lg:-mt-6 pt-4 lg:pt-0">
            <Button>Explore Event</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
