type SectionHeadingProps = {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClass} mb-12 lg:mb-16`}>
      {label && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-widest mb-3 ${
            light ? 'text-secondary' : 'text-primary'
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-secondary/90' : 'text-text'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
