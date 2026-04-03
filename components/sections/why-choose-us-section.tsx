import { Button } from '@/components/ui/button'

/** Figma node 310:16327 */
const imgTopLeft = 'https://www.figma.com/api/mcp/asset/c4d0b490-50b6-49bf-bfb0-61d303e5c2f8'
const imgTall = 'https://www.figma.com/api/mcp/asset/7a03466a-eb49-42d0-89e2-6d90414c4ff1'
const imgBottomLeft = 'https://www.figma.com/api/mcp/asset/bfd6b6c6-5852-48af-8fa4-0f1a754348bd'
const imgDottedShape = 'https://www.figma.com/api/mcp/asset/a91be518-161b-44d1-a897-6ea23e2c4104'

export interface WhyChooseUsSectionProps {
  className?: string
  eyebrow?: string
  headline?: string
  bodyParagraphs?: [string, string]
  ctaLabel?: string
  onCtaClick?: () => void
}

export function WhyChooseUsSection({
  className = '',
  eyebrow = 'Why Choose Us',
  headline = 'Make your customers happy by giving services.',
  bodyParagraphs = [
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.',
    'A domain name is one of the first steps to establishing your brand. Secure a consistent brand image with a domain name that matches your business.',
  ],
  ctaLabel = 'Get Started',
  onCtaClick,
}: WhyChooseUsSectionProps) {
  return (
    <section className={['overflow-hidden bg-white py-16 lg:py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-[135px]">
        <div className="relative w-full max-w-[600px] shrink-0">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="aspect-[270/320] overflow-hidden rounded-[15px]">
                <img alt="" src={imgTopLeft} className="size-full object-cover" />
              </div>
              <div className="aspect-[270/320] overflow-hidden rounded-[15px]">
                <img alt="" src={imgBottomLeft} className="size-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="aspect-[270/400] overflow-hidden rounded-[15px]">
                <img alt="" src={imgTall} className="size-full object-cover" />
              </div>
            </div>
          </div>

          <div className="relative hidden h-[670px] lg:block">
            <div className="absolute left-0 top-0 h-[320px] w-[270px] overflow-hidden rounded-[15px]">
              <img alt="" src={imgTopLeft} className="pointer-events-none absolute inset-0 size-full object-cover" />
            </div>
            <div className="absolute left-0 top-[350px] h-[320px] w-[270px] overflow-hidden rounded-[15px]">
              <img alt="" src={imgBottomLeft} className="pointer-events-none absolute inset-0 size-full object-cover" />
            </div>
            <div className="absolute left-[300px] top-[121px] h-[400px] w-[270px] overflow-hidden rounded-[15px]">
              <img alt="" src={imgTall} className="pointer-events-none absolute inset-0 size-full object-cover" />
            </div>
            <div className="pointer-events-none absolute left-[465px] top-[444px] h-[134px] w-[106px] -rotate-90">
              <img alt="" className="size-full object-contain" src={imgDottedShape} />
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[520px] flex-col gap-[30px] lg:max-w-[470px]">
          <div className="flex flex-col gap-[15px]">
            <p className="text-lg font-semibold leading-[26px] text-primary">{eyebrow}</p>
            <div className="flex flex-col gap-[18px]">
              <h2 className="text-[40px] font-bold leading-[48px] text-dark">{headline}</h2>
              <div className="flex flex-col gap-5 text-base font-normal leading-6 text-muted">
                <p className="max-w-[470px]">{bodyParagraphs[0]}</p>
                <p className="max-w-[389px]">{bodyParagraphs[1]}</p>
              </div>
            </div>
          </div>
          <Button
            type="button"
            kind="Primary"
            variant="primary"
            round="Semi Round"
            showLeftIcon={false}
            showRightIcon={false}
            onClick={onCtaClick}
            className="w-fit rounded-[6px] border-0 px-7 py-[13px] text-base font-medium leading-6"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
