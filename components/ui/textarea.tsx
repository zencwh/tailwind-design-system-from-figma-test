import type { TextareaHTMLAttributes } from 'react'

export type TextareaState = 'Default' | 'Hover' | 'Focused' | 'Disabled'

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: string
  showLabel?: boolean
  showHelperText?: boolean
  helperText?: string
  showCounter?: boolean
  counterText?: string
  state?: TextareaState
  onChangeText?: (value: string) => void
}

export function Textarea({
  label = 'Label',
  showLabel = true,
  showHelperText = true,
  helperText = 'Helper Text',
  showCounter = true,
  counterText = '0/50',
  state = 'Default',
  placeholder = 'Placeholder',
  className = '',
  disabled,
  value,
  onChangeText,
  ...rest
}: TextareaProps) {
  const isDisabled = state === 'Disabled' || Boolean(disabled)
  const border =
    state === 'Focused' ? 'border-2 border-[#c3cef6]' : state === 'Hover' ? 'border-[1.5px] border-primary' : 'border border-stroke'
  const bg = isDisabled ? 'bg-[#f3f4f6]' : 'bg-white'
  const labelColor = isDisabled ? 'text-[#6b7280]' : 'text-dark'
  const helperColor = 'text-muted'

  return (
    <div className={['flex h-[220px] w-[500px] flex-col', showLabel || showHelperText || showCounter ? 'gap-[10px]' : '', className].join(' ')}>
      {showLabel ? <p className={['text-[16px] font-medium leading-[24px]', labelColor].join(' ')}>{label}</p> : null}

      <div className="flex flex-1">
        <textarea
          value={value}
          onChange={(e) => onChangeText?.(e.target.value)}
          disabled={isDisabled}
          placeholder={placeholder}
          className={['h-full w-full resize-none rounded-[6px] p-5 text-[16px] font-normal leading-[24px] text-[#9ca3af] outline-none', bg, border].join(' ')}
          {...rest}
        />
      </div>

      {showHelperText || showCounter ? (
        <div className="flex w-full items-end justify-between">
          {showHelperText ? <p className={['text-[14px] font-normal leading-[22px]', helperColor].join(' ')}>{helperText}</p> : <span />}
          {showCounter ? <p className={['text-[14px] font-normal leading-[22px] text-right', helperColor].join(' ')}>{counterText}</p> : null}
        </div>
      ) : null}
    </div>
  )
}

