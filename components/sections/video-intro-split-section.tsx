import { Button } from '@/components/ui/button'

const imgRight = 'https://www.figma.com/api/mcp/asset/aac9c6a6-0b4b-41fa-a289-e186eb03b53d'
const imgLeftPattern = 'https://www.figma.com/api/mcp/asset/307e7742-69d0-4e2a-a1bd-739f7cf22fae'
const imgPlay = 'https://www.figma.com/api/mcp/asset/8bdeadc8-d35e-4955-99e8-8d5b2f4f8b9a'

/** Figma 310:18070 */
export interface VideoIntroSplitSectionProps {
  className?: string
  onKnowMore?: () => void
  onPlay?: () => void
}

export function VideoIntroSplitSection({ className = '', onKnowMore, onPlay }: VideoIntroSplitSectionProps) {
  return (
    <section className={['relative min-h-[500px] overflow-hidden lg:h-[600px]', className].filter(Boolean).join(' ')}>
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgRight} />
      </div>
      <div className="absolute inset-y-0 left-0 w-full bg-primary lg:w-1/2" />
      <div className="absolute inset-y-0 left-0 hidden w-1/2 opacity-90 lg:block">
        <img alt="" className="size-full object-cover object-left" src={imgLeftPattern} />
      </div>

      <div className="relative z-[1] mx-auto flex min-h-[500px] max-w-[1440px] flex-col lg:flex-row">
        <div className="flex w-full flex-col justify-center gap-9 px-6 py-16 text-white lg:w-1/2 lg:px-[135px] lg:py-12">
          <div className="flex max-w-[486px] flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-base font-medium leading-6">Watch Our Intro Video</p>
              <h2 className="text-[40px] font-bold leading-[48px]">
                <span className="block">We are creative design</span>
                <span className="block">agency based in USA</span>
              </h2>
            </div>
            <p className="text-base font-normal leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam fringilla, scelerisque nisl in, accumsan diam.
              Quisque sollicitudin risus eu tortor euismod imperdiet.{' '}
            </p>
          </div>
          <Button
            type="button"
            kind="Primary"
            variant="primary"
            round="Full Rounded"
            showLeftIcon={false}
            showRightIcon={false}
            onClick={onKnowMore}
            className="w-fit rounded-full border border-white !bg-transparent px-7 py-[13px] text-base font-medium !text-white hover:!bg-white/10"
          >
            Know More
          </Button>
        </div>

        <div className="relative flex min-h-[280px] w-full items-center justify-center lg:hidden">
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgRight} />
          <button
            type="button"
            onClick={onPlay}
            className="relative z-[1] w-[min(28%,160px)] max-w-[200px]"
            aria-label="Play video"
          >
            <img alt="" className="block w-full max-w-none" src={imgPlay} />
          </button>
        </div>

        <div className="relative hidden w-1/2 lg:block">
          <button
            type="button"
            onClick={onPlay}
            className="absolute left-1/2 top-1/2 w-[12.5%] min-w-[100px] max-w-[180px] -translate-x-1/2 -translate-y-1/2"
            aria-label="Play video"
          >
            <img alt="" className="block w-full max-w-none" src={imgPlay} />
          </button>
        </div>
      </div>
    </section>
  )
}
