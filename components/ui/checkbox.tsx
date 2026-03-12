import type { InputHTMLAttributes, ReactNode } from 'react'

export type CheckboxStyle = 'default' | 'card' | 'icon'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  description?: string
  styleVariant?: CheckboxStyle
  icon?: ReactNode
}

export function Checkbox({
  checked,
  onChange,
  label = 'Checkbox Text',
  description,
  styleVariant = 'default',
  icon,
  className = '',
  ...rest
}: CheckboxProps) {
  const isCard = styleVariant === 'card'
  const isIconOnly = styleVariant === 'icon' && !label && !description

  const wrapperBase = 'inline-flex items-start gap-3 text-[16px] leading-[24px]'

  const wrapperVariant = isCard
    ? 'rounded-[6px] border border-stroke bg-white px-4 py-3 shadow-card'
    : ''

  const boxBase =
    'relative inline-flex h-5 w-5 items-center justify-center rounded-[4px] border border-stroke bg-white transition-colors'

  const boxChecked = checked
    ? 'border-primary bg-primary'
    : ''

  const iconWrapper =
    'inline-flex h-4 w-4 items-center justify-center text-white text-[12px] font-semibold'

  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
    type: 'checkbox',
    checked,
    onChange,
    className: 'peer sr-only',
    ...rest,
  }

  const content = (
    <>
      <span className={[boxBase, boxChecked].join(' ')}>
        {checked && (
          <span className={iconWrapper}>
            {styleVariant === 'icon' ? icon ?? '✓' : '✓'}
          </span>
        )}
      </span>

      {!isIconOnly && (
        <span className="flex flex-col">
          <span className="font-normal text-dark">{label}</span>
          {description ? (
            <span className="text-[14px] leading-[22px] text-muted">{description}</span>
          ) : null}
        </span>
      )}
    </>
  )

  return (
    <label className={[wrapperBase, wrapperVariant, className].join(' ')}>
      <input {...inputProps} />
      {content}
    </label>
  )
}

