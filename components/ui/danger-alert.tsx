import type { HTMLAttributes } from 'react'

export interface DangerAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: '1' | '2' | '3'
  title?: string
  lines?: string[]
  message?: string
}

function DangerIcon({ style }: { style: '1' | '2' | '3' }) {
  return (
    <div className="relative">
      <div
        className={[
          style === '3' ? 'size-[20px] rounded-full bg-[#f23030]' : 'size-[34px] rounded-[8px]',
          style === '2' ? 'bg-[#f23030]' : style === '1' ? 'bg-[#feebeb]' : '',
        ].join(' ')}
      />
      <span
        className={[
          'absolute inset-0 flex items-center justify-center',
          style === '3' ? 'text-[12px] text-white' : style === '2' ? 'text-[16px] text-white' : 'text-[16px] text-[#f23030]',
        ].join(' ')}
      >
        ⊗
      </span>
    </div>
  )
}

export function DangerAlert({
  style = '1',
  title = 'There were 2 errors with your submission',
  lines = ['Lorem Ipsum is simply dummy text of the printing', "Industry's standard dummy text ever since the 1500s, when"],
  message = 'Uh oh, something went wrong',
  className = '',
  ...rest
}: DangerAlertProps) {
  const is2 = style === '2'
  const is3 = style === '3'
  return (
    <div
      className={[
        'relative rounded-[8px]',
        is3
          ? 'inline-flex items-center gap-3 bg-[#fef3f3] px-[18px] py-[15px] shadow-[0px_2px_10px_rgba(0,0,0,0.08)]'
          : is2
            ? 'flex items-start gap-[22px] border-l-[6px] border-[#f23030] bg-[#fef3f3] p-[35px] shadow-[0px_2px_10px_rgba(0,0,0,0.08)]'
            : 'flex items-start gap-[22px] bg-white p-[35px] shadow-card',
        className,
      ].join(' ')}
      {...rest}
    >
      <DangerIcon style={style} />
      {is3 ? (
        <p className="text-[14px] font-medium leading-[20px] text-[#bc1c21]">{message}</p>
      ) : (
        <div className="flex flex-col gap-[15px]">
          <p className="text-[16px] font-semibold leading-[24px] text-[#bc1c21]">{title}</p>
          <ul className="flex list-disc flex-col gap-[6px] pl-5">
            {lines.slice(0, is2 ? 1 : 2).map((line) => (
              <li key={line} className="text-[16px] font-normal leading-[24px] text-[#f56060]">
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

