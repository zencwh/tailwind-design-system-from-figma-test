import type { HTMLAttributes, ReactNode } from 'react'

export type WarningAlertStyle = 'solid' | 'soft' | 'inline'

export interface WarningAlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style mapped from Figma variants:
   * - solid  → white card with shadow (Style = 1)
   * - soft   → soft yellow background with left border (Style = 2)
   * - inline → compact inline bar with left border (Style = 3)
   */
  styleVariant?: WarningAlertStyle
  title?: string
  description: string
  icon?: ReactNode
  showCloseButton?: boolean
  onClose?: () => void
}

export function WarningAlert({
  styleVariant = 'solid',
  title,
  description,
  icon,
  showCloseButton = false,
  onClose,
  className = '',
  ...rest
}: WarningAlertProps) {
  const isSoft = styleVariant === 'soft'
  const isInline = styleVariant === 'inline'

  const containerBase = 'flex gap-[22px] items-start'

  const containerVariant = isInline
    ? 'bg-white border-l-[6px] border-[#FBBF24] px-6 py-5 rounded-[6px] items-center'
    : isSoft
      ? 'bg-[#FFFBEB] border-l-[6px] border-[#FBBF24] p-[35px] rounded-[8px]'
      : 'bg-white p-[35px] rounded-[8px] shadow-card'

  const headingClasses = isInline
    ? 'text-[18px] font-medium leading-[26px] text-[#111928]'
    : 'text-[18px] font-semibold leading-[26px] text-[#9D5425]'

  const bodyClasses = isInline
    ? 'text-[14px] leading-[22px] text-[#637381] max-w-[496px]'
    : 'text-[16px] leading-[24px] text-[#D0915C] max-w-[740px]'

  const defaultTitle = isInline ? 'Opps! something went wrong' : 'Attention needed'

  const iconNode =
    icon ??
    (isInline ? (
      <div className="inline-flex size-9 items-center justify-center rounded-full bg-[#FBBF24]">
        <span className="text-[18px] font-semibold text-white">!</span>
      </div>
    ) : (
      <div className="inline-flex size-[34px] items-center justify-center rounded-[6px] bg-[#FBBF24]/30">
        <span className="text-[18px] font-semibold text-[#F59E0B]">!</span>
      </div>
    ))

  return (
    <div
      className={[containerBase, containerVariant, className].join(' ')}
      role="alert"
      aria-live="polite"
      {...rest}
    >
      {iconNode}

      <div className={isInline ? 'flex flex-1 items-center justify-between gap-4' : 'flex flex-1 flex-col gap-[14px]'}>
        <div className={isInline ? 'flex flex-col gap-[5px]' : 'flex flex-col gap-[14px]'}>
          <p className={headingClasses}>{title ?? defaultTitle}</p>
          <p className={bodyClasses}>{description}</p>
        </div>

        {showCloseButton ? (
          <button
            type="button"
            aria-label="Dismiss notification"
            className="ml-auto inline-flex size-5 items-center justify-center rounded-full text-[#374151] hover:bg-slate-100"
            onClick={onClose}
          >
            <span className="text-sm leading-none">×</span>
          </button>
        ) : null}
      </div>
    </div>
  )
}

