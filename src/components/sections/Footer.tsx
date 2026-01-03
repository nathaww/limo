export function Footer() {
  return (
    <footer className="py-16 bg-[#09111d] border-t border-[#1f2937]/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="oleo-script-swash-caps-bold text-xl text-[#e8e8e0] mb-2 tracking-tight">
              Centennial Black Car Service
            </p>
            <a
              href="mailto:Endale44@gmail.com"
              className="text-[#8a8a7a] text-sm hover:text-[#d4af6a] transition-colors duration-300 open-sans-light tracking-wide"
            >
              Endale44@gmail.com
            </a>
          </div>
          <p className="text-[#6a6a5a] text-sm open-sans-light">
            &copy; {new Date().getFullYear()} Centennial Black Car Service
          </p>
        </div>
      </div>
    </footer>
  )
}
