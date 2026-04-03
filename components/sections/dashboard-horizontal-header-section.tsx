/** Figma 310:21210 */
const imgFrame = 'https://www.figma.com/api/mcp/asset/b7f4216d-a331-48ab-ad25-949277a27fa3'
const imgTailGrids = 'https://www.figma.com/api/mcp/asset/be824322-723c-4fb4-ad1e-86250c4df04e'
const imgGrid = 'https://www.figma.com/api/mcp/asset/f55e9777-306f-4b26-8ab9-104dfd1abac1'
const imgBasket = 'https://www.figma.com/api/mcp/asset/9986ef2b-eb6b-4975-b058-b52de64e9305'
const imgPie = 'https://www.figma.com/api/mcp/asset/eacd3f81-1982-4a18-a609-f43f2673afd1'
const imgFile = 'https://www.figma.com/api/mcp/asset/704d6aeb-ea25-468b-97d4-85e98889836f'
const imgChat = 'https://www.figma.com/api/mcp/asset/8961fb75-41f0-4faf-81e0-2358c31fdd7c'
const imgAlarm = 'https://www.figma.com/api/mcp/asset/dd0b2146-8656-4bbf-a456-dde0667194f8'
const imgDot = 'https://www.figma.com/api/mcp/asset/7cc3d899-2c18-49c1-8a0f-84f4b7391df8'
const imgAvatar = 'https://www.figma.com/api/mcp/asset/d267320d-06b9-4b4e-a79e-55b20fdebfff'
const imgBadge = 'https://www.figma.com/api/mcp/asset/f616a981-9f62-4f4b-8734-a6758bb9e711'
const imgChev = 'https://www.figma.com/api/mcp/asset/9f8eb762-ed7f-4ddb-8265-180bb8233b3f'

const NAV = [
  { label: 'Dashboard', icon: imgGrid },
  { label: 'Order', icon: imgBasket },
  { label: 'Static', icon: imgPie },
  { label: 'Documents', icon: imgFile },
] as const

export function DashboardHorizontalHeaderSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[1160px] px-6">
        <header className="flex h-20 items-center justify-between border-b border-stroke bg-white px-4 lg:px-6">
          <div className="flex min-w-0 flex-1 items-center gap-8 lg:gap-14">
            <div className="flex h-[34px] items-center gap-3">
              <div className="relative grid size-10 shrink-0 place-items-center rounded-md bg-primary">
                <img alt="" className="size-[22px]" src={imgFrame} />
              </div>
              <img alt="TailGrids" className="h-[21px] w-[99px]" src={imgTailGrids} />
            </div>
            <nav className="hidden flex-wrap gap-8 md:flex">
              {NAV.map((n) => (
                <a key={n.label} href="#" className="flex items-center gap-2 text-base font-medium text-muted" onClick={(e) => e.preventDefault()}>
                  <img alt="" className="size-[18px]" src={n.icon} />
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative flex items-center gap-2">
              <span className="grid size-[30px] place-items-center rounded-md border-[0.5px] border-stroke bg-[#f3f4f6]">
                <img alt="" className="size-4" src={imgChat} />
              </span>
              <span className="relative grid size-[30px] place-items-center rounded-md border-[0.5px] border-stroke bg-white">
                <img alt="" className="size-4" src={imgAlarm} />
                <img alt="" className="absolute -right-1 -top-1 size-2" src={imgDot} />
              </span>
            </div>
            <div className="hidden text-right sm:block">
              <p className="text-base font-medium text-dark">Thomas Anree</p>
              <p className="text-sm text-muted">Ux Designer</p>
            </div>
            <div className="relative flex items-center gap-3">
              <div className="relative size-[42px] shrink-0 overflow-hidden rounded-full">
                <img alt="" className="size-full object-cover" src={imgAvatar} />
                <img alt="" className="absolute -right-0.5 -top-0.5 size-4" src={imgBadge} />
              </div>
              <img alt="" className="size-5" src={imgChev} />
            </div>
          </div>
        </header>
      </div>
    </section>
  )
}
