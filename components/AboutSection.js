import Button from "./Button"
export default function AboutSection() {
  return (
    <>
      <section className="lg:mt-60 mt-24">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col items-center px-6 lg:px-0">
            <div className="lg:w-7/12">
              <h2 className="font-mono font font-semibold lg:text-6xl text-5xl lg:mb-8 mb-4">
                About Eventnity
              </h2>
              <p className="font-serif lg:text-2xl text-xl lg:w-8/12 w-full lg:mb-16">
                Evenity is event management expertise that helps and facilitates
                Event Planners in achieving the goal of carrying out an event.
              </p>
              <Button>More About Us</Button>
            </div>
            <div className="lg:w-5/12 lg:relative static mt-24 lg:mt-0">
              <img
                src="/thumbnail-1.png"
                className="lg:absolute lg:-bottom-48 lg:left-0 hover:scale-105 transition-all lg:w-7/12"
              />
              <div className="bg-white px-8 py-6 shadow-2xl text-black lg:absolute text-center rounded-3xl left-14 top-40 z-30">
                <h2 className="text-6xl font-mono font-medium ">46+</h2>
                <p className="font-mono text-base text-gray-600 ">
                  Events In The Last Year
                </p>
              </div>
              <img
                src="/thumbnail-2.png"
                className="lg:absolute lg:z-10 lg:right-0 hover:scale-105 transition-all lg:w-7/12 w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
