import React from "react"

function RecapSection() {
  return (
    <section className="lg:mt-40 px-5 lg:px-0">
      <div className="container mx-auto">
        <div className="text-center pb-16">
          <h2 className="font-sans font-semibold lg:text-6xl text-5xl uppercase">
            Recap Event 2022
          </h2>
        </div>
        <div className="bg-[url('/concert-1.jpg')] w-full h-[600px] rounded-3xl  bg-no-repeat bg-center lg:px-12 px-6 lg:py-20 py-10">
          <h2 className="text-white font-serif lg:text-6xl text-5xl font-black">
            Green Day
          </h2>
          <p className="text-white font-serif lg:text-3xl text-2xl font-medium">
            California, USA
          </p>
          <div className="flex lg:flex-row flex-col items-center w-full mt-60">
            <img
              src="/icon-play.png"
              alt="icon-play"
              className="bg-white rounded-full border-none w-14"
            />
            <h2 className="font-sans lg:text-4xl text-2xl font-medium uppercase text-white lg:ml-6">
              Start Video
            </h2>
            <p className="lg:ml-auto font-medium lg:text-2xl text-xl text-white font-serif">
              February, 29, 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecapSection
