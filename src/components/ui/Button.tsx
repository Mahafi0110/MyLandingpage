import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/20',
  secondary:
    'bg-white text-primary-dark hover:bg-on-primary border border-secondary/60 shadow-sm',
  outline:
    'border-2 border-primary text-primary-dark hover:bg-primary hover:text-white hover:border-primary',
  ghost: 'text-primary-dark hover:bg-white/80 hover:text-primary',
}

type BaseProps = {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${variantStyles[variant]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <a href={href} className={styles} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={styles} {...(props as ButtonAsButton)}>
      {children}
    </button>
  )
}
