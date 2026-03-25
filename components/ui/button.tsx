import React, { type ButtonHTMLAttributes, type ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline'
export type ButtonSize = 'sm' | 'md'
export type ButtonRound = 'full' | 'md' | 'square' | 'Squire' | 'Semi Round' | 'Full Rounded'
export type ButtonKind = 'Primary' | 'Secondary' | 'Tertiary'
export type ButtonColor = 'Primary' | 'Secondary' | 'Tertiary'
export type ButtonState = 'Default' | 'Hover' | 'Disable' | 'Active'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Existing local API.
   */
  variant?: ButtonVariant
  size?: ButtonSize
  round?: ButtonRound
  /**
   * Figma-compatible API from node 310:10254.
   */
  kind?: ButtonKind
  color?: ButtonColor
  state?: ButtonState
  showLeftIcon?: boolean
  showRightIcon?: boolean
  iconLeft?: ReactNode | null
  rightIcon?: ReactNode | null
  buttonText?: string
  children?: ReactNode
}

export function Button({
  variant = 'outline',
  size = 'md',
  round = 'full',
  kind,
  color,
  state = 'Default',
  showLeftIcon = false,
  showRightIcon = false,
  iconLeft = null,
  rightIcon = null,
  buttonText,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark disabled:cursor-not-allowed'

  const sizeClasses = size === 'sm' ? 'px-4 py-2 text-sm leading-[20px]' : 'px-6 py-3 text-base leading-[24px]'

  const roundClasses =
    round === 'full' || round === 'Full Rounded'
      ? 'rounded-full'
      : round === 'md' || round === 'Semi Round'
        ? 'rounded-[6px]'
        : 'rounded-none'

  const figmaColor = color ?? (variant === 'secondary' ? 'Secondary' : variant === 'outline' ? 'Tertiary' : 'Primary')
  const figmaKind = kind ?? (variant === 'outline' ? 'Secondary' : 'Primary')

  const palette =
    figmaColor === 'Secondary'
      ? {
          solid: 'bg-[#13C296] border-[#13C296] text-white',
          outline: 'bg-white border-[#13C296] text-[#13C296]',
          ghost: 'bg-transparent border-transparent text-[#13C296]',
        }
      : figmaColor === 'Tertiary'
        ? {
            solid: 'bg-[#111928] border-[#111928] text-white',
            outline: 'bg-white border-[#DFE4EA] text-[#111928]',
            ghost: 'bg-transparent border-transparent text-[#111928]',
          }
        : {
            solid: 'bg-[#3758F9] border-[#3758F9] text-white',
            outline: 'bg-white border-[#DFE4EA] text-[#111928]',
            ghost: 'bg-transparent border-transparent text-[#3758F9]',
          }

  const kindClasses =
    figmaKind === 'Secondary' ? palette.outline : figmaKind === 'Tertiary' ? palette.ghost : palette.solid

  const stateClasses =
    state === 'Hover'
      ? 'brightness-95'
      : state === 'Active'
        ? 'brightness-90'
        : state === 'Disable'
          ? 'opacity-50 pointer-events-none'
          : ''

  const iconWrap = 'inline-flex size-5 items-center justify-center'
  const label = children ?? buttonText ?? 'Button'

  return (
    <button
      className={[base, 'border border-solid', sizeClasses, roundClasses, kindClasses, stateClasses, className].join(' ')}
      disabled={disabled || state === 'Disable'}
      {...props}
    >
      {showLeftIcon ? <span className={iconWrap}>{iconLeft ?? <span className="text-[18px] leading-none">+</span>}</span> : null}
      <span>{label}</span>
      {showRightIcon ? <span className={iconWrap}>{rightIcon ?? <span className="text-[18px] leading-none">+</span>}</span> : null}
    </button>
  )
}

