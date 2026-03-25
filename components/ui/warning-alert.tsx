import type { HTMLAttributes, ReactNode } from 'react'

const imgGroup = 'https://www.figma.com/api/mcp/asset/73aa0069-6003-4b7e-97c1-e99e48e0fb2a'
const imgGroup1 = 'https://www.figma.com/api/mcp/asset/99082d0e-cfb6-44d4-8f66-09de44ddc98c'
const imgVector = 'https://www.figma.com/api/mcp/asset/75046931-83ab-40e5-ac3a-96e75814804b'

export interface WarningAlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Maps directly to the Figma component's variants for `310:9725`.
   * - `1` => Style=1 (white card)
   * - `2` => Style=2 (soft yellow card)
   * - `3` => Style=3 (inline bar with close icon)
   */
  style?: '1' | '2' | '3'
  title?: string
  description?: string
  /**
   * Optional override for the left warning icon.
   * If not provided, uses the Figma-provided icon assets.
   */
  icon?: ReactNode
  onClose?: () => void
}

export default function WarningAlert({
  className,
  style = '1',
  title,
  description,
  icon,
  onClose,
  ...rest
}: WarningAlertProps) {
  const is2 = style === '2'
  const is3 = style === '3'

  return (
    <div
      className={
        className ||
        `content-stretch flex flex-col items-start relative ${
          is3
            ? 'bg-white border-[#fbbf24] border-l-6 border-solid justify-center px-[24px] py-[20px] rounded-[6px] w-[655px]'
            : is2
              ? 'bg-[#fffbeb] border-[#fbbf24] border-l-6 border-solid p-[35px] rounded-[8px]'
              : 'bg-white p-[35px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]'
        }`
      }
      role="alert"
      aria-live="polite"
      {...rest}
    >
      <div className={`content-stretch flex gap-[22px] relative shrink-0 ${is3 ? 'items-center' : 'items-start'}`}>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div
            className={`bg-[#fbbf24] col-1 ml-0 mt-0 row-1 ${
              is3 ? 'rounded-[27px] size-[36px]' : is2 ? 'rounded-[6px] size-[34px]' : 'opacity-30 rounded-[6px] size-[34px]'
            }`}
          />
        </div>

        <div
          className={`col-1 overflow-clip relative row-1 size-[18px] ${is3 ? 'ml-[9px] mt-[9.5px]' : 'ml-[8px] mt-[8px]'}`}
          data-name="warning"
        >
          <div className="absolute inset-[5.1%_2.74%_13.44%_2.74%]">
            {icon ? (
              icon
            ) : (
              <img
                alt=""
                className="absolute block max-w-none size-full"
                src={['2', '3'].includes(style) ? imgGroup1 : imgGroup}
              />
            )}
          </div>
        </div>

        <div
          className={`content-stretch flex flex-col items-start not-italic relative shrink-0 ${
            is3 ? 'gap-[5px]' : 'gap-[14px]'
          }`}
        >
          <p
            className={`leading-[26px] relative shrink-0 text-[18px] text-center whitespace-nowrap ${
              is3 ? 'font-["Inter:Medium",sans-serif] font-medium text-[#111928]' : 'font-["Inter:Semi_Bold",sans-serif] font-semibold text-[#9d5425]'
            }`}
          >
            {is3 ? 'Opps! something went wrong' : is2 ? 'Attention needed' : title ?? 'Attention needed'}
          </p>
          <p
            className={`font-["Inter:Regular",sans-serif] font-normal relative shrink-0 ${
              is3
                ? 'leading-[22px] text-[#637381] text-[14px] w-[496px]'
                : is2
                  ? 'leading-[24px] text-[#d0915c] text-[16px] w-[740px]'
                  : 'leading-[24px] text-[#d0915c] text-[16px] w-[740px]'
            }`}
          >
            {description ??
              (is3
                ? 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                : is2
                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
                  : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when")}
          </p>
        </div>
      </div>

      {is3 ? (
        <div className="-translate-y-1/2 absolute overflow-clip right-[-57px] size-[20px] top-[calc(50%+0.5px)]" data-name="close">
          <div className="absolute inset-[5.82%_5.82%_5.78%_5.82%]">
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={onClose}
              className="absolute inset-0"
            >
              <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

