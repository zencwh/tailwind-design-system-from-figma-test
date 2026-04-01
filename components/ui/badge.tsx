import type { HTMLAttributes, ReactNode } from 'react'

export type BadgeVariant = 'neutral' | 'primary' | 'outline'
export type BadgeSize = 'sm' | 'md'
export type BadgeState = 'Default' | 'Hover' | 'Focus' | 'Disable'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  state?: BadgeState
  children: ReactNode
}

export function Badge({ variant = 'neutral', size = 'md', state = 'Default', className = '', children, ...props }: BadgeProps) {
  const isDisable = state === 'Disable'
  const isFocus = state === 'Focus'
  const isHover = state === 'Hover'

  const base = 'inline-flex items-center justify-center rounded-[6px] font-normal'

  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-[14px] py-[5px] text-[16px]'

  const stateClasses = isDisable
    ? 'bg-[#e5e7eb] opacity-40'
    : isFocus
    ? 'bg-[rgba(55,88,249,0.08)] border-2 border-[rgba(55,88,249,0.3)]'
    : isHover
    ? 'bg-primary'
    : 'bg-[rgba(55,88,249,0.08)]'

  const textColor = isHover ? 'text-white' : 'text-dark'

  return (
    <span className={[base, sizeClasses, stateClasses, textColor, className].join(' ')} {...props}>
      {children}
    </span>
  )
}

