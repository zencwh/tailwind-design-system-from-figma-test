import type { InputHTMLAttributes, ReactNode } from 'react'

export type CheckboxStyle = 'default' | 'card' | 'icon'
export type CheckboxFigmaStyle = '1' | '2' | '3' | '4' | '5'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  description?: string
  styleVariant?: CheckboxStyle
  /** Figma style variants for node 310:11540 */
  figmaStyle?: CheckboxFigmaStyle
  showLabel?: boolean
  icon?: ReactNode
}

export function Checkbox({
  checked,
  onChange,
  label = 'Checkbox Text',
  description,
  styleVariant = 'default',
  figmaStyle = '1',
  showLabel = true,
  icon,
  className = '',
  ...rest
}: CheckboxProps) {
  const isCard = styleVariant === 'card'
  const isIconOnly = styleVariant === 'icon' && (!showLabel || (!label && !description))

  const isRound = figmaStyle === '4' || figmaStyle === '5'
  const isX = figmaStyle === '3'
  const isFill = figmaStyle === '2'

  const wrapperBase = 'inline-flex items-center gap-[10px] text-[16px] leading-[24px]'

  const wrapperVariant = isCard
    ? 'rounded-[6px] border border-stroke bg-white px-4 py-3 shadow-card'
    : ''

  const boxBase = [
    'relative inline-flex h-5 w-5 items-center justify-center border bg-white transition-colors',
    isRound ? 'rounded-full' : 'rounded-[4px]',
  ].join(' ')

  const boxChecked = checked
    ? isFill
      ? 'border-primary bg-primary'
      : isRound
        ? 'border-primary bg-white'
        : 'border-primary bg-[#f1f4ff]'
    : 'border-stroke bg-white'

  const iconWrapper =
    isFill
      ? 'inline-flex h-4 w-4 items-center justify-center text-white text-[12px] font-semibold'
      : 'inline-flex h-4 w-4 items-center justify-center text-primary text-[12px] font-semibold'

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
        {checked && !isRound && (
          <span className={iconWrapper}>
            {isX ? '×' : styleVariant === 'icon' ? icon ?? (isFill ? '✓' : '■') : isFill ? '✓' : '■'}
          </span>
        )}
        {checked && isRound && (
          <span
            className={[
              'inline-block rounded-full',
              figmaStyle === '5' ? 'h-[10px] w-[10px] bg-primary' : 'h-[10px] w-[10px] bg-primary',
            ].join(' ')}
          />
        )}
      </span>

      {!isIconOnly && showLabel && (
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

