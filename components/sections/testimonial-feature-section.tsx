const imgArrowRight = 'https://www.figma.com/api/mcp/asset/eb28019a-61ae-4388-9b4b-d7f9d86c09b3'
const imgArrowLeft = 'https://www.figma.com/api/mcp/asset/0398a51e-597c-4b61-94f3-7b5b73ec46fb'
const imgPhoto = 'https://www.figma.com/api/mcp/asset/39431485-00f3-4ba2-ae51-8acee1926352'
const imgLogoMask = 'https://www.figma.com/api/mcp/asset/618314af-08da-484c-8ed3-2783cda3ae2e'
const imgLogoFill = 'https://www.figma.com/api/mcp/asset/97d82121-03a1-4737-b973-3b248d55c661'
const imgFillCircle = 'https://www.figma.com/api/mcp/asset/ca1d2655-53b6-4174-868a-99918e344ff1'
const imgFillCircleActive = 'https://www.figma.com/api/mcp/asset/35d56f0d-7d8f-4a2e-8f24-8f98ed97eb40'
const imgRing = 'https://www.figma.com/api/mcp/asset/77df7191-0d7e-4ea7-964d-5d7aa4ab3eee'
const imgDots = 'https://www.figma.com/api/mcp/asset/b9891f01-393c-4210-a37e-dd62675b9bee'

/** Figma 310:17986 */
export interface TestimonialFeatureSectionProps {
  className?: string
  onPrev?: () => void
  onNext?: () => void
}

export function TestimonialFeatureSection({ className = '', onPrev, onNext }: TestimonialFeatureSectionProps) {
  return (
    <section className={['overflow-hidden bg-[#f9fafb] py-16 lg:min-h-[713px] lg:py-24', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[1440px] flex-col-reverse items-center gap-12 px-6 lg:flex-row lg:items-center lg:justify-center lg:gap-16 lg:px-[135px] xl:gap-24">
        <div className="relative w-full max-w-[310px] shrink-0">
          <div className="pointer-events-none absolute -left-8 -top-10 hidden h-[76px] w-[76px] -rotate-90 lg:block">
            <img alt="" className="size-full object-contain" src={imgDots} />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -right-2 size-16 lg:-right-4">
            <img alt="" className="size-full object-contain" src={imgRing} />
          </div>
          <div className="relative aspect-[310/420] w-full overflow-hidden">
            <img alt="" className="absolute inset-0 size-full object-cover" src={imgPhoto} />
          </div>
        </div>

        <div className="flex max-w-[470px] flex-col gap-12">
          <div className="flex flex-col gap-8">
            <div className="h-[30px] w-[185px] overflow-hidden">
              <div
                className="relative h-full w-full"
                style={{ maskImage: `url('${imgLogoMask}')`, maskSize: '184.45px 30px', WebkitMaskImage: `url('${imgLogoMask}')` }}
              >
                <img alt="Lineicons" className="absolute inset-0 block size-full max-w-none object-cover" src={imgLogoFill} />
              </div>
            </div>
            <blockquote className="text-[22px] font-normal italic leading-10 text-muted">
              File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.
            </blockquote>
            <div>
              <p className="text-[22px] font-semibold text-[#212b36]">Larry Diamond</p>
              <p className="mt-2 text-base font-normal leading-6 text-muted">Chief Executive Officer.</p>
            </div>
          </div>

          <div className="flex gap-5">
            <button
              type="button"
              onClick={onPrev}
              className="relative flex size-[60px] shrink-0 items-center justify-center rounded-full border-0 bg-transparent p-0"
              aria-label="Previous testimonial"
            >
              <img alt="" className="absolute inset-0 size-full max-w-none" src={imgFillCircle} />
              <span className="relative size-6 overflow-hidden">
                <img alt="" className="absolute inset-[13.48%_9.06%_13.75%_8.95%] block size-full max-w-none" src={imgArrowLeft} />
              </span>
            </button>
            <button
              type="button"
              onClick={onNext}
              className="relative flex size-[60px] shrink-0 items-center justify-center rounded-full border-0 bg-transparent p-0 shadow-md"
              aria-label="Next testimonial"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <img alt="" className="absolute inset-[-25%_-66.67%_-108.33%_-66.67%] block size-full max-w-none" src={imgFillCircleActive} />
              </span>
              <span className="relative size-6 overflow-hidden">
                <img alt="" className="absolute inset-[13.63%_8.95%_13.59%_9.06%] block size-full max-w-none" src={imgArrowRight} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
