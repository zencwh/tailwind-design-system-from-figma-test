import type { HTMLAttributes, ReactNode } from 'react'

const imgGroup = 'https://www.figma.com/api/mcp/asset/b4214f51-1fc5-4d10-b527-1d7d8cc8430e'
const imgGroup1 = 'https://www.figma.com/api/mcp/asset/5b8ecd7f-1184-494e-b5c7-dde905ebf210'
const imgEllipse2822 = 'https://www.figma.com/api/mcp/asset/f027bd39-2080-4352-a717-7e200873b211'
const imgGroup2 = 'https://www.figma.com/api/mcp/asset/1392511b-c064-42e0-b4d2-6ec778a85522'

export interface SuccessAlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Maps directly to Figma variants for node 310:9777.
   * - `1` => white card + actions
   * - `2` => green-tinted card with left border
   * - `3` => compact inline success bar
   */
  style?: '1' | '2' | '3'
  title?: string
  description?: string
  /**
   * Optional replacement for left icon area.
   */
  icon?: ReactNode
  primaryActionLabel?: string
  secondaryActionLabel?: string
  onPrimaryAction?: () => void
  onSecondaryAction?: () => void
}

export default function SuccessAlert({
  className,
  style = '1',
  title,
  description,
  icon,
  primaryActionLabel = 'View Status',
  secondaryActionLabel = 'Dismiss',
  onPrimaryAction,
  onSecondaryAction,
  ...rest
}: SuccessAlertProps) {
  const is1 = style === '1'
  const is2 = style === '2'
  const is3 = style === '3'
  const is1Or2 = is1 || is2

  return (
    <div
      className={
        className ||
        `content-stretch flex items-start relative rounded-[8px] ${
          is3
            ? 'bg-[#daf8e6] px-[18px] py-[15px]'
            : is2
              ? 'bg-[#daf8e6] border-[#22ad5c] border-l-6 border-solid gap-[25px] p-[30px]'
              : 'bg-white gap-[25px] p-[35px] shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]'
        }`
      }
      role="status"
      aria-live="polite"
      {...rest}
    >
      <div
        className={`relative shrink-0 ${
          is3 ? 'content-stretch flex gap-[12px] items-center' : 'grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start'
        }`}
      >
        <div
          className={
            is3
              ? 'grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0'
              : is2
                ? 'bg-[#22ad5c] col-1 ml-0 mt-0 rounded-[6px] row-1 size-[34px]'
                : 'bg-[#22ad5c] col-1 ml-0 mt-0 opacity-10 rounded-[6px] row-1 size-[34px]'
          }
        >
          {is3 ? (
            <>
              <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
                <img alt="" className="absolute block max-w-none size-full" src={imgEllipse2822} />
              </div>
              <div className="col-1 ml-[4px] mt-[4px] overflow-clip relative row-1 size-[12px]" data-name="checkmark-circle">
                <div className="absolute inset-[2.81%_2.66%_2.66%_2.81%]">
                  <img alt="" className="absolute block max-w-none size-full" src={imgGroup2} />
                </div>
              </div>
            </>
          ) : null}
        </div>

        {is1Or2 ? (
          <div className="col-1 ml-[8px] mt-[8px] overflow-clip relative row-1 size-[18px]" data-name="checkmark-circle">
            <div className="absolute inset-[2.81%_2.66%_2.66%_2.81%]">
              {icon ? (
                icon
              ) : (
                <img alt="" className="absolute block max-w-none size-full" src={is2 ? imgGroup1 : imgGroup} />
              )}
            </div>
          </div>
        ) : null}

        {is3 ? (
          <p className='font-["Inter:Medium",sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#004434] text-[16px] whitespace-nowrap'>
            {title ?? 'Your item has been added successfully'}
          </p>
        ) : null}
      </div>

      {is1Or2 ? (
        <div className={`content-stretch flex flex-col items-start not-italic relative shrink-0 ${is2 ? 'gap-[8px]' : 'gap-[25px]'}`}>
          {is1 ? (
            <>
              <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0">
                <p className='font-["Inter:Semi_Bold",sans-serif] font-semibold leading-[26px] relative shrink-0 text-[#111928] text-[18px] whitespace-nowrap'>
                  {title ?? 'Message Sent Successfully'}
                </p>
                <p className='font-["Inter:Regular",sans-serif] font-normal leading-[24px] relative shrink-0 text-[#637381] text-[16px] w-[740px]'>
                  {description ??
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"}
                </p>
              </div>
              <div className='content-stretch flex font-["Inter:Medium",sans-serif] font-medium gap-[20px] items-start leading-[22px] relative shrink-0 text-[14px] whitespace-nowrap'>
                <button type="button" className="relative shrink-0 text-[#22ad5c]" onClick={onPrimaryAction}>
                  {primaryActionLabel}
                </button>
                <button type="button" className="relative shrink-0 text-[#111928]" onClick={onSecondaryAction}>
                  {secondaryActionLabel}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className='font-["Inter:Semi_Bold",sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#004434] text-[18px] whitespace-nowrap'>
                {title ?? 'Message Sent Successfully'}
              </p>
              <p className='font-["Inter:Regular",sans-serif] font-normal leading-[24px] relative shrink-0 text-[#637381] text-[16px] w-[740px]'>
                {description ?? 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
              </p>
            </>
          )}
        </div>
      ) : null}
    </div>
  )
}

