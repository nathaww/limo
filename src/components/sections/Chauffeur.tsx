import { SectionDivider } from '../ui'

export function Chauffeur() {
  return (
    <section id="chauffeur" className="py-20 md:py-32 bg-[#09111d] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#1a2838]/15 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 md:gap-24 items-center">
          <div className="relative group">
            <div className="aspect-3/4 flex items-center justify-center relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-linear-to-br from-[#d4af6a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img src="/endale.jpeg" alt="Endale Tufer - Professional Chauffeur" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <SectionDivider />
            <h2 className="oleo-script-swash-caps-bold text-4xl md:text-5xl text-[#f5f5f0] mb-10">
              Your Chauffeur
            </h2>
            <div className="mb-12">
              <p className="oleo-script-swash-caps-bold text-3xl text-[#e8e8e0] mb-3 tracking-tight">Endale</p>
              <p className="text-[#d4af6a] text-sm tracking-[0.2em] uppercase font-medium">Professional Chauffeur</p>
            </div>
            <p className="text-[#b8b8aa] text-xl leading-relaxed mb-8 open-sans-light">
              With years of experience in executive transportation, Endale brings a calm professionalism to every journey.
              He oversees a carefully managed fleet of luxury vehicles, ensuring consistently high standards and a superior client experience on every trip.
            </p>
            <p className="text-[#8a8a7a] leading-relaxed open-sans-light text-lg">
              Discreet, courteous, and attentive to detail. Whether you need conversation or
              quiet, your comfort and privacy are always the priority.
            </p>

            <div className="grid grid-cols-3 lg:gap-12 mt-20 pt-16 border-t border-[#1f2937]/40 max-w-2xl place-items-center">
              <div className='w-max'>
                <p className="text-[#e8e8e0] font-medium tracking-wide">Punctual</p>
              </div>
              <div className='w-max'>
                <p className="text-[#e8e8e0] font-medium tracking-wide">Professional</p>
              </div>
              <div className='w-max'>
                <p className="text-[#e8e8e0] font-medium tracking-wide">Private</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
