import type { ReactNode } from 'react'

export type IconShowcaseCardWidth = 'wide' | 'standard'

export interface IconShowcaseCardProps {
  title: string
  children: ReactNode
  className?: string
  /** Wide cards (1008px) vs standard (880px) per Figma icon groups */
  maxWidth?: IconShowcaseCardWidth
}

export function IconShowcaseCard({ title, children, className = '', maxWidth = 'standard' }: IconShowcaseCardProps) {
  const maxW = maxWidth === 'wide' ? 'max-w-[1008px]' : 'max-w-[880px]'
  return (
    <article
      className={['w-full rounded-[24px] bg-white shadow-icon-card', maxW, className].filter(Boolean).join(' ')}
    >
      <div className="px-8 pb-10 pt-[94px] sm:px-[108px]">
        <div className="relative min-h-[56px] w-full max-w-[664px]">
          <h2 className="text-[30px] font-bold leading-[38px] text-dark">{title}</h2>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-stroke" aria-hidden />
        </div>
        <div className="pt-8">{children}</div>
      </div>
    </article>
  )
}
