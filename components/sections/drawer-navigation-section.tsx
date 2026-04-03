import { Button } from '@/components/ui/button'

/** Figma 310:21024 */
const imgFrame = 'https://www.figma.com/api/mcp/asset/6df61034-fc9a-4e05-b648-85ab0364189c'
const imgTailGrids = 'https://www.figma.com/api/mcp/asset/c538c353-52b6-4c93-8e31-9d7c2b94fa17'
const imgFb = 'https://www.figma.com/api/mcp/asset/acd42b5a-607e-4f25-bdee-fdd4e173adb3'
const imgTw = 'https://www.figma.com/api/mcp/asset/e8456f9c-b959-4c39-b48d-cd704396e9e9'
const imgIn = 'https://www.figma.com/api/mcp/asset/03d68935-e9c3-4d65-ae2a-b6d28cc93fe5'
const imgDr = 'https://www.figma.com/api/mcp/asset/19037b4d-bc3a-4c45-b1a4-e0733fcefa57'
const imgGh = 'https://www.figma.com/api/mcp/asset/1cc7666f-683f-4413-a88c-5366d45cc9f9'
const imgClose = 'https://www.figma.com/api/mcp/asset/2ccbff06-0b3f-4587-bded-46ec1aa395ee'

const LINKS = [
  { label: 'Home', active: false },
  { label: 'About Company', active: true },
  { label: 'Recent Works', active: false },
  { label: 'Overview', active: false },
  { label: 'Need Support?', active: false },
] as const

export function DrawerNavigationSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[360px] px-6">
        <div className="relative flex min-h-[668px] flex-col justify-between bg-white p-[35px] shadow-sm">
          <Button
            type="button"
            kind="Tertiary"
            variant="outline"
            round="md"
            showLeftIcon={false}
            showRightIcon={false}
            aria-label="Close menu"
            className="absolute right-[22px] top-[22px] size-[18px] min-w-0 border-0 !p-0 shadow-none"
          >
            <img alt="" className="size-[18px]" src={imgClose} />
          </Button>

          <div className="flex flex-col gap-9 pr-6">
            <div className="flex items-start gap-3">
              <div className="relative grid size-10 place-items-center rounded-md bg-primary">
                <img alt="" className="size-[22px]" src={imgFrame} />
              </div>
              <img alt="TailGrids" className="mt-2 h-[21px] w-[99px]" src={imgTailGrids} />
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <p className="text-lg font-semibold leading-[26px] text-dark">Quick Links</p>
                <nav className="mt-5 flex flex-col gap-2 text-sm font-medium leading-[22px]">
                  {LINKS.map((l) => (
                    <a
                      key={l.label}
                      href="#"
                      className={l.active ? 'text-primary' : 'text-muted'}
                      onClick={(e) => e.preventDefault()}
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="h-px w-[280px] bg-stroke" aria-hidden />
              <div>
                <p className="text-lg font-semibold leading-[26px] text-dark">Company Details</p>
                <p className="mt-5 max-w-[280px] text-sm leading-[22px] text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec neque dolor. Duis auctor justo sit amet
                  pulvinar.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-lg font-semibold leading-[26px] text-dark">Follow Us</p>
            <div className="flex gap-4">
              {[imgFb, imgTw, imgIn, imgDr, imgGh].map((src, i) => (
                <img key={i} alt="" className="size-5" src={src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
