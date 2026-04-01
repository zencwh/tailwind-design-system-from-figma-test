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
}: TextareaProps) {
  const isDisabled = state === 'Disabled' || Boolean(disabled)
  const isDisabledAndShowLabel = state === 'Disabled' && showLabel
  const isHelperTextAndShowLabelAndShowCounterAndIsDefaultOrHoverOrFocused = showHelperText && showLabel && showCounter && ['Default', 'Hover', 'Focused'].includes(state)
  const isNotHelperTextAndShowCounterAndIsNotShowLabelOrDefaultAndShowLabelOr = !showHelperText && showCounter && (!showLabel || (state === 'Default' && showLabel) || (state === 'Hover' && showLabel) || (state === 'Focused' && showLabel))
  const isNotHelperTextAndNotShowLabelAndShowCounter = !showHelperText && !showLabel && showCounter
  const isDisabledAndHelperTextAndShowLabelAndShowCounter = state === 'Disabled' && showHelperText && showLabel && showCounter
  const isDisabledAndNotHelperTextAndShowLabelAndShowCounter = state === 'Disabled' && !showHelperText && showLabel && showCounter
  const isHoverAndHelperTextAndShowLabelAndNotShowCounter = state === 'Hover' && showHelperText && showLabel && !showCounter
  const isFocusedAndHelperTextAndShowLabelAndNotShowCounter = state === 'Focused' && showHelperText && showLabel && !showCounter

  return (
    <div className={className || `flex flex-col h-[220px] items-start relative w-[500px] ${!showHelperText && !showLabel && !showCounter ? '' : 'gap-[10px]'}`}>
      {showLabel && ['Default', 'Hover', 'Focused'].includes(state) && (
        <p className="font-medium leading-[24px] relative shrink-0 text-dark text-[16px] whitespace-nowrap">
          {label}
        </p>
      )}
      {((state === 'Default' && showLabel) || (state === 'Hover' && showLabel) || (state === 'Focused' && showLabel) || (!showLabel && !showCounter) || isNotHelperTextAndNotShowLabelAndShowCounter) && (
        <div className="flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
          <textarea
            value={value}
            onChange={(e) => onChangeText?.(e.target.value)}
            disabled={isDisabled}
            placeholder={placeholder}
            className={`border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[20px] relative rounded-[6px] w-full font-normal leading-[24px] text-[16px] text-[#9ca3af] outline-none ${
              state === 'Disabled' && !showLabel && (!showCounter || (!showHelperText && showCounter))
                ? 'bg-[#f3f4f6] border border-stroke'
                : state === 'Focused' && (showLabel || (!showLabel && !showCounter) || (!showHelperText && !showLabel && showCounter))
                ? 'bg-white border-2 border-[#c3cef6]'
                : state === 'Hover' && (showLabel || (!showLabel && !showCounter) || (!showHelperText && !showLabel && showCounter))
                ? 'bg-white border-[1.5px] border-primary'
                : 'bg-white border border-stroke'
            }`}
          />
        </div>
      )}
      {((state === 'Default' && showHelperText && showLabel && !showCounter) || isHoverAndHelperTextAndShowLabelAndNotShowCounter || isFocusedAndHelperTextAndShowLabelAndNotShowCounter || (showHelperText && !showLabel && !showCounter) || isNotHelperTextAndNotShowLabelAndShowCounter || (state === 'Default' && showLabel && showCounter) || (state === 'Hover' && showLabel && showCounter) || (state === 'Focused' && showLabel && showCounter)) && (
        <div className={`flex relative shrink-0 w-full ${isHelperTextAndShowLabelAndShowCounterAndIsDefaultOrHoverOrFocused ? 'items-center justify-between' : isNotHelperTextAndShowCounterAndIsNotShowLabelOrDefaultAndShowLabelOr ? 'items-end justify-end' : 'items-end'}`}>
          <div className={`inline-grid place-items-start relative shrink-0 ${isHelperTextAndShowLabelAndShowCounterAndIsDefaultOrHoverOrFocused ? '' : ''}`}>
            {showHelperText && ((state === 'Default' && showLabel) || (state === 'Hover' && showLabel) || (state === 'Focused' && showLabel) || (!showLabel && !showCounter)) && (
              <p className="font-normal leading-[22px] relative text-muted text-[14px] whitespace-nowrap">
                {helperText}
              </p>
            )}
            {isNotHelperTextAndShowCounterAndIsNotShowLabelOrDefaultAndShowLabelOr && (
              <p className="font-normal leading-[22px] relative text-muted text-[14px] text-right whitespace-nowrap">
                {counterText}
              </p>
            )}
          </div>
          {isHelperTextAndShowLabelAndShowCounterAndIsDefaultOrHoverOrFocused && (
            <div className="inline-grid place-items-start relative shrink-0">
              <p className="font-normal leading-[22px] relative text-muted text-[14px] text-right whitespace-nowrap">
                {counterText}
              </p>
            </div>
          )}
        </div>
      )}
      {isDisabledAndShowLabel && (
        <>
          <p className="font-medium leading-[24px] relative shrink-0 text-[#6b7280] text-[16px] whitespace-nowrap">
            {label}
          </p>
          <div className="flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
            <textarea
              value={value}
              onChange={(e) => onChangeText?.(e.target.value)}
              disabled={isDisabled}
              placeholder={placeholder}
              className="bg-[#f3f4f6] border border-stroke border-solid flex flex-[1_0_0] items-start min-h-px min-w-px p-[20px] relative rounded-[6px] w-full font-normal leading-[24px] text-[16px] text-[#9ca3af] outline-none"
            />
          </div>
        </>
      )}
      {state === 'Disabled' && showLabel && ((showHelperText && !showCounter) || showCounter) && (
        <div className={`flex relative shrink-0 w-full ${isDisabledAndHelperTextAndShowLabelAndShowCounter ? 'items-center justify-between' : isDisabledAndNotHelperTextAndShowLabelAndShowCounter ? 'items-end justify-end' : 'items-end'}`}>
          <div className={`inline-grid place-items-start relative shrink-0 ${isDisabledAndHelperTextAndShowLabelAndShowCounter ? '' : ''}`}>
            {state === 'Disabled' && showHelperText && showLabel && (
              <p className="font-normal leading-[22px] relative text-muted text-[14px] whitespace-nowrap">
                {helperText}
              </p>
            )}
            {isDisabledAndNotHelperTextAndShowLabelAndShowCounter && (
              <p className="font-normal leading-[22px] relative text-muted text-[14px] text-right whitespace-nowrap">
                {counterText}
              </p>
            )}
          </div>
          {isDisabledAndHelperTextAndShowLabelAndShowCounter && (
            <div className="inline-grid place-items-start relative shrink-0">
              <p className="font-normal leading-[22px] relative text-muted text-[14px] text-right whitespace-nowrap">
                {counterText}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

