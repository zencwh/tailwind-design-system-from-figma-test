/** Figma 310:21901 */
const imgLine = 'https://www.figma.com/api/mcp/asset/0fc5d475-84c2-49f8-8e51-93376ad31ab4'
const imgCaret = 'https://www.figma.com/api/mcp/asset/1bce608c-0f57-4ea4-bf04-e9785950c2cf'

export function PopoverCardSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[360px] px-6">
        <div className="relative rounded bg-white px-5 pb-5 pt-3 shadow-[0px_5px_12px_0px_rgba(0,0,0,0.1)]">
          <div className="absolute left-1/2 top-[-10px] h-[10px] w-[18px] -translate-x-1/2">
            <img alt="" className="size-full" src={imgCaret} />
          </div>
          <p className="text-center text-lg font-semibold leading-[26px] text-dark">Popover Title</p>
          <div className="relative my-3 h-px w-full">
            <img alt="" className="h-full w-full" src={imgLine} />
          </div>
          <div className="text-center text-sm leading-[22px] text-muted">
            <p className="mb-0">Lorem ipsum dolor sit amet, consect</p>
            <p>adipiscing elit. Mauris facilisis congue exclamate justo nec facilisis.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
