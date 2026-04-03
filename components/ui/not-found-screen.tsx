import { Button } from '@/components/ui/button'

export interface NotFoundScreenProps {
  code?: string
  title?: string
  description?: string
  actionLabel?: string
  onAction?: () => void
  className?: string
}

/**
 * Figma node 310:15264 — primary blue 404 with vertical light stripes and outline CTA.
 */
export function NotFoundScreen({
  code = '404',
  title = "Oops! That page can't be found",
  description = 'The page you are looking for it maybe deleted',
  actionLabel = 'Go To Home',
  onAction,
  className = '',
}: NotFoundScreenProps) {
  return (
    <section
      className={[
        'relative isolate min-h-[583px] w-full overflow-hidden bg-primary text-white',
        className,
      ].join(' ')}
    >
      <div className="pointer-events-none absolute inset-0 flex justify-center" aria-hidden>
        <div className="relative h-full w-full max-w-[1440px]">
          {/* Stripe positions from Figma 310:15264 (1440px artboard), scaled with container */}
          <div className="absolute left-0 top-0 h-full w-[31.94%] bg-gradient-to-b from-white/[0.08] to-transparent" />
          <div className="absolute left-[36.11%] top-0 h-full w-[13.89%] bg-gradient-to-b from-white/[0.08] to-transparent" />
          <div className="absolute left-1/2 top-0 h-full w-[13.89%] scale-x-[-1] bg-gradient-to-b from-white/[0.08] to-transparent" />
          <div className="absolute left-[68.06%] top-0 h-full w-[31.94%] bg-gradient-to-b from-white/[0.08] to-transparent" />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[583px] max-w-[1440px] flex-col items-center justify-center gap-[35px] px-6 py-16 text-center">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[100px] font-bold leading-[130px]">{code}</p>
          <div className="flex flex-col items-center gap-3 leading-6">
            <p className="text-[22px] font-semibold">{title}</p>
            <p className="text-base font-normal">{description}</p>
          </div>
        </div>
        {actionLabel ? (
          <Button
            type="button"
            kind="Primary"
            variant="primary"
            round="Semi Round"
            showLeftIcon={false}
            showRightIcon={false}
            onClick={onAction}
            className="!border !border-solid !border-white !bg-transparent !text-white hover:!brightness-110 rounded-[6px] px-7 py-[13px] text-base font-medium leading-6"
          >
            {actionLabel}
          </Button>
        ) : null}
      </div>
    </section>
  )
}
