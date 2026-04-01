import type { HTMLAttributes } from 'react'

export type DropdownState = 'Default' | 'Hover' | 'Focused' | 'Disabled'

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: string
  showLabel?: boolean
  placeholder?: string
  state?: DropdownState
  expanded?: boolean
  items?: string[]
  selectedItem?: string
}

export function Dropdown({
  label = 'Label',
  showLabel = true,
  placeholder = 'Dropdown',
  state = 'Default',
  expanded = false,
  items = ['Item 1', 'Item 2', 'Item 3'],
  selectedItem,
  className = '',
  ...rest
}: DropdownProps) {
  const isDisabled = state === 'Disabled'
  const isHover = state === 'Hover'
  const isFocused = state === 'Focused'

  const triggerBorder = isFocused
    ? 'border-[3px] border-[#8099ec]'
    : isHover
      ? 'border-[1.5px] border-primary'
      : isDisabled
        ? 'border-[#f3f4f6]'
        : 'border-stroke'
  const triggerBg = isDisabled ? 'bg-[#e5e7eb]' : 'bg-white'
  const labelColor = isDisabled ? 'text-[#6b7280]' : 'text-dark'
  const placeholderColor = isDisabled ? 'text-[#6b7280]' : 'text-muted'
  const iconColor = isDisabled ? '#6b7280' : '#637381'

  return (
    <div className={['flex w-[250px] flex-col items-start', showLabel ? 'gap-[10px]' : '', className].join(' ')} {...rest}>
      {showLabel ? <p className={['text-[16px] font-normal leading-[24px]', labelColor].join(' ')}>{label}</p> : null}

      <div
        className={[
          'flex w-full items-center justify-between rounded-[6px] border px-[20px] py-[12px]',
          triggerBorder,
          triggerBg,
        ].join(' ')}
      >
        <p className={['text-[16px] font-normal leading-[24px]', placeholderColor].join(' ')}>{selectedItem ?? placeholder}</p>
        <span className="inline-flex size-[16px] items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            {expanded ? (
              <path d="M6.5 12L10 8.5L13.5 12" stroke={iconColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M6.5 8L10 11.5L13.5 8" stroke={iconColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </span>
      </div>

      {expanded ? (
        <div className="mt-[10px] w-full rounded-[6px] border border-stroke bg-white px-px py-[10px] shadow-card">
          {items.map((item, idx) => (
            <div
              key={item}
              className={[
                'px-[16px] py-[7px] text-[16px] font-normal leading-[24px]',
                idx === 0 ? 'bg-primary text-white' : 'bg-white text-muted',
              ].join(' ')}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

