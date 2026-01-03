import { SectionDivider } from '../ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export function Vehicle() {
  return (
    <section id="vehicle" className="py-20 md:py-32 bg-[#09111d] relative mx-auto w-full flex justify-center items-center">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0d1420]/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 md:gap-24 items-center">
          <div>
            <SectionDivider />
            <h2 className="oleo-script-swash-caps-bold text-4xl md:text-5xl text-[#f5f5f0] mb-10 leading-tight">
              The Vehicle
            </h2>
            <p className="text-[#c4c4b8] text-lg leading-relaxed mb-8 open-sans-light">
            Every ride is delivered in meticulously maintained, top-tier vehicles—ensuring comfort, style, and reliability from start to finish.
            </p>
            <p className="text-[#8a8a7a] leading-relaxed open-sans-light">
              Climate control, premium leather seating, and ample legroom ensure you arrive
              relaxed and composed, whether heading to a meeting or catching a flight.
            </p>
          </div>
          <div className="relative group overflow-hidden">
            <div className="relative w-full h-auto md:h-96 lg:h-100 overflow-hidden rounded-lg">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="w-full h-full"
              >
                <SwiperSlide>
                  <img
                    src="/lincon.jpeg"
                    alt="Lincoln Aviator - Exterior View"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/lincon2.avif"
                    alt="Lincoln Aviator - Interior View"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/lincon3.avif"
                    alt="Lincoln Aviator - Luxury Features"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/lincon4.avif"
                    alt="Lincoln Aviator - Luxury Features"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              </Swiper>

              {/* Gradient overlay for hover effect */}
              <div className="absolute inset-0 bg-linear-to-br from-[#d4af6a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12 mt-12 lg:mt-28 pt-20 border-t border-[#1f2937]/40">
          <div className="group">
            <h3 className="text-[#e8e8e0] font-medium mb-4 text-lg tracking-wide">Comfort</h3>
            <p className="text-[#8a8a7a] text-[15px] leading-relaxed open-sans-light">
              Premium leather seating with generous legroom. Climate-controlled cabin for year-round comfort.
            </p>
          </div>
          <div className="group">
            <h3 className="text-[#e8e8e0] font-medium mb-4 text-lg tracking-wide">Discretion</h3>
            <p className="text-[#8a8a7a] text-[15px] leading-relaxed open-sans-light">
              Tinted windows and a quiet cabin provide privacy. Take calls or simply enjoy the ride undisturbed.
            </p>
          </div>
          <div className="group">
            <h3 className="text-[#e8e8e0] font-medium mb-4 text-lg tracking-wide">Reliability</h3>
            <p className="text-[#8a8a7a] text-[15px] leading-relaxed open-sans-light">
              Regularly serviced and always immaculate. Dependable transportation you can count on.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
