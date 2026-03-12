import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type SegmentRound = 'square' | 'semi' | 'full'

export interface SegmentItem extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
  label: string
  icon?: ReactNode
  active?: boolean
}

export interface SegmentedControlProps {
  items: SegmentItem[]
  rounded?: SegmentRound
  withIcons?: boolean
  className?: string
}

function getRoundClasses(rounded: SegmentRound, index: number, lastIndex: number) {
  const left =
    rounded === 'full' ? 'rounded-l-[30px]' : rounded === 'semi' ? 'rounded-l-[6px]' : 'rounded-l-none'
  const right =
    rounded === 'full' ? 'rounded-r-[30px]' : rounded === 'semi' ? 'rounded-r-[6px]' : 'rounded-r-none'

  if (index === 0 && index === lastIndex) {
    return `${left} ${right}`
  }

  if (index === 0) {
    return left
  }

  if (index === lastIndex) {
    return right
  }

  return 'rounded-none'
}

export function SegmentedControl({ items, rounded = 'square', withIcons = false, className = '' }: SegmentedControlProps) {
  const lastIndex = items.length - 1

  return (
    <div className={['inline-flex', className].join(' ')}>
      {items.map((item, index) => {
        const { id, label, icon, active, className: itemClassName, ...buttonProps } = item
        const isActive = Boolean(active)

        const base =
          'flex items-center justify-center border border-solid text-[16px] font-medium leading-[24px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:z-10'

        const spacing = withIcons ? 'gap-[8px] px-[15px] py-[10px]' : 'px-[25px] py-[12px]'

        const stateClasses = isActive
          ? 'bg-primary border-primary text-white'
          : 'bg-white border-stroke text-dark'

        const roundClasses = getRoundClasses(rounded, index, lastIndex)

        const separatorFix = index > 0 ? '-ml-px' : ''

        return (
          <button
            key={id}
            type="button"
            className={[base, spacing, stateClasses, roundClasses, separatorFix, itemClassName].join(' ')}
            {...buttonProps}
          >
            {withIcons && icon ? <span className="inline-flex size-[18px] items-center justify-center">{icon}</span> : null}
            <span>{label}</span>
          </button>
        )
      })}
    </div>
  )
}

