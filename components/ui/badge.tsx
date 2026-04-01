import type { HTMLAttributes, ReactNode } from 'react'

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'neutral' | 'primary' | 'outline'
export type BadgeSize = 'sm' | 'md'
export type BadgeState = 'Default' | 'Hover' | 'Focus' | 'Disable'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  state?: BadgeState
  children: ReactNode
}

export function Badge({ variant = 'default', size = 'md', state = 'Default', className = '', children, ...props }: BadgeProps) {
  const isDisable = state === 'Disable'
  const isFocus = state === 'Focus'
  const isHover = state === 'Hover'

  const base = 'inline-flex items-center justify-center rounded-[6px] font-normal'

  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-[14px] py-[5px] text-[16px]'

  const getVariantClasses = () => {
    if (isDisable) return 'bg-[#e5e7eb] opacity-40'

    switch (variant) {
      case 'success':
        return isFocus
          ? 'bg-green-50 border-2 border-green-200'
          : isHover
          ? 'bg-green-600'
          : 'bg-green-50'
      case 'warning':
        return isFocus
          ? 'bg-yellow-50 border-2 border-yellow-200'
          : isHover
          ? 'bg-yellow-600'
          : 'bg-yellow-50'
      case 'danger':
        return isFocus
          ? 'bg-red-50 border-2 border-red-200'
          : isHover
          ? 'bg-red-600'
          : 'bg-red-50'
      case 'primary':
        return isFocus
          ? 'bg-primary/10 border-2 border-primary/30'
          : isHover
          ? 'bg-primary'
          : 'bg-primary/10'
      case 'outline':
        return 'border border-gray-300 bg-transparent'
      case 'neutral':
      case 'default':
      default:
        return isFocus
          ? 'bg-gray-50 border-2 border-gray-200'
          : isHover
          ? 'bg-gray-600'
          : 'bg-gray-50'
    }
  }

  const getTextColor = () => {
    if (isDisable) return 'text-gray-400'

    switch (variant) {
      case 'success':
        return isHover ? 'text-white' : 'text-green-700'
      case 'warning':
        return isHover ? 'text-white' : 'text-yellow-700'
      case 'danger':
        return isHover ? 'text-white' : 'text-red-700'
      case 'primary':
        return isHover ? 'text-white' : 'text-primary'
      case 'outline':
        return 'text-dark'
      case 'neutral':
      case 'default':
      default:
        return isHover ? 'text-white' : 'text-gray-700'
    }
  }

  return (
    <span className={[base, sizeClasses, getVariantClasses(), getTextColor(), className].join(' ')} {...props}>
      {children}
    </span>
  )
}

