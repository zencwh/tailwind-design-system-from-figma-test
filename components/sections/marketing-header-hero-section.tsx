import { Button } from '@/components/ui/button'

/** Figma 310:16807 */
const imgLogomark = 'https://www.figma.com/api/mcp/asset/972a93ac-6f25-423d-82bd-fb44e1039949'
const imgTailGrids = 'https://www.figma.com/api/mcp/asset/3209fd87-fcb9-4fa3-972f-4f9d450d236c'
const imgHeroImage = 'https://www.figma.com/api/mcp/asset/ee1db8f6-b9b9-41b1-b7ce-c2b9e9786119'
const imgDottedShape = 'https://www.figma.com/api/mcp/asset/e6840971-f99b-487a-8ea1-cf7470d02209'
const imgDownload = 'https://www.figma.com/api/mcp/asset/12e997b0-2b36-4772-bccc-2b19fbfac88f'
const imgOracle = 'https://www.figma.com/api/mcp/asset/1d6d6d36-ec35-48e4-8134-63d89740dff2'
const imgIntel = 'https://www.figma.com/api/mcp/asset/80f8d169-dc04-4138-808e-1587d233467b'
const imgLogitech = 'https://www.figma.com/api/mcp/asset/c032b1ad-b01f-4668-a324-b8222cef6ad1'
const imgLine1 = 'https://www.figma.com/api/mcp/asset/87121383-7e9c-4c45-bf23-79ef24613790'

function HeroLogo({ className = '' }: { className?: string }) {
  return (
    <div className={['relative h-10 w-40 shrink-0', className].join(' ')}>
      <div className="absolute inset-[0_74.9%_0_0]">
        <img alt="" className="absolute block size-full max-w-none" src={imgLogomark} />
      </div>
      <div className="absolute inset-[22.5%_0_22.55%_34.51%]">
        <img alt="" className="absolute block size-full max-w-none" src={imgTailGrids} />
      </div>
    </div>
  )
}

export interface MarketingHeaderHeroSectionProps {
  className?: string
  onGetStarted?: () => void
  onSignUp?: () => void
}

export function MarketingHeaderHeroSection({
  className = '',
  onGetStarted,
  onSignUp,
}: MarketingHeaderHeroSectionProps) {
  return (
    <div className={['overflow-hidden bg-white', className].filter(Boolean).join(' ')}>
      <header className="border-b border-transparent">
        <div className="mx-auto flex h-[90px] max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-[135px]">
          <HeroLogo />
          <nav className="hidden items-center gap-10 text-base font-medium leading-6 text-dark md:flex">
            <a href="#" className="hover:text-primary">
              Home
            </a>
            <a href="#" className="hover:text-primary">
              Payment
            </a>
            <a href="#" className="hover:text-primary">
              Features
            </a>
          </nav>
          <div className="flex items-center gap-5">
            <a href="#" className="whitespace-nowrap text-base font-medium leading-6 text-dark hover:text-primary">
              Login
            </a>
            <Button
              type="button"
              kind="Primary"
              variant="primary"
              round="Semi Round"
              showLeftIcon={false}
              showRightIcon={false}
              onClick={onSignUp}
              className="rounded-md border-0 px-6 py-2 text-base font-medium"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <div className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-8 lg:px-[135px] lg:pb-24 lg:pt-10">
        <div className="pointer-events-none absolute bottom-32 right-[20%] hidden h-[93px] w-[93px] lg:block xl:right-[28%]">
          <img alt="" className="size-full object-contain" src={imgDottedShape} />
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="flex max-w-xl flex-col gap-20">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-7">
                <h1 className="text-[48px] font-bold leading-[58px] text-dark">
                  <span className="block">The Greatest</span>
                  <span className="block">Journey Of Online Payment.</span>
                </h1>
                <p className="max-w-[470px] text-base font-normal leading-6 text-muted">
                  With TailGrids, business and students thrive together. Business can perfectly match their staffing to changing
                  demand throughout the dayed.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <Button
                  type="button"
                  kind="Primary"
                  variant="primary"
                  round="Semi Round"
                  showLeftIcon={false}
                  showRightIcon={false}
                  onClick={onGetStarted}
                  className="rounded-md border-0 px-7 py-[13px] text-base font-medium"
                >
                  Get Started
                </Button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2.5 text-base font-medium leading-6 text-[#464646] hover:opacity-80"
                >
                  <span className="relative size-6 shrink-0">
                    <img alt="" className="absolute block size-full max-w-none" src={imgDownload} />
                  </span>
                  Download App
                </button>
              </div>
            </div>

            <div className="inline-grid place-items-start">
              <div className="col-start-1 row-start-1 mt-[42px] flex flex-wrap items-center gap-8 sm:gap-12">
                <img alt="Oracle" className="h-5 w-[159px] object-contain" src={imgOracle} />
                <img alt="Intel" className="h-[26px] w-[65px] object-contain" src={imgIntel} />
                <img alt="Logitech" className="h-[31px] w-[99px] object-contain" src={imgLogitech} />
              </div>
              <div className="col-start-1 row-start-1 flex items-center gap-3">
                <p className="whitespace-nowrap text-xs font-medium leading-5 text-muted">Some Of Our Clients</p>
                <div className="relative h-0 w-[30px] shrink-0">
                  <img alt="" className="absolute inset-[-1px_0_0_0] block size-full max-w-none" src={imgLine1} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[491px] shrink-0">
            <div className="relative aspect-[491/515] w-full overflow-hidden rounded-bl-lg rounded-br-lg rounded-tl-[110px] rounded-tr-lg">
              <img alt="" className="absolute inset-0 size-full object-cover" src={imgHeroImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
