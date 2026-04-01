import type { ReactNode } from 'react'

/**
 * Layout Grid — design spec (Figma node 310:3603).
 * Documents desktop (1360px / 1170px) and responsive (290px) column grids.
 */

const COLUMN = 'bg-[#dee2e6]'

function SectionSubtitle({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-1 pt-6 text-left">
      <h2 className="text-[24px] font-semibold leading-[30px] text-dark">{title}</h2>
      <p className="text-[18px] font-normal leading-[26px] text-muted">{description}</p>
    </div>
  )
}

function GridRow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={['overflow-x-auto pb-1', className].filter(Boolean).join(' ')}>
      <div className="inline-flex min-w-min">{children}</div>
    </div>
  )
}

export interface LayoutGridSectionProps {
  className?: string
}

export function LayoutGridSection({ className = '' }: LayoutGridSectionProps) {
  return (
    <section
      className={['bg-[#f8f9fb] py-12 sm:py-16', className].join(' ')}
      aria-labelledby="layout-grid-heading"
    >
      <div className="mx-auto w-full max-w-[1372px] px-4 sm:px-6">
        <article className="rounded-[25px] bg-white px-6 py-8 shadow-layout-spec sm:px-12 lg:px-[131px] lg:pb-[30px] lg:pt-[30px]">
          <div className="flex flex-col gap-11">
            <header className="flex flex-col gap-5 pt-[30px]">
              <h1 id="layout-grid-heading" className="max-w-[1110px] text-[40px] font-bold leading-[48px] text-dark">
                Layout Grid
              </h1>
              <div className="h-px max-w-[1110px] bg-stroke" aria-hidden />
            </header>

            <div className="flex flex-col gap-11">
              <div className="flex flex-col gap-[22px]">
                <SectionSubtitle
                  title="Desktop full width"
                  description="12 columns — center with 86px wide columns and 30px gutter. This results in a 1360px wide layout."
                />
                <GridRow>
                  <div className="flex gap-[30px]">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-[532px] w-[86px] shrink-0 ${COLUMN}`}
                        aria-hidden
                      />
                    ))}
                  </div>
                </GridRow>
              </div>

              <div className="flex flex-col gap-[22px]">
                <SectionSubtitle
                  title="Desktop full width"
                  description="12 columns — center with 70px wide columns and 30px gutter. This results in a 1170px wide layout."
                />
                <GridRow>
                  <div className="flex gap-[30px]">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-[300px] w-[70px] shrink-0 ${COLUMN}`}
                        aria-hidden
                      />
                    ))}
                  </div>
                </GridRow>
              </div>

              <div className="flex flex-col gap-7">
                <SectionSubtitle
                  title="Responsive"
                  description="6 columns — center with 40px wide columns and 10px gutter. This results in a 290px wide layout."
                />
                <div className="w-[290px] max-w-full">
                  <div className="flex gap-[10px]">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-[300px] w-[40px] shrink-0 ${COLUMN}`}
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
