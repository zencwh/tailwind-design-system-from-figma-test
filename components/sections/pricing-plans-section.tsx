import { PricingPlanCard } from '@/components/ui/pricing-plan-card'

const FEATURES = [
  '1 User',
  'All UI components',
  'Lifetime access',
  'Free updates',
  'Use on 1 (one) project',
  '3 Months support',
]

const BLURB = 'Perfect for using in a personal website or a client project.'

/** Figma 310:17209 */
export function PricingPlansSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-white py-16 lg:py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-[60px] px-6 lg:px-[135px]">
        <div className="flex max-w-[1170px] flex-col items-center gap-2 text-center">
          <p className="text-lg font-semibold leading-[26px] text-primary">Pricing Table</p>
          <h2 className="text-[40px] font-bold leading-[48px] text-dark">Our Pricing Plan</h2>
          <div className="text-base font-normal leading-6 text-muted">
            <p className="mb-0">There are many variations of passages of Lorem Ipsum available</p>
            <p className="mb-0">but the majority have suffered alteration in some form.</p>
          </div>
        </div>

        <div className="flex max-w-[1170px] flex-wrap justify-center gap-x-[30px] gap-y-10">
          <PricingPlanCard
            name="Personal"
            price="$59"
            description={BLURB}
            features={FEATURES}
            ctaLabel="Choose Personal"
          />
          <PricingPlanCard
            name="Business"
            price="$199"
            description={BLURB}
            features={FEATURES}
            ctaLabel="Choose Business"
            highlighted
          />
          <PricingPlanCard
            name="Professional"
            price="$250"
            description={BLURB}
            features={FEATURES}
            ctaLabel="Choose Professional"
          />
        </div>
      </div>
    </section>
  )
}
