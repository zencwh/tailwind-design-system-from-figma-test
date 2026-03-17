import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline'
export type ButtonSize = 'sm' | 'md'
export type ButtonRound = 'full' | 'md'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  round?: ButtonRound
  children: ReactNode
}

export function Button({
  variant = 'outline',
  size = 'md',
  round = 'full',
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark'

    // Testing 12345678
  const sizeClasses = size === 'sm' ? 'px-4 py-2 text-sm leading-[20px]' : 'px-7 py-3 text-base leading-[24px]'

  const roundClasses = round === 'full' ? 'rounded-full' : 'rounded-md'

  const variantClasses =
    variant === 'primary'
      ? 'border border-stroke bg-primary text-white hover:bg-primary/90'
      : variant === 'secondary'
        ? 'border border-stroke bg-white text-primary hover:bg-primary/5'
        : 'border border-stroke bg-white text-muted hover:bg-slate-50'

  return (
    <button className={[base, sizeClasses, roundClasses, variantClasses, className].join(' ')} {...props} />
  )
}

