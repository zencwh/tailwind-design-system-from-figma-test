export type ProgressType = 'Primary' | 'Positive' | 'Negative'
export type ProgressStyle = '1' | '2' | '3'
export type ProgressPercentage = '50%' | '80%' | '90%'

export interface ProgressBarsProps {
  type?: ProgressType
  style?: ProgressStyle
  percentage?: ProgressPercentage
  className?: string
}

const widthMap: Record<ProgressPercentage, string> = {
  '50%': '50%',
  '80%': '80%',
  '90%': '90%',
}

const colorMap: Record<ProgressType, string> = {
  Primary: '#3758F9',
  Positive: '#22AD5C',
  Negative: '#F23030',
}

export function ProgressBars({ type = 'Primary', style = '1', percentage = '80%', className = '' }: ProgressBarsProps) {
  const color = colorMap[type]
  const width = widthMap[percentage]

  if (style === '3') {
    return (
      <div className={['relative h-[20px] w-[470px] max-w-full', className].join(' ')}>
        <div className="absolute inset-0 rounded-full bg-stroke" aria-hidden />
        <div
          className="absolute inset-y-0 left-0 flex min-w-0 items-center justify-center overflow-hidden rounded-full px-2"
          style={{ width, backgroundColor: color }}
        >
          <span className="text-center text-[12px] font-medium leading-[20px] text-white">{percentage}</span>
        </div>
      </div>
    )
  }

  if (style === '2') {
    return (
      <div className={['relative h-[51px] w-[470px]', className].join(' ')}>
        <div className="absolute inset-x-0 top-[25px] h-[6px] rounded-[30px] bg-stroke" />
        <div className="absolute left-0 top-[25px] h-[6px] rounded-[30px]" style={{ width, backgroundColor: color }} />
        <div
          className="absolute top-0 -translate-x-1/2 rounded-[5px] px-[14px] py-[5px] text-[14px] font-normal leading-[22px] text-white"
          style={{ left: width, backgroundColor: color }}
        >
          {percentage}
          <span
            className="absolute -bottom-[7px] left-1/2 h-0 w-0 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[7px] border-l-transparent border-r-transparent"
            style={{ borderTopColor: color }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={['relative h-[10px] w-[470px]', className].join(' ')}>
      <div className="absolute inset-x-0 top-0 h-[4px] rounded-[30px] bg-stroke" />
      <div className="absolute left-0 top-0 h-[4px] rounded-[30px]" style={{ width, backgroundColor: color }} />
    </div>
  )
}

