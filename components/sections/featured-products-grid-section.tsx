import { Button } from '@/components/ui/button'

/** Figma 310:19115 */
const imgWinter = 'https://www.figma.com/api/mcp/asset/83a3406d-d51d-43e6-b914-07343c13222d'
const imgSando = 'https://www.figma.com/api/mcp/asset/bbe14ada-8041-4c8b-9c8c-14e38a0263f8'
const imgJacket = 'https://www.figma.com/api/mcp/asset/2a63e6e3-ca4d-42c1-a4b7-202998b6f045'
const imgSunglasses = 'https://www.figma.com/api/mcp/asset/fcbdfff1-79a3-4b39-981b-693f39c695e7'
const iconCart = 'https://www.figma.com/api/mcp/asset/00234817-245f-467f-963d-0ff03467b9d2'
const iconEye = 'https://www.figma.com/api/mcp/asset/9f14f4c5-4937-4776-b075-5984eab9b28c'
const iconHeart = 'https://www.figma.com/api/mcp/asset/28bb6667-c7ea-4bac-82ab-2c1972801cfc'

export function FeaturedProductsGridSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-white py-16 lg:py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="mx-auto grid max-w-[1170px] grid-cols-1 gap-x-[30px] gap-y-10 px-6 lg:grid-cols-[minmax(0,670px)_minmax(0,470px)] lg:px-0">
        {/* Row 1 col 1 — big discount */}
        <article className="flex flex-col overflow-hidden rounded-[7px] border border-stroke">
          <div className="relative h-[350px] w-full overflow-hidden lg:max-w-[670px]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img alt="" className="absolute left-0 top-[-121.59%] h-[287.25%] w-full max-w-none" src={imgWinter} />
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 bg-white p-[30px] lg:max-w-[670px]">
            <div className="flex flex-col gap-2.5">
              <div className="flex w-full items-start justify-between gap-4 text-base font-medium leading-6">
                <span className="text-muted">Winter Clothings</span>
                <span className="text-right text-primary">-50% Flat Discount</span>
              </div>
              <h3 className="text-[28px] font-semibold leading-10 text-dark">Women winter sweater</h3>
            </div>
            <div className="flex items-start gap-3 text-lg font-semibold leading-[26px]">
              <span className="text-muted line-through">£48.00</span>
              <span className="text-dark">£24.00</span>
            </div>
          </div>
        </article>

        {/* Row 1 col 2 — jacket + overlay */}
        <article className="relative flex flex-col overflow-hidden rounded-[7px] border border-stroke">
          <div className="relative h-[350px] w-full overflow-hidden lg:max-w-[470px]">
            <img alt="" className="pointer-events-none size-full object-cover" src={imgJacket} />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[124px] bg-gradient-to-b from-transparent to-[rgba(33,44,54,0.7)]" />
            <div className="absolute left-[29px] top-[283px] z-10 flex gap-3">
              <Button
                type="button"
                kind="Secondary"
                variant="outline"
                round="md"
                showLeftIcon
                showRightIcon={false}
                iconLeft={<img alt="" className="size-[18px]" src={iconCart} />}
                buttonText=""
                className="size-9 min-w-9 rounded border-0 bg-white !p-0 shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]"
              />
              <Button
                type="button"
                kind="Secondary"
                variant="outline"
                round="md"
                showLeftIcon
                showRightIcon={false}
                iconLeft={<img alt="" className="size-[18px]" src={iconEye} />}
                buttonText=""
                className="size-9 min-w-9 rounded border-0 bg-white !p-0 shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]"
              />
              <Button
                type="button"
                kind="Secondary"
                variant="outline"
                round="md"
                showLeftIcon
                showRightIcon={false}
                iconLeft={<img alt="" className="size-[18px]" src={iconHeart} />}
                buttonText=""
                className="size-9 min-w-9 rounded border-0 bg-white !p-0 shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 bg-white p-[30px] lg:max-w-[470px]">
            <div className="flex flex-col gap-2.5">
              <p className="text-base font-medium leading-6 text-muted">Ladies Jacket</p>
              <h3 className="text-[28px] font-semibold leading-10 text-dark">Ladies denim jacket</h3>
            </div>
            <p className="text-lg font-semibold leading-[26px] text-dark">£49.00</p>
          </div>
        </article>

        {/* Row 2 col 1 — sunglasses discount */}
        <article className="flex flex-col overflow-hidden rounded-[7px] border border-stroke lg:max-w-[470px]">
          <div className="relative h-[350px] w-full overflow-hidden">
            <img alt="" className="pointer-events-none size-full object-cover" src={imgSunglasses} />
          </div>
          <div className="flex flex-col gap-2 bg-white p-[30px]">
            <div className="flex flex-col gap-2.5">
              <div className="flex w-full items-start justify-between gap-4 text-base font-medium leading-6">
                <span className="text-muted">Sunglasses</span>
                <span className="text-right text-primary">-50% Flat Discount</span>
              </div>
              <h3 className="text-[28px] font-semibold leading-10 text-dark">Stylish black sunglass</h3>
            </div>
            <div className="flex items-start gap-2 text-lg font-semibold leading-[26px]">
              <span className="text-muted line-through">£118.00</span>
              <span className="text-dark">£59.00</span>
            </div>
          </div>
        </article>

        {/* Row 2 col 2 — big plain */}
        <article className="flex flex-col overflow-hidden rounded-[7px] border border-stroke lg:max-w-[670px]">
          <div className="relative h-[350px] w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img alt="" className="absolute left-0 top-[-1.75%] h-[143.06%] w-full max-w-none" src={imgSando} />
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-white p-[30px]">
            <div className="flex flex-col gap-2.5">
              <p className="text-base font-medium leading-6 text-muted">T-shirt</p>
              <h3 className="text-[28px] font-semibold leading-10 text-dark">{`Men's regular fit sando t-shirt`}</h3>
            </div>
            <p className="text-lg font-semibold leading-[26px] text-dark">£24.00</p>
          </div>
        </article>
      </div>
    </section>
  )
}
