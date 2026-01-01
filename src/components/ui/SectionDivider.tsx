interface SectionDividerProps {
  className?: string
  centered?: boolean
}

export function SectionDivider({ className = '', centered = false }: SectionDividerProps) {
  return (
    <div className={`w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af6a] to-transparent mb-10 ${centered ? 'mx-auto' : 'bg-gradient-to-r from-[#d4af6a] via-[#d4af6a] to-transparent'} ${className}`} />
  )
}
