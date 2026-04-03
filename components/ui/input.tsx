import type { InputHTMLAttributes, ReactNode } from 'react'

const userAltImgGroup = 'https://www.figma.com/api/mcp/asset/5f21ae7a-078c-4dc0-9063-d6c56af9a012'
const userAltImgGroup1 = 'https://www.figma.com/api/mcp/asset/6df7d38b-8424-40a8-bb56-ecfa3d6833e7'
const eyeAltImg = 'https://www.figma.com/api/mcp/asset/2300775d-3319-44b2-85ae-541577f14e46'

const errorInfoImg = 'https://www.figma.com/api/mcp/asset/94b71208-cc58-480a-997c-8d51fb9bd359'

const successCheckImg = 'https://www.figma.com/api/mcp/asset/b8187874-f47b-419d-915d-65d9d52b378f'

export type InputState = 'Default' | 'Disabled'
export type InputStatus = 'Default' | 'Error' | 'Success'

export type InputFieldVariant = 'default' | 'primary'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  helperText?: string
  showLabel?: boolean
  showHelperText?: boolean

  state?: InputState
  status?: InputStatus

  placeholder?: string

  /** When true, the field spans the full width of its parent instead of a fixed 250px layout. */
  fullWidth?: boolean

  /** Primary uses the brand border (e.g. focused/active field in marketing forms). */
  fieldVariant?: InputFieldVariant

  leftIcon?: boolean
  leftIconNode?: ReactNode | null

  rightIcon?: boolean
  rightIconNode?: ReactNode | null
}

export function Input({
  label,
  helperText,
  showLabel = true,
  showHelperText = true,
  state = 'Default',
  status = 'Default',
  placeholder = 'Placeholder',
  leftIcon = false,
  leftIconNode = null,
  rightIcon = true,
  rightIconNode = null,
  fullWidth = false,
  fieldVariant = 'default',
  className = '',
  id,
  disabled,
  ...props
}: InputProps) {
  const inputId = id ?? props.name ?? undefined
  const isDisabled = state === 'Disabled' || Boolean(disabled)
  const isError = status === 'Error'
  const isSuccess = status === 'Success'

  const labelTextClass = isDisabled ? 'text-[#6B7280]' : 'text-[#111928]'
  const helperTextClass = isDisabled
    ? 'text-[#6B7280]'
    : isError
      ? 'text-[#F23030]'
      : isSuccess
        ? 'text-[#22AD5C]'
        : 'text-[#4B5563]'

  const borderClass = isDisabled
    ? 'border-[#f3f4f6]'
    : isError
      ? 'border-[#f23030]'
      : isSuccess
        ? 'border-[#22ad5c]'
        : fieldVariant === 'primary'
          ? 'border-[#3758F9]'
          : 'border-[#dfe4ea]'

  const inputTextClass = isDisabled ? 'text-[#6B7280]' : 'text-[#111928]'

  const widthClass = fullWidth ? 'w-full' : 'w-[250px]'

  return (
    <div
      className={[
        'content-stretch flex flex-col gap-[5px] items-start',
        widthClass,
        className,
      ].join(' ')}
    >
      {showLabel ? (
        <label
          htmlFor={inputId}
          className={['content-stretch flex items-start relative shrink-0', widthClass].join(' ')}
        >
          <p
            className={[
              "font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 whitespace-nowrap text-[16px]",
              labelTextClass,
            ].join(' ')}
          >
            {label ?? 'Label'}
          </p>
        </label>
      ) : null}

      <div
        className={[
          'bg-white border border-solid content-stretch flex items-center gap-[10px] min-h-px min-w-px pl-[20px] pr-[16px] py-[12px] relative rounded-[6px] w-full',
          isDisabled ? 'bg-[#f3f4f6]' : 'bg-white',
          borderClass,
        ].join(' ')}
      >
        {leftIcon ? (
          leftIconNode ? (
            leftIconNode
          ) : (
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute contents inset-[2.81%_13.44%_2.66%_13.59%]">
                <div className="absolute inset-[2.81%_28.91%_56.25%_28.91%]">
                  <img alt="" className="absolute block max-w-none size-full" src={userAltImgGroup} />
                </div>
                <div className="absolute inset-[49.84%_13.44%_2.66%_13.59%]">
                  <img alt="" className="absolute block max-w-none size-full" src={userAltImgGroup1} />
                </div>
              </div>
            </div>
          )
        ) : null}

        <input
          id={inputId}
          className={[
            'content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative bg-transparent border-none p-0 m-0 outline-none text-[16px] leading-[24px] font-normal w-full placeholder:text-[#9CA3AF]',
            inputTextClass,
          ].join(' ')}
          placeholder={placeholder}
          disabled={isDisabled}
          {...props}
        />

        {rightIcon ? (
          rightIconNode ? (
            rightIconNode
          ) : (
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-[17.81%_2.73%]">
                <img alt="" className="absolute block max-w-none size-full" src={isError ? errorInfoImg : isSuccess ? successCheckImg : eyeAltImg} />
              </div>
            </div>
          )
        ) : null}
      </div>

      {showHelperText ? (
        <p
          className={[
            "font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 w-full whitespace-nowrap text-[14px]",
            helperTextClass,
          ].join(' ')}
        >
          {helperText ?? 'Helper Text'}
        </p>
      ) : null}
    </div>
  )
}

