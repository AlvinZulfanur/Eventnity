import EventCards from "./EventCards"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper"

import "swiper/swiper-bundle.min.css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import Button from "./Button"

export default function EventsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center pb-24">
          <h2 className="font-sans font-semibold lg:text-6xl text-5xl uppercase">
            Event Schedule
          </h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            360: {
              spaceBetween: 40,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 40,
              slidesPerView: 3,
            },
          }}
          autoplay={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="w-full mb-14">
              <EventCards
                image="/event-1.jpg"
                date="February 6th 2023"
                time="10 PM to 12 PM"
                eventTitle="Meet up Freelancer"
                eventDesc="Become a potential and professional freelancer"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full mb-14">
              <EventCards
                image="/event-2.jpg"
                date="February 17th 2023"
                time="10 PM to 12 PM"
                eventTitle="Metal Band Concert"
                eventDesc="Become a potential and professional freelancer"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full mb-14">
              <EventCards
                image="/event-3.png"
                date="February 28th 2023"
                time="9 AM to 4 AM"
                eventTitle="International Education Exhibition"
                eventDesc="Explore knowledge from the outside world"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <EventCards
                image="/event-4.jpg"
                date="February 6th 2023"
                time="9 AM to 4 AM"
                eventTitle="Beatbox Battle Festival "
                eventDesc="Become a potential and professional freelancer"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <EventCards
                image="/event-5.jpg"
                date="Maret 8th 2023"
                time="8 AM to 10 PM"
                eventTitle="Festival Holi Indian"
                eventDesc="Color your life with us, let's join the festival now"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <EventCards
                image="/event-6.jpg"
                date="Maret 17th 2023"
                time="8 PM to 10 PM"
                eventTitle="Concert Coldplay Band"
                eventDesc="Become a potential and professional freelancer"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center items-center mt-20">
          <Button>View More</Button>
        </div>
      </div>
    </section>
  )
}
