import { Button, NavLink } from '../ui'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09111d]/95 backdrop-blur-md border-b border-[#1f2937]/30">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex items-center justify-between">
        <a href="#" className="oleo-script-swash-caps-bold text-2xl text-[#e8e8e0] tracking-tight">
          Centennial
        </a>
        <div className="hidden md:flex items-center gap-12">
          <NavLink href="#vehicle">Vehicle</NavLink>
          <NavLink href="#chauffeur">Chauffeur</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#book-now">Contact</NavLink>
        </div>
        <Button href="#book-now" className="hidden md:inline-block px-4 lg:px-8 py-3 text-xs">
          Book Now
        </Button>
      </nav>
    </header>
  )
}
