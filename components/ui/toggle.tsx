export type ToggleStyle = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

export interface ToggleProps {
  active?: boolean
  style?: ToggleStyle
  className?: string
}

export function Toggle({ active = false, style = '1', className = '' }: ToggleProps) {
  const isCompact = ['2', '5', '8'].includes(style)
  const h = isCompact ? 'h-[28px]' : 'h-[32px]'
  const w = 'w-[55px]'

  const trackBase =
    style === '4' || style === '6'
      ? active
        ? 'bg-primary'
        : 'bg-dark'
      : style === '8'
        ? active
          ? 'bg-[#eaeefb]'
          : 'bg-dark'
        : style === '7'
          ? 'bg-[#eaeefb] border border-[#bfceff]'
          : style === '9'
            ? 'bg-[#eaeefb]'
            : 'bg-[#e5e7eb]'

  const knobPos = active ? 'translate-x-[27px]' : 'translate-x-0'

  return (
    <div className={['relative', h, w, className].join(' ')}>
      <div className={['absolute inset-0 rounded-[30px]', trackBase].join(' ')} />
      <div className={['absolute left-[2px] top-[2px] size-[28px] transition-transform', knobPos].join(' ')}>
        <div
          className={[
            'flex size-[28px] items-center justify-center rounded-full',
            style === '4' || style === '7' || style === '8' ? (active ? 'bg-primary text-white' : 'bg-white text-muted') : 'bg-white text-muted',
            style === '1' || style === '9' ? 'shadow-[0px_1px_3px_rgba(0,0,0,0.15)]' : '',
          ].join(' ')}
        >
          {style === '3' ? (active ? '✓' : '×') : style === '6' ? (active ? '●' : '○') : style === '9' ? (active ? '◉' : '●') : ''}
        </div>
      </div>
    </div>
  )
}

