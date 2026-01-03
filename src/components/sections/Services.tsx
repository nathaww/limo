import { SectionDivider } from '../ui'

const services = [
  {
    title: 'Airport Transfers',
    description: 'Reliable pickups and drop-offs at Atlanta International and regional airports. Flight monitoring ensures timely arrivals.'
  },
  {
    title: 'Executive Travel',
    description: 'Business meetings, corporate events, and professional engagements. Arrive prepared and composed.'
  },
  {
    title: 'Private Events',
    description: 'Special occasions, evening events, and celebrations. Sophisticated transportation for memorable moments.'
  },
  {
    title: 'Hourly Service',
    description: 'Multiple stops, extended outings, or a full day of appointments. Your chauffeur remains at your disposal.'
  }
]

export function Services() {
  return (
    <section id="services" className="pb-32 md:pb-40 bg-[#09111d]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <SectionDivider centered />
          <h2 className="oleo-script-swash-caps-bold text-4xl md:text-5xl text-[#f5f5f0] mb-8">
            Services
          </h2>
          <p className="text-[#8a8a7a] text-lg open-sans-light">
            Available for the occasions that matter.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group p-10 bg-linear-to-br from-[#0d1420]/60 to-[#131b2e]/40 border border-[#1f2937]/30 hover:border-[#d4af6a]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#d4af6a]/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#d4af6a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="oleo-script-swash-caps-bold text-2xl text-[#e8e8e0] mb-4 relative z-10 tracking-tight">{service.title}</h3>
              <p className="text-[#8a8a7a] text-[15px] leading-relaxed open-sans-light relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
