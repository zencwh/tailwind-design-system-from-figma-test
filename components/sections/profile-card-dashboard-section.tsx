import { Button } from '@/components/ui/button'

/** Figma 310:21928 */
const imgProfile = 'https://www.figma.com/api/mcp/asset/91453cab-6dae-4bf5-8e7f-7a024f5efe22'
const imgPencil = 'https://www.figma.com/api/mcp/asset/64eded86-ed16-41ad-aa64-702e91594dba'
export function ProfileCardDashboardSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[470px] px-6">
        <div className="relative overflow-hidden rounded-[10px] border border-stroke bg-white p-[22px]">
          <div className="flex items-center justify-between gap-4 border-b border-stroke pb-6">
            <div className="flex items-center gap-4">
              <img alt="" className="size-[50px] rounded-md object-cover" src={imgProfile} />
              <div>
                <p className="text-base font-medium text-dark">Devid Strassmann</p>
                <p className="text-sm text-muted">UI/UX Designer</p>
              </div>
            </div>
            <Button
              type="button"
              kind="Primary"
              variant="primary"
              round="md"
              showLeftIcon
              iconLeft={<img alt="" className="size-3.5" src={imgPencil} />}
              showRightIcon={false}
              buttonText="Edit"
              className="gap-1.5 rounded-md px-3 py-1.5 text-sm font-normal"
            />
          </div>
          <div className="pt-6">
            <p className="text-base font-medium text-dark">About Me</p>
            <p className="mt-2 text-sm leading-[22px] text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris
            </p>
            <div className="mt-5 flex items-start gap-5">
              <div className="text-center">
                <p className="text-base font-semibold text-dark">79</p>
                <p className="text-sm text-muted">Followes</p>
              </div>
              <div className="h-[25px] w-px shrink-0 bg-stroke" aria-hidden />
              <div className="text-center">
                <p className="text-base font-semibold text-dark">528</p>
                <p className="text-sm text-muted">Following</p>
              </div>
              <div className="h-[25px] w-px shrink-0 bg-stroke" aria-hidden />
              <div className="text-center">
                <p className="text-base font-semibold text-dark">38</p>
                <p className="text-sm text-muted">Lightning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
