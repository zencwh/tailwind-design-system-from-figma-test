import { Button } from '@/components/ui/button'

/** Figma 310:21862 */
const imgHey = 'https://www.figma.com/api/mcp/asset/e4b94cc3-53bd-4a0a-84f0-c231490422fb'
const imgPlus = 'https://www.figma.com/api/mcp/asset/f9879565-80a3-4091-8d43-5d2869ceb0ac'

export function PageTitleVariantsSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-white py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[1170px] flex-col gap-[83px] px-6">
        <div className="border-b border-stroke pb-[22px]">
          <h2 className="text-2xl font-semibold leading-[30px] text-dark">States Statistics</h2>
          <p className="mt-2 max-w-[549px] text-sm leading-[22px] text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices lectus sem.
          </p>
        </div>

        <div className="border-l-[6px] border-primary px-6 py-1">
          <h2 className="text-2xl font-semibold leading-[30px] text-dark">All Products</h2>
          <p className="mt-2 max-w-[549px] text-sm leading-[22px] text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices lectus sem.
          </p>
        </div>

        <div className="flex flex-col gap-6 border-b border-stroke pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold leading-[30px] text-dark">Your Favourite Items</h2>
            <p className="mt-2 text-sm leading-[22px] text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ante ipsum primis in faucibus.
            </p>
          </div>
          <Button
            type="button"
            kind="Primary"
            variant="primary"
            round="md"
            showLeftIcon={false}
            showRightIcon
            rightIcon={<img alt="" className="size-5" src={imgPlus} />}
            buttonText="Add New Item"
            className="gap-2.5 rounded-md px-6 py-3"
          />
        </div>

        <div className="flex flex-col gap-4 border-b border-stroke pb-6 sm:flex-row sm:items-center sm:gap-[18px]">
          <div className="relative size-11 shrink-0 overflow-hidden rounded-xl">
            <img alt="" className="absolute inset-0 size-full object-cover" src={imgHey} />
          </div>
          <div>
            <p className="text-sm font-semibold leading-5 text-dark">Hey Devid Wisedom 👋</p>
            <p className="mt-0.5 text-sm leading-[22px] text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit ante.</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold leading-[30px] text-dark">States Statistics</h2>
          <p className="mt-2 max-w-[549px] text-sm leading-[22px] text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices lectus sem.
          </p>
        </div>
      </div>
    </section>
  )
}
