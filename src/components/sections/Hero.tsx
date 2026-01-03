import { Button } from '../ui'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-[#0d1420] via-[#09111d] to-[#09111d]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#1a2838]/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-size[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-50"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 py-40 text-center">
        <div className="mb-12">
          <div className="inline-block w-20 h-0.5 bg-linear-to-r from-transparent via-[#d4af6a] to-transparent mb-12"></div>
        </div>
        <h1 className="oleo-script-swash-caps-bold text-5xl md:text-6xl lg:text-7xl text-[#f5f5f0] leading-[1.1] mb-10 tracking-tight">
          Private Chauffeur Service
        </h1>
        <p className="md:text-2xl text-[#b8b8aa] mb-6 open-sans-light max-w-3xl mx-auto leading-relaxed">
          Arrive with confidence. Experience premium transportation with a fleet of high-end luxury vehicles and professional chauffeurs dedicated to exceptional service.
        </p>
        <p className="text-[#8a8a7a] text-xs tracking-[0.2em] uppercase mb-16 font-medium">
          Atlanta Metropolitan Area
        </p>
        <Button href="#book-now">
          Book a Ride
        </Button>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <div className="w-px h-20 bg-linear-to-b from-[#d4af6a]/50 to-transparent"></div>
      </div>
    </section>
  )
}
