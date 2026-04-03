'use client'

import { useRef } from 'react'
import { Button } from '@/components/ui/button'

/** Figma 310:19525 */
const imgP1 = 'https://www.figma.com/api/mcp/asset/341aeaf6-3be6-463c-8cf6-b9a913dcf6bf'
const imgStarSm = 'https://www.figma.com/api/mcp/asset/9a65c87a-036b-456d-bbbc-b1044b0e4829'
const imgP2 = 'https://www.figma.com/api/mcp/asset/fafaeab8-b938-4c06-94ca-7fc9cfc86b61'
const imgP3 = 'https://www.figma.com/api/mcp/asset/d21b18d4-1ef1-4a58-9363-9566e0e780d9'
const imgP4 = 'https://www.figma.com/api/mcp/asset/b5c5675a-44b7-4efe-a482-4f0c43d43242'
const imgTooltipCaret = 'https://www.figma.com/api/mcp/asset/8f4501c7-0c0e-4f2e-9845-5f6089f8950f'
const iconCart = 'https://www.figma.com/api/mcp/asset/6df1b0a5-c529-4386-8e40-542676b0327b'
const iconEye = 'https://www.figma.com/api/mcp/asset/934f0fb0-025e-4da5-adb4-058498b7a2fc'
const iconHeart = 'https://www.figma.com/api/mcp/asset/adb22776-9796-4088-ba05-c9972bee6243'
const imgArrowBgRight = 'https://www.figma.com/api/mcp/asset/9de0dc4a-152d-445c-a828-f84d533a663b'
const imgArrowRight = 'https://www.figma.com/api/mcp/asset/9627b976-39c5-4f94-95c1-79739dd1ca82'
const imgArrowBgLeft = 'https://www.figma.com/api/mcp/asset/bb2929dd-6fe6-427f-a19f-063c60878366'
const imgArrowLeft = 'https://www.figma.com/api/mcp/asset/3f158130-feb1-413d-84b4-30eaffbfd354'

function NewBadge() {
  return (
    <div className="absolute right-[15px] top-[15px] z-10 flex items-center gap-0.5 rounded bg-[#13c296] px-2.5 py-0.5">
      <span className="text-sm font-medium leading-[22px] text-white">New</span>
      <span className="relative size-3 overflow-hidden">
        <img alt="" className="size-full" src={imgStarSm} />
      </span>
    </div>
  )
}

function CarouselTile({
  image,
  imageClass,
  title,
  price,
  badge,
  overlay,
}: {
  image: string
  imageClass: string
  title: string
  price: string
  badge?: boolean
  overlay?: boolean
}) {
  return (
    <div className="relative flex w-[270px] shrink-0 flex-col items-center gap-5">
      <div className="relative h-[300px] w-[270px] overflow-hidden rounded-[5px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[5px]">
          <img alt="" className={imageClass} src={image} />
        </div>
        {badge ? <NewBadge /> : null}
        {overlay ? (
          <div className="absolute left-1/2 top-[184px] z-10 flex w-[200px] -translate-x-1/2 flex-col items-center">
            <div className="relative rounded-md bg-white px-3.5 py-1.5 shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]">
              <p className="text-center text-sm leading-[22px] text-dark">Quick View</p>
              <div className="absolute bottom-[-7px] left-1/2 h-[7px] w-3 -translate-x-1/2">
                <img alt="" className="size-full" src={imgTooltipCaret} />
              </div>
            </div>
            <div className="mt-3 flex gap-2.5">
              <Button
                type="button"
                kind="Secondary"
                variant="outline"
                round="full"
                showLeftIcon
                showRightIcon={false}
                iconLeft={<img alt="" className="size-[18px]" src={iconCart} />}
                buttonText=""
                className="size-10 min-w-10 !rounded-full !border-0 bg-white !p-0 shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]"
              />
              <Button
                type="button"
                kind="Primary"
                variant="primary"
                round="full"
                showLeftIcon
                showRightIcon={false}
                iconLeft={<img alt="" className="size-[18px] brightness-0 invert" src={iconEye} />}
                buttonText=""
                className="size-10 min-w-10 !rounded-full !border-primary !bg-primary !p-0 shadow-[0px_1px_5px_0px_rgba(0,0,0,0.14)]"
              />
              <Button
                type="button"
                kind="Secondary"
                variant="outline"
                round="full"
                showLeftIcon
                showRightIcon={false}
                iconLeft={<img alt="" className="size-[18px]" src={iconHeart} />}
                buttonText=""
                className="size-10 min-w-10 !rounded-full !border-0 bg-white !p-0 shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]"
              />
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-xl font-semibold leading-[26px] text-dark">{title}</p>
        <p className="text-base font-medium leading-6 text-muted">{price}</p>
      </div>
    </div>
  )
}

export function BestSellingCarouselSection({ className = '' }: { className?: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section className={['relative bg-white py-16 lg:py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[113px]">
        <header className="mx-auto mb-14 flex max-w-[600px] flex-col items-center gap-2 text-center">
          <p className="text-lg font-semibold leading-[26px] text-primary">Most Popular Products</p>
          <h2 className="text-4xl font-bold leading-[48px] text-dark">Best Selling Items</h2>
          <div className="text-base leading-6 text-muted">
            <p className="mb-0">There are many variations of passages of Lorem Ipsum available</p>
            <p>but the majority have suffered alteration in some form.</p>
          </div>
        </header>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-[30px] overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <CarouselTile
              image={imgP1}
              imageClass="absolute left-[-22.52%] top-[-16.84%] h-[174.15%] w-[154.84%] max-w-none"
              title="Men Winter Jacket"
              price="$35.00"
              badge
            />
            <CarouselTile
              image={imgP2}
              imageClass="absolute left-0 top-[0.11%] h-[126%] w-full max-w-none"
              title="Men Summer Jacket"
              price="$35.00"
              badge
              overlay
            />
            <CarouselTile
              image={imgP3}
              imageClass="absolute left-[-16.09%] top-[-33.31%] h-[182.31%] w-[134.98%] max-w-none"
              title="Man’s Black Shirt"
              price="$35.00"
            />
            <CarouselTile
              image={imgP4}
              imageClass="absolute left-[-27.97%] top-[-14.8%] h-[194.09%] w-[143.7%] max-w-none"
              title="Men Winter Jacket"
              price="$35.00"
            />
          </div>

          <Button
            type="button"
            kind="Tertiary"
            variant="outline"
            round="full"
            showLeftIcon={false}
            showRightIcon={false}
            aria-label="Previous products"
            className="absolute left-0 top-[calc(50%-44px)] z-20 hidden size-11 min-w-11 -translate-y-1/2 !border-0 !bg-transparent !p-0 shadow-none lg:flex"
            onClick={() => scrollByDir(-1)}
          >
            <span className="relative size-11">
              <img alt="" className="size-full" src={imgArrowBgLeft} />
              <span className="absolute inset-[27.27%] overflow-hidden">
                <img alt="" className="size-full" src={imgArrowLeft} />
              </span>
            </span>
          </Button>
          <Button
            type="button"
            kind="Tertiary"
            variant="outline"
            round="full"
            showLeftIcon={false}
            showRightIcon={false}
            aria-label="Next products"
            className="absolute right-0 top-[calc(50%-44px)] z-20 hidden size-11 min-w-11 -translate-y-1/2 !border-0 !bg-transparent !p-0 shadow-none lg:flex"
            onClick={() => scrollByDir(1)}
          >
            <span className="relative size-11">
              <img alt="" className="size-full" src={imgArrowBgRight} />
              <span className="absolute inset-[27.27%] overflow-hidden">
                <img alt="" className="size-full" src={imgArrowRight} />
              </span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
