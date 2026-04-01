import type { SelectHTMLAttributes } from 'react'

export type SelectStatus = 'Default' | 'Error' | 'Success'
export type SelectState = 'Default' | 'Disabled'

export type SelectOption = {
  value: string
  label: string
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'value' | 'onChange'> {
  label?: string
  helperText?: string
  showLabel?: boolean
  showHelperText?: boolean

  options: SelectOption[]
  placeholder?: string

  status?: SelectStatus
  state?: SelectState

  value?: string
  onChange?: (value: string) => void

  wrapperClassName?: string
  className?: string
}

export function Select({
  label,
  helperText = 'Helper Text',
  showLabel = true,
  showHelperText = true,
  options,
  placeholder = 'Select an option',
  status = 'Default',
  state = 'Default',
  value,
  onChange,
  wrapperClassName = '',
  className = '',
  id,
  disabled,
  ...rest
}: SelectProps) {
  const isDisabled = state === 'Disabled' || Boolean(disabled)
  const isError = status === 'Error'
  const isSuccess = status === 'Success'

  const labelColor = isDisabled ? '#6B7280' : '#111928'
  const helperColor = isDisabled ? '#6B7280' : isError ? '#F23030' : isSuccess ? '#22AD5C' : '#4B5563'
  const borderColor = isDisabled ? '#F3F4F6' : isError ? '#F23030' : isSuccess ? '#22AD5C' : '#DFE4EA'
  const textColor = isDisabled ? '#6B7280' : '#111928'

  return (
    <div
      className={['content-stretch flex flex-col gap-[5px] h-[107px] items-start relative w-[250px]', wrapperClassName].join(
        ' ',
      )}
    >
      {showLabel ? (
        <div className="content-stretch flex items-start relative shrink-0 w-[250px]" aria-hidden={false}>
          <p
            className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 whitespace-nowrap"
            style={{ color: labelColor, fontSize: 16, lineHeight: '24px' }}
          >
            {label ?? 'Label'}
          </p>
        </div>
      ) : null}

      <div
        className="bg-white border border-solid content-stretch flex items-center gap-[10px] min-h-px min-w-px pl-[20px] pr-[16px] py-[12px] relative rounded-[6px] w-full"
        style={{ borderColor, backgroundColor: isDisabled ? '#F3F4F6' : '#FFFFFF' }}
      >
        <select
          id={id}
          value={value ?? ''}
          disabled={isDisabled}
          onChange={(e) => onChange?.(e.target.value)}
          className={[
            'w-full bg-transparent outline-none text-[16px] leading-[24px] font-normal',
            'appearance-none',
            className,
          ].join(' ')}
          style={{ color: textColor }}
          {...rest}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none inline-flex size-[16px] items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6.5 8L10 11.5L13.5 8" stroke={textColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {showHelperText ? (
        <p
          className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] whitespace-nowrap"
          style={{ color: helperColor }}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  )
}

