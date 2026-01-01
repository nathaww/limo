interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function Button({ children, href = '#', variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = 'inline-block px-10 py-4 text-[13px] font-medium tracking-[0.15em] uppercase transition-all duration-500 ease-out'
  
  const variants = {
    primary: 'text-[#0b1119] bg-[#d4af6a] hover:bg-[#e6c383] hover:shadow-lg hover:shadow-[#d4af6a]/20 hover:-translate-y-0.5',
    secondary: 'text-[#e8e8e0] border-2 border-[#d4af6a]/40 hover:border-[#d4af6a] hover:bg-[#d4af6a]/5'
  }

  return (
    <a
      href={href} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
