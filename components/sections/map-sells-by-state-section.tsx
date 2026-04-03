import { Button } from '@/components/ui/button'

/** Figma 310:21385 */
const imgMap = 'https://www.figma.com/api/mcp/asset/e8a70516-0e94-48c5-a79a-d52103b2515c'
const imgPin = 'https://www.figma.com/api/mcp/asset/ec37bcb8-7138-47e2-8648-32321d28ec1a'
const imgTooltip = 'https://www.figma.com/api/mcp/asset/831be286-5006-4b0d-9321-ddc2bee63c78'
const imgPlus = 'https://www.figma.com/api/mcp/asset/4721b07e-98aa-4d0f-9983-dedecfae011f'
const imgMinus = 'https://www.figma.com/api/mcp/asset/9d5b0c81-e4e0-42d8-b774-106bb7469ca7'

const PIN_POS = [
  'left-[21%] top-[43%]',
  'left-[15%] top-[30%]',
  'left-[26%] top-[32%]',
  'left-[42%] top-[27%]',
  'left-[34%] top-[63%]',
  'left-[83%] top-[58%]',
] as const

export function MapSellsByStateSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[431px] px-6">
        <div className="relative overflow-hidden rounded-lg border border-stroke bg-white">
          <div className="p-6 pb-4">
            <h3 className="text-lg font-semibold leading-[26px] text-dark">Sells by State</h3>
            <div className="relative mt-4 aspect-[4/3] w-full">
              <img alt="" className="absolute inset-0 size-full object-contain" src={imgMap} />
              {PIN_POS.map((pos, i) => (
                <img key={i} alt="" className={`absolute size-6 ${pos}`} src={imgPin} />
              ))}
              <div className="absolute left-1/2 top-[45%] w-[120px] -translate-x-1/2 text-center">
                <div className="relative mx-auto w-full">
                  <img alt="" className="w-full" src={imgTooltip} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-2 pt-1">
                    <p className="text-base font-semibold text-dark">580</p>
                    <p className="text-sm text-muted">Europe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-stroke px-6 py-4">
            <p className="text-sm text-muted">
              Last updated: <span className="text-dark">7 days</span> ago
            </p>
            <div className="flex gap-2">
              <Button
                type="button"
                kind="Primary"
                variant="primary"
                round="md"
                showLeftIcon={false}
                showRightIcon={false}
                className="size-9 min-w-9 rounded border-0 !p-0"
              >
                <img alt="" className="mx-auto size-4" src={imgPlus} />
              </Button>
              <Button
                type="button"
                kind="Secondary"
                variant="outline"
                round="md"
                showLeftIcon={false}
                showRightIcon={false}
                className="size-9 min-w-9 rounded border-[0.5px] !border-stroke !bg-[#f4f7ff] !p-0"
              >
                <img alt="" className="mx-auto size-4" src={imgMinus} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
