import { Dropdown } from '@/components/ui/dropdown'

/** Figma 310:20481 — revenue line + activity bar charts */
const imgChartBg = 'https://www.figma.com/api/mcp/asset/a7e0abd2-703d-4b13-84d3-4de8823e2d22'
const imgLineBlue = 'https://www.figma.com/api/mcp/asset/9e59f04a-6d27-4c48-8ca4-fe47adeb0c11'
const imgLineTeal = 'https://www.figma.com/api/mcp/asset/3cc8a077-ff2a-4e99-b15a-444d49eb448b'
const imgActive = 'https://www.figma.com/api/mcp/asset/d4e1c298-0ddf-432f-a908-a1f5b69bd47d'
const imgPoly = 'https://www.figma.com/api/mcp/asset/1fd489bd-fd5f-4fc9-97ca-bafbf8d8febb'
const imgLegendM = 'https://www.figma.com/api/mcp/asset/10344332-1494-4e42-9b43-033ee97256e9'
const imgLegendP = 'https://www.figma.com/api/mcp/asset/3ad9690b-ab5b-4e5d-85c7-0a4227806362'
const imgLegendD = 'https://www.figma.com/api/mcp/asset/daef288d-0e48-41b3-b02f-9f590f5e125b'

const MONTHS = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun', 'Jul', 'Aug'] as const

const BAR_GROUPS: { month: string; bars: [number, number, number] }[] = [
  { month: 'Jan', bars: [154, 185, 104] },
  { month: 'Feb', bars: [65, 120, 150] },
  { month: 'Mar', bars: [116, 77, 104] },
  { month: 'Apr', bars: [82, 33, 120] },
  { month: 'May', bars: [104, 144, 65] },
  { month: 'Jun', bars: [120, 185, 104] },
  { month: 'Jul', bars: [58, 84, 33] },
]

export function DashboardChartsSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6">
        <div className="relative overflow-hidden rounded-lg border border-stroke bg-white shadow-sm">
          <div className="relative min-h-[320px] w-full max-w-[757px] p-4 sm:p-6">
            <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
              <p className="text-[28px] font-bold leading-[35px] text-dark">$35,8K</p>
              <p className="mt-1 text-base leading-6 text-muted">Overal Revenue</p>
            </div>
            <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
              <Dropdown showLabel={false} placeholder="Monthly" className="w-[130px]" items={['Monthly', 'Weekly', 'Yearly']} />
            </div>
            <div className="absolute inset-x-4 bottom-10 top-24 sm:inset-x-6 sm:bottom-12 sm:top-28">
              <div className="relative h-full w-full">
                <img alt="" className="pointer-events-none absolute inset-0 h-full w-full object-contain" src={imgChartBg} />
                <div className="absolute inset-[8%_6%_18%_6%]">
                  <img alt="" className="absolute inset-0 h-full w-full object-contain" src={imgLineBlue} />
                </div>
                <div className="absolute inset-[12%_6%_22%_6%]">
                  <img alt="" className="absolute inset-0 h-full w-full object-contain" src={imgLineTeal} />
                </div>
                <div className="absolute left-[28%] top-[38%] w-8">
                  <img alt="" className="w-full" src={imgActive} />
                </div>
                <div className="absolute left-[52%] top-[20%] flex items-center gap-3 rounded bg-white px-3.5 py-1.5 shadow-[0px_5px_12px_0px_rgba(0,0,0,0.1)]">
                  <span className="text-base text-muted">Oct 25</span>
                  <span className="block h-8 w-px bg-stroke" />
                  <span className="text-base font-medium text-dark">$3,780</span>
                  <div className="absolute -bottom-1.5 left-1/2 h-2 w-4 -translate-x-1/2">
                    <img alt="" className="size-full rotate-180" src={imgPoly} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 left-4 right-4 flex justify-between text-center text-sm leading-[22px] text-muted sm:left-6 sm:right-6">
              {MONTHS.map((m) => (
                <span key={m} className="min-w-0 flex-1 capitalize">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-stroke bg-white shadow-sm">
          <div className="p-6">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold leading-[26px] text-dark">Activity Chart</h3>
                <div className="mt-4 flex flex-wrap gap-5">
                  <span className="inline-flex items-center gap-2.5 text-sm font-medium text-dark">
                    <img alt="" className="size-3.5" src={imgLegendM} /> Media
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-sm font-medium text-dark">
                    <img alt="" className="size-3.5" src={imgLegendP} /> Photos
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-sm font-medium text-dark">
                    <img alt="" className="size-3.5" src={imgLegendD} /> Docs
                  </span>
                </div>
              </div>
              <Dropdown showLabel={false} placeholder="Monthly" className="w-[130px]" items={['Monthly', 'Weekly']} />
            </div>

            <div className="flex gap-3">
              <div className="flex shrink-0 flex-col justify-between pb-8 pt-1 text-right text-sm text-muted">
                {['2GB', '1GB', '500MB', '100MB', '0'].map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </div>
              <div className="min-w-0 flex-1">
                <div className="relative mb-2 h-[200px] border-b border-stroke/80">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="pointer-events-none absolute left-0 right-0 border-t border-stroke/60"
                      style={{ bottom: `${i * 25}%` }}
                    />
                  ))}
                  <div className="absolute bottom-2 left-[18%] rounded-md bg-white px-3 py-2 text-center shadow-md">
                    <p className="text-base font-medium text-dark">Photos</p>
                    <p className="text-sm text-muted">2.1 GB</p>
                  </div>
                </div>
                <div className="flex justify-between gap-1">
                  {BAR_GROUPS.map((g) => (
                    <div key={g.month} className="flex min-w-0 flex-1 flex-col items-center gap-1.5">
                      <div className="flex h-[185px] items-end justify-center gap-1.5">
                        <div className="w-2.5 rounded-sm bg-primary" style={{ height: g.bars[0] }} />
                        <div className="w-2.5 rounded-sm bg-[#13c296]" style={{ height: g.bars[1] }} />
                        <div className="w-2.5 rounded-sm bg-[#f2994a]" style={{ height: g.bars[2] }} />
                      </div>
                      <span className="text-sm text-muted">{g.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
