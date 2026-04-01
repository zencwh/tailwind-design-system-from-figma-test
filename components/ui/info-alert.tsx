import type { HTMLAttributes } from 'react'

export interface InfoAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: '1' | '2' | '3'
  title?: string
  description?: string
  onClose?: () => void
}

function InfoIcon({ style }: { style: '1' | '2' | '3' }) {
  return (
    <div className="relative">
      <div
        className={[
          style === '3' ? 'size-[36px] rounded-full bg-[#0b76b7]' : 'size-[34px] rounded-[6px]',
          style === '2' ? 'bg-[#0b76b7]' : style === '1' ? 'bg-[#77d1f3]/30' : '',
        ].join(' ')}
      />
      <span className="absolute inset-0 flex items-center justify-center text-[18px] text-white">{style === '1' ? 'ⓘ' : 'ⓘ'}</span>
      {style === '1' ? <span className="absolute inset-0 flex items-center justify-center text-[18px] text-[#0b76b7]">ⓘ</span> : null}
    </div>
  )
}

export function InfoAlert({
  style = '1',
  title = 'Important Notice',
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
  className = '',
  onClose,
  ...rest
}: InfoAlertProps) {
  const is2 = style === '2'
  const is3 = style === '3'

  return (
    <div
      className={[
        'relative rounded-[8px]',
        is3
          ? 'flex w-[655px] items-center justify-between border-l-[6px] border-[#0b76b7] bg-white px-[24px] py-[20px]'
          : is2
            ? 'flex items-start gap-[22px] border-l-[6px] border-[#0b76b7] bg-[#e9f9ff] p-[35px]'
            : 'flex items-start gap-[22px] bg-white p-[35px] shadow-card',
        className,
      ].join(' ')}
      {...rest}
    >
      <div className={['flex', is3 ? 'items-center gap-5' : 'items-start gap-[22px]'].join(' ')}>
        <InfoIcon style={style} />
        <div className={['flex flex-col items-start', is3 ? 'gap-[5px]' : 'gap-[14px]'].join(' ')}>
          <p className={['text-[18px] leading-[26px]', is3 ? 'font-medium text-dark' : 'font-semibold text-[#0b76b7]'].join(' ')}>
            {title}
          </p>
          <p className={['font-normal text-muted', is3 ? 'w-[496px] text-[14px] leading-[22px]' : 'w-[740px] text-[16px] leading-[24px]'].join(' ')}>
            {is3 ? 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' : description}
          </p>
        </div>
      </div>
      {is3 ? (
        <button
          type="button"
          aria-label="Close info alert"
          onClick={onClose}
          className="ml-4 inline-flex size-5 items-center justify-center text-[#374151]"
        >
          <span className="text-[28px] leading-none">×</span>
        </button>
      ) : null}
    </div>
  )
}

