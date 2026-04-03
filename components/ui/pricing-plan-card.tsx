import { Button } from '@/components/ui/button'

const imgDecoration = 'https://www.figma.com/api/mcp/asset/3f2c6b86-7040-477d-94ff-7caeafad4d61'

export interface PricingPlanCardProps {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  ctaLabel: string
  /** Middle tier uses solid primary CTA in Figma */
  highlighted?: boolean
  onChoose?: () => void
  className?: string
}

/**
 * Figma 310:17209 — single pricing column with corner decoration.
 */
export function PricingPlanCard({
  name,
  price,
  period = '/ year ',
  description,
  features,
  ctaLabel,
  highlighted = false,
  onChoose,
  className = '',
}: PricingPlanCardProps) {
  return (
    <article
      className={[
        'relative flex w-full max-w-[370px] flex-col gap-9 overflow-hidden rounded-[10px] border-2 border-stroke bg-white p-[50px] shadow-[0px_39px_23px_-27px_rgba(0,0,0,0.04)]',
        className,
      ].join(' ')}
    >
      <div className="pointer-events-none absolute right-3 top-3 h-[184px] w-[172px] opacity-90">
        <img alt="" className="size-full object-contain" src={imgDecoration} />
      </div>

      <div className="relative flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3.5">
            <p className="text-lg font-semibold leading-[26px] text-primary">{name}</p>
            <div className="flex items-end gap-0.5">
              <span className="text-[42px] font-bold leading-none text-dark">{price}</span>
              <span className="pb-1 text-base font-medium leading-6 text-muted">{period}</span>
            </div>
          </div>
          <p className="max-w-[270px] text-base font-normal leading-6 text-muted">{description}</p>
        </div>

        <div className="h-px w-full max-w-[270px] bg-stroke" />

        <ul className="flex flex-col gap-3.5 text-base font-normal leading-6 text-muted">
          {features.map((f) => (
            <li key={f} className="max-w-[270px]">
              {f}
            </li>
          ))}
        </ul>
      </div>

      {highlighted ? (
        <Button
          type="button"
          kind="Primary"
          variant="primary"
          round="Semi Round"
          showLeftIcon={false}
          showRightIcon={false}
          onClick={onChoose}
          className="relative z-[1] w-full max-w-[270px] justify-center rounded-md border-0 px-7 py-[13px] text-base font-medium"
        >
          {ctaLabel}
        </Button>
      ) : (
        <Button
          type="button"
          kind="Secondary"
          variant="outline"
          color="Tertiary"
          round="Semi Round"
          showLeftIcon={false}
          showRightIcon={false}
          onClick={onChoose}
          className="relative z-[1] w-full max-w-[270px] justify-center rounded-md !border-stroke !bg-white px-7 py-[13px] text-base font-medium !text-primary"
        >
          {ctaLabel}
        </Button>
      )}
    </article>
  )
}
