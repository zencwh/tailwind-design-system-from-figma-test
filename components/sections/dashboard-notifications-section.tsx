import { Button } from '@/components/ui/button'

/** Figma 310:21798 */
const imgAv = 'https://www.figma.com/api/mcp/asset/7d449d32-fa15-4db4-a07a-720d35fbd375'
const imgSuccess = 'https://www.figma.com/api/mcp/asset/1273a36c-9d4a-4739-a1bb-f9431a14569c'
const imgCloseSm = 'https://www.figma.com/api/mcp/asset/54a07762-bf57-430a-a57d-697a4d06ab0e'
const imgCloseLg = 'https://www.figma.com/api/mcp/asset/60bc8517-e812-43b1-b643-b0d6d9eea49f'

export function DashboardNotificationsSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[480px] flex-col gap-6 px-6">
        <div className="relative flex items-end justify-between gap-4 rounded-lg border border-stroke bg-white px-5 py-4 shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]">
          <div className="flex items-center gap-[18px]">
            <img alt="" className="size-[54px] rounded-full" height={54} src={imgAv} width={54} />
            <div>
              <p className="text-base font-medium text-dark">Nelly Miller</p>
              <p className="text-sm text-muted">Purchased polo t-shirt for man</p>
            </div>
          </div>
          <p className="shrink-0 text-xs text-muted">2 min ago</p>
          <Button
            type="button"
            kind="Tertiary"
            variant="outline"
            round="md"
            showLeftIcon={false}
            showRightIcon={false}
            aria-label="Dismiss"
            className="absolute right-3 top-3 size-3.5 min-w-0 border-0 !p-0 shadow-none"
          >
            <img alt="" className="size-3.5" src={imgCloseSm} />
          </Button>
        </div>

        <div className="relative flex items-center gap-5 rounded-lg bg-white px-[30px] py-[18px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.12)]">
          <img alt="" className="size-10 shrink-0" src={imgSuccess} />
          <div>
            <p className="text-lg font-semibold text-dark">Congratulations</p>
            <p className="text-sm text-muted">your message sent successfully</p>
          </div>
          <Button
            type="button"
            kind="Tertiary"
            variant="outline"
            round="md"
            showLeftIcon={false}
            showRightIcon={false}
            aria-label="Dismiss"
            className="absolute right-5 top-1/2 size-[18px] min-w-0 -translate-y-1/2 border-0 !p-0 shadow-none"
          >
            <img alt="" className="size-[18px]" src={imgCloseLg} />
          </Button>
        </div>
      </div>
    </section>
  )
}
