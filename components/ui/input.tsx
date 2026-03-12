import type { InputHTMLAttributes, ReactNode } from 'react'

export type InputVariant = 'default' | 'error'
export type InputSize = 'sm' | 'md'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  variant?: InputVariant
  size?: InputSize
}

export function Input({
  label,
  hint,
  error,
  leadingIcon,
  trailingIcon,
  variant = 'default',
  size = 'md',
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id ?? props.name ?? undefined
  const isError = variant === 'error' || Boolean(error)

  const sizeClasses = size === 'sm' ? 'h-9 text-sm' : 'h-11 text-[16px] leading-[24px]'

  const base =
    'block w-full rounded-md border bg-white px-3 text-dark placeholder:text-muted shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'

  const borderClasses = isError ? 'border-red-500' : 'border-stroke'

  const wrapperClasses = [
    'flex items-center gap-2 rounded-md bg-white',
    isError ? 'ring-1 ring-red-500/40' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={className}>
      {label ? (
        <label htmlFor={inputId} className="mb-1 block text-sm font-medium text-dark">
          {label}
        </label>
      ) : null}

      <div className={wrapperClasses}>
        {leadingIcon ? <span className="pl-3 text-muted">{leadingIcon}</span> : null}
        <input
          id={inputId}
          className={[base, borderClasses, sizeClasses, leadingIcon ? 'pl-1' : '', trailingIcon ? 'pr-1' : '']
            .filter(Boolean)
            .join(' ')}
          {...props}
        />
        {trailingIcon ? <span className="pr-3 text-muted">{trailingIcon}</span> : null}
      </div>

      {error ? (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      ) : hint ? (
        <p className="mt-1 text-xs text-muted">{hint}</p>
      ) : null}
    </div>
  )
}

