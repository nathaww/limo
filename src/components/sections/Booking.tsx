import { Button, SectionDivider } from '../ui'

export function Booking() {
  return (
    <section id="book-now" className="py-32 md:py-40 bg-linear-to-b from-[#0d1420] to-[#09111d] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#1a2838]/20 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <SectionDivider centered />
          <h2 className="oleo-script-swash-caps-bold text-4xl md:text-5xl text-[#f5f5f0] mb-8">
            Reserve Your Ride
          </h2>
          <p className="text-[#b8b8aa] text-xl leading-relaxed mb-14 open-sans-light">
            Scheduling is straightforward. Select a time that works for you,
            and your chauffeur will handle the rest.
          </p>

          <Button href="https://calendly.com/endale44" className="mb-16">
            Book via Calendly
          </Button>

          <div className="pt-12 border-t border-[#1f2937]/40 flex flex-col items-center">
            <p className="text-[#8a8a7a] text-sm mb-4 tracking-wide">Prefer to reach out directly?</p>
            <a
              href="mailto:Endale44@gmail.com"
              className="text-[#e8e8e0] hover:text-[#d4af6a] transition-colors duration-300 text-lg open-sans-light"
            >
              Endale44@gmail.com
            </a>
            -- OR --
            <a
              href="tel:+14046681950"
              className="text-[#e8e8e0] hover:text-[#d4af6a] transition-colors duration-300 text-lg open-sans-light"
            >
              +1 (404)-668-1950
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
