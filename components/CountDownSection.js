import CountDownCard from "./CountDownCard"

export default function CountDownSection() {
  return (
    <section className="lg:py-20 py-10">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col items-center lg:space-x-28 space-y-4 lg:space-y-0">
          <CountDownCard number="23" types="Days" />
          <CountDownCard number="09" types="Hours" />
          <CountDownCard number="17" types="Minutes" />
          <CountDownCard number="03" types="Seconds" />
        </div>
      </div>
    </section>
  )
}
