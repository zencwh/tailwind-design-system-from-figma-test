import type { HTMLAttributes, ReactNode } from 'react'

export type BadgeVariant = 'neutral' | 'primary' | 'outline'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  children: ReactNode
}

export function Badge({ variant = 'neutral', size = 'md', className = '', children, ...props }: BadgeProps) {
  const base = 'inline-flex items-center justify-center rounded-full font-medium'

  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'

  const variantClasses =
    variant === 'primary'
      ? 'bg-primary/10 text-primary'
      : variant === 'outline'
        ? 'border border-stroke text-muted'
        : 'bg-slate-100 text-muted'

  return (
    <span className={[base, sizeClasses, variantClasses, className].join(' ')} {...props}>
      {children}
    </span>
  )
}

