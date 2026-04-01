import type { ReactNode } from 'react'

export type ListType = 'Order List' | 'Unorder List'
export type ListStyle = '1' | '2' | '3' | '4' | '5' | '6'

export interface ListProps {
  state?: ListType
  style?: ListStyle
  items: string[]
  className?: string
}

function OrderedMarker({ index, style }: { index: number; style: '1' | '2' | '3' }) {
  const n = String(index + 1)
  if (style === '1') {
    return <span className="inline-flex size-[26px] items-center justify-center rounded-full bg-primary text-[16px] text-white">{n}</span>
  }
  if (style === '2') {
    return <span className="inline-flex size-[26px] items-center justify-center rounded-[3px] bg-primary text-[16px] text-white">{n}</span>
  }
  return (
    <span className="inline-flex size-[26px] rotate-45 items-center justify-center rounded-[3px] bg-primary text-[16px] text-white">
      <span className="-rotate-45">{n}</span>
    </span>
  )
}

function UnorderedMarker({ style }: { style: '1' | '2' | '3' | '4' | '5' | '6' }) {
  const base = 'inline-flex size-5 items-center justify-center'
  const icon: ReactNode =
    style === '1' ? (
      <span className="size-2 rounded-full bg-primary" />
    ) : style === '2' ? (
      <span className="text-[18px] leading-none text-primary">○</span>
    ) : style === '3' ? (
      <span className="text-[16px] leading-none text-[#22ad5c]">○</span>
    ) : style === '4' ? (
      <span className="text-[16px] leading-none text-[#f23030]">⊗</span>
    ) : style === '5' ? (
      <span className="text-[18px] leading-none text-primary">→</span>
    ) : (
      <span className="text-[16px] leading-none text-primary">☆</span>
    )
  return <span className={base}>{icon}</span>
}

export function List({ state = 'Order List', style = '1', items, className = '' }: ListProps) {
  const isOrdered = state === 'Order List'
  const orderedStyle: '1' | '2' | '3' = (['1', '2', '3'].includes(style) ? style : '1') as '1' | '2' | '3'
  const unorderedStyle: '1' | '2' | '3' | '4' | '5' | '6' = style as '1' | '2' | '3' | '4' | '5' | '6'

  return (
    <div className={['flex flex-col items-start gap-3', className].join(' ')}>
      {items.map((item, idx) => (
        <div key={`${idx}-${item}`} className="flex items-center gap-[10px]">
          {isOrdered ? (
            <OrderedMarker index={idx} style={orderedStyle} />
          ) : (
            <UnorderedMarker style={unorderedStyle} />
          )}
          <p className="text-[16px] font-normal leading-[24px] text-muted">{item}</p>
        </div>
      ))}
    </div>
  )
}

