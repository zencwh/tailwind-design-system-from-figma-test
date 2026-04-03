/** Figma 310:20913 */
const imgSpark1 = 'https://www.figma.com/api/mcp/asset/f07692ce-286e-443e-88f8-c28435191def'
const imgSpark2 = 'https://www.figma.com/api/mcp/asset/ec36b720-8304-4691-bd91-53c0a40bf590'
const imgSpark3 = 'https://www.figma.com/api/mcp/asset/49eac8a7-5ba3-49a9-bbc2-a157ccd654e3'
const imgSpark4 = 'https://www.figma.com/api/mcp/asset/659b16b6-ae81-4cbe-b3ce-a1e37c950f37'
const iconBox = 'https://www.figma.com/api/mcp/asset/1e11a32d-d8c3-4625-9bf8-1175b768b295'
const iconUsers = 'https://www.figma.com/api/mcp/asset/5cdbb99a-cac3-4f69-83ff-8f7b297c4c4c'
const iconMouse = 'https://www.figma.com/api/mcp/asset/b8bd2ca7-1c55-4b04-a959-92fa1463747b'
const iconCart = 'https://www.figma.com/api/mcp/asset/3dfb1861-d7e9-4eed-b471-118bf1168a3f'
const arrowUp = 'https://www.figma.com/api/mcp/asset/764f06b9-73de-4eb5-8e9b-588d0f746f7f'
const arrowDown = 'https://www.figma.com/api/mcp/asset/346a90f7-6b9a-4885-ad4f-7e886af7201d'

const CARDS = [
  {
    title: 'New Orders',
    sub: 'This week',
    value: '1,368',
    trend: '0.43%',
    up: true,
    tint: 'bg-[#13c296]/10',
    icon: iconBox,
    spark: imgSpark1,
  },
  {
    title: 'New Customers',
    sub: 'This week',
    value: '785',
    trend: '0.39%',
    up: true,
    tint: 'bg-primary/10',
    icon: iconUsers,
    spark: imgSpark2,
  },
  {
    title: 'Online Orders',
    sub: 'This week',
    value: '795',
    trend: '1.39%',
    up: false,
    tint: 'bg-[#f2994a]/10',
    icon: iconMouse,
    spark: imgSpark3,
  },
  {
    title: 'Offline Orders',
    sub: 'This week',
    value: '573',
    trend: '2.69%',
    up: true,
    tint: 'bg-[#9b51e0]/10',
    icon: iconCart,
    spark: imgSpark4,
  },
] as const

export function DashboardStatsCardsSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-[30px] px-6">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className="flex w-full max-w-[270px] flex-col gap-6 rounded-[5px] bg-white p-5 shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3.5">
                <div className={`relative grid size-[50px] place-items-center rounded ${c.tint}`}>
                  <img alt="" className="size-[26px]" src={c.icon} />
                </div>
                <div>
                  <p className="text-base font-medium leading-6 text-dark">{c.title}</p>
                  <p className="text-sm leading-[22px] text-muted">{c.sub}</p>
                </div>
              </div>
              <div className="flex items-end gap-1.5">
                <p className="text-2xl font-bold leading-[30px] text-dark">{c.value}</p>
                <span className={`flex items-center gap-1 text-sm font-medium ${c.up ? 'text-[#22ad5c]' : 'text-[#dc3545]'}`}>
                  {c.trend}
                  <img alt="" className={`size-2.5 ${c.up ? 'rotate-180' : ''}`} src={c.up ? arrowUp : arrowDown} />
                </span>
              </div>
            </div>
            <div className="relative h-0 w-full pt-[1px]">
              <img alt="" className="absolute left-0 top-0 w-[230px] max-w-full" src={c.spark} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
