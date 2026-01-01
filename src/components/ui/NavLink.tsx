interface NavLinkProps {
  children: React.ReactNode
  href: string
  className?: string
}

export function NavLink({ children, href, className = '' }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className={`text-[#b8b8aa] hover:text-[#e8e8e0] transition-all duration-300 open-sans-light text-[15px] tracking-wide ${className}`}
    >
      {children}
    </a>
  )
}
