import Button from "@/components/Button"
import ClientCards from "@/components/ClientCards"
export default function ClientSection() {
  return (
    <section className="lg:py-20 py-10">
      <div className="container mx-auto">
        <div className="text-center lg:pb-24 pb-10">
          <h2 className="font-sans font-semibold lg:text-6xl text-5xl uppercase">
            Client Partner
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-normal lg:gap-x-20 gap-x-5 gap-y-14">
          <ClientCards image="/universal.png" />
          <ClientCards image="/bd.png" />
          <ClientCards image="/hulu.png" />
          <ClientCards image="/canva.png" />
          <ClientCards image="/coca_cola.png" />
          <ClientCards image="/spotify.png" />
          <ClientCards image="/genpact.png" />
          <ClientCards image="/tiktok.png" />
        </div>
        <div className="flex justify-center items-center mt-20">
          <Button>All Client Partner</Button>
        </div>
      </div>
    </section>
  )
}
