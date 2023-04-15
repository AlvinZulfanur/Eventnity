import VenueCards from "./VenueCards"

function VenueSection() {
  return (
    <>
      <section className="lg:mt-80 py-20 px-6 lg:px-0 lg:py-0">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-6/12 relative mb-6 lg:mb-0">
              <h2 className="font-mono lg:text-8xl text-5xl font-semibold leading-relaxed">
                Explore Beautiful Venues
              </h2>
              <img
                src="/image-4.png"
                className="hover:scale-105 transition-all"
              />
              <VenueCards
                ClassName="lg:bottom-24 bottom-10 right-0"
                venue="Venue: 2"
                location="Kempinskie Hotel Indonesia"
                city="Jakarta, Indonesia"
                image="/mapsicon.png"
              />
            </div>
            <div className="lg:w-6/12 relative">
              <img
                src="/image-3.png"
                className="ml-auto hover:scale-105 transition-all"
              />
              <p className="text-left lg:w-7/12 font-serif lg:ml-44 text-2xl lg:mt-16 mt-6">
                Explore new ideas at astoundingly beautiful venues. Attend Tech
                Startup Conferences and meet new brilliant minds from all over
                the world.
              </p>
              <VenueCards
                ClassName="lg:top-36 top-10 left-0"
                venue="Venue: 1"
                location="REGAELE CONVENTION HALL"
                city="North Sumatera, Indonesia"
                image="/mapsicon.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VenueSection
