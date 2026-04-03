/** Figma 310:21991 — horizontal stepper */
const imgLineBg = 'https://www.figma.com/api/mcp/asset/effa1bd7-285f-4590-92fe-1bd6bff6ae4e'
const imgLineActive = 'https://www.figma.com/api/mcp/asset/bd663241-ccf8-4f99-8217-73de8d1f53ca'
const imgCircleDone = 'https://www.figma.com/api/mcp/asset/7f622b0c-3385-4c83-9288-5bb986a51199'
const imgCircleCurrent = 'https://www.figma.com/api/mcp/asset/ce723edb-7e3c-4953-a780-a96716a00b9d'
const imgCircleUpcoming = 'https://www.figma.com/api/mcp/asset/125d3b09-321a-4902-b11c-0c69d85873b8'

const STEPS = [
  { n: 1, label: 'Step 1', circle: imgCircleDone, numberClass: 'text-white' },
  { n: 2, label: 'Step 2', circle: imgCircleCurrent, numberClass: 'text-primary' },
  { n: 3, label: 'Step 3', circle: imgCircleUpcoming, numberClass: 'text-dark' },
  { n: 4, label: 'Step 4', circle: imgCircleUpcoming, numberClass: 'text-dark' },
  { n: 5, label: 'Step 5', circle: imgCircleUpcoming, numberClass: 'text-dark' },
] as const

export function HorizontalStepsSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-white py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto w-full max-w-[960px] px-6">
        <nav aria-label="Progress steps" className="relative min-h-[90px] overflow-x-auto pb-2">
          <div className="relative min-w-[700px] px-4 sm:min-w-0 sm:px-6">
            <div className="pointer-events-none absolute left-4 right-4 top-[27px] sm:left-6 sm:right-6">
              <img alt="" className="h-[2px] w-full min-w-[624px] object-fill" src={imgLineBg} />
            </div>
            <div className="pointer-events-none absolute left-4 top-[27px] w-[133px] sm:left-6">
              <img alt="" className="h-[2px] w-full" src={imgLineActive} />
            </div>

            <ol className="relative m-0 flex list-none items-start justify-between gap-8 p-0 sm:gap-[106px]">
              {STEPS.map((s, i) => (
                <li
                  key={s.n}
                  className="flex min-w-0 flex-1 flex-col items-center gap-2.5"
                  aria-current={i === 1 ? 'step' : undefined}
                >
                  <div className="relative grid size-[50px] shrink-0 place-items-center">
                    <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none" src={s.circle} />
                    <span className={['relative z-10 text-xl font-medium leading-[26px]', s.numberClass].join(' ')}>
                      {s.n}
                    </span>
                  </div>
                  <p className="whitespace-nowrap text-center text-base font-medium leading-6 text-dark">{s.label}</p>
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </div>
    </section>
  )
}
