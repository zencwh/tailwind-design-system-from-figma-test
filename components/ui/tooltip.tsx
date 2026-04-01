export type TooltipColor = 'Primary' | 'Dark' | 'White'
export type TooltipPosition = 'Top' | 'Right' | 'Bottom' | 'Left'

export interface TooltipProps {
  color?: TooltipColor
  position?: TooltipPosition
  text?: string
  className?: string
}

export function Tooltip({ color = 'Primary', position = 'Top', text = 'Tooltip', className = '' }: TooltipProps) {
  const bg = color === 'White' ? 'bg-white shadow-card text-dark' : color === 'Dark' ? 'bg-[#111928] text-white' : 'bg-primary text-white'

  const pointer =
    position === 'Top'
      ? 'left-1/2 -translate-x-1/2 -bottom-[7px] border-l-[6px] border-r-[6px] border-t-[7px] border-l-transparent border-r-transparent'
      : position === 'Bottom'
        ? 'left-1/2 -translate-x-1/2 -top-[7px] border-l-[6px] border-r-[6px] border-b-[7px] border-l-transparent border-r-transparent'
        : position === 'Left'
          ? 'right-[-7px] top-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-l-[7px] border-t-transparent border-b-transparent'
          : 'left-[-7px] top-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-r-[7px] border-t-transparent border-b-transparent'

  const pointerColor =
    color === 'White'
      ? position === 'Top'
        ? 'border-t-white'
        : position === 'Bottom'
          ? 'border-b-white'
          : position === 'Left'
            ? 'border-l-white'
            : 'border-r-white'
      : color === 'Dark'
        ? position === 'Top'
          ? 'border-t-[#111928]'
          : position === 'Bottom'
            ? 'border-b-[#111928]'
            : position === 'Left'
              ? 'border-l-[#111928]'
              : 'border-r-[#111928]'
        : position === 'Top'
          ? 'border-t-primary'
          : position === 'Bottom'
            ? 'border-b-primary'
            : position === 'Left'
              ? 'border-l-primary'
              : 'border-r-primary'

  return (
    <div className={['relative inline-flex rounded-[5px] px-[14px] py-[5px] text-[14px] leading-[22px]', bg, className].join(' ')}>
      {text}
      <span className={['absolute h-0 w-0', pointer, pointerColor].join(' ')} />
    </div>
  )
}

