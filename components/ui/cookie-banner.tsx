import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

export interface CookieBannerProps {
  title?: string
  description?: ReactNode
  acceptLabel?: string
  closeLabel?: string
  onAccept?: () => void
  onClose?: () => void
  className?: string
}

/**
 * Figma node 310:15235 — cookie consent bar (gray panel, primary Accept + white Close).
 */
export function CookieBanner({
  title = 'We use cookies',
  description = 'Please, accept these sweeties to continue enjoyin our site!',
  acceptLabel = 'Accept',
  closeLabel = 'Close',
  onAccept,
  onClose,
  className = '',
}: CookieBannerProps) {
  return (
    <div
      role="region"
      aria-label={title}
      className={[
        'w-full max-w-[1170px] rounded-lg border border-stroke bg-[#f3f4f6] px-6 py-6 sm:px-10 sm:py-7',
        className,
      ].join(' ')}
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex min-w-0 flex-col gap-1.5">
          <p className="text-2xl font-semibold leading-[30px] text-black">{title}</p>
          <div className="text-base font-normal leading-6 text-muted">{description}</div>
        </div>
        <div className="flex shrink-0 flex-wrap gap-[15px]">
          <Button
            type="button"
            kind="Primary"
            variant="primary"
            round="Semi Round"
            showLeftIcon={false}
            showRightIcon={false}
            onClick={onAccept}
            className="rounded-[6px] border-0 px-7 py-3 text-base font-medium leading-6"
          >
            {acceptLabel}
          </Button>
          <Button
            type="button"
            kind="Secondary"
            variant="outline"
            color="Tertiary"
            round="Semi Round"
            showLeftIcon={false}
            showRightIcon={false}
            onClick={onClose}
            className="rounded-[6px] border-stroke bg-white px-7 py-3 text-base font-medium leading-6 !text-muted shadow-card"
          >
            {closeLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
