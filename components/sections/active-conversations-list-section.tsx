import { Input } from '@/components/ui/input'

/** Figma 310:20751 */
const imgSearch = 'https://www.figma.com/api/mcp/asset/e61ae9ca-0e60-4885-a9ee-9ec1251f8a98'
const imgLine = 'https://www.figma.com/api/mcp/asset/29420486-55ba-4429-8f86-6fa7b09675d6'
const imgOnline = 'https://www.figma.com/api/mcp/asset/310acb57-1013-431e-92c0-2e373ba8ddde'
const imgBusy = 'https://www.figma.com/api/mcp/asset/59afc637-5ec4-4ae3-9a21-638e740a3bbe'

const CONVERSATIONS = [
  { name: 'Devid Heilo', snippet: 'I cam across your profile and...', avatar: 'https://www.figma.com/api/mcp/asset/bb34cf14-f849-4253-8f4b-94ac8a1d720c', online: true, active: false },
  { name: 'Henry Fisher', snippet: 'I like your confidence 💪', avatar: 'https://www.figma.com/api/mcp/asset/db893100-8cac-4035-be93-eb9c9c65793d', online: true, active: true },
  { name: 'Wilium Smith', snippet: 'Can you share your offer?', avatar: 'https://www.figma.com/api/mcp/asset/6e70b701-a023-4967-b0e2-1a52c7e1a9fd', online: true, active: false },
  { name: 'Henry Deco', snippet: "I'm waiting for you response!", avatar: 'https://www.figma.com/api/mcp/asset/bcd9d1ba-9024-4a87-82b0-1c07552c5b08', online: false, active: false },
  { name: 'Jubin Jack', snippet: "I'm waiting for you response!", avatar: 'https://www.figma.com/api/mcp/asset/df3eb1a8-1759-424c-9924-039f47629cdf', online: true, active: false },
] as const

export function ActiveConversationsListSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[360px] px-6">
        <div className="rounded-lg bg-white p-5 shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-medium leading-[26px] text-dark">Active Conversations</h2>
            <span className="rounded-md border-[0.5px] border-stroke bg-[#f3f4f6] px-2.5 py-0.5 text-base font-medium text-dark">
              4
            </span>
          </div>
          <div className="relative my-5 h-px w-full">
            <img alt="" className="h-full w-full" src={imgLine} />
          </div>
          <div className="relative mb-6">
            <Input
              placeholder="Search..."
              showLabel={false}
              showHelperText={false}
              rightIcon={false}
              fullWidth
              className="[&_input]:pr-10"
            />
            <img alt="" className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2" src={imgSearch} />
          </div>
          <ul className="flex flex-col gap-2.5">
            {CONVERSATIONS.map((c) => (
              <li
                key={c.name}
                className={[
                  'flex items-center gap-3.5 rounded-md px-[15px] py-2.5',
                  c.active ? 'bg-[#f9fafb]' : 'bg-white',
                ].join(' ')}
              >
                <div className="relative shrink-0">
                  <img alt="" className="size-11 rounded-full object-cover" height={44} src={c.avatar} width={44} />
                  <span className="absolute -bottom-0.5 -right-0.5 size-3">
                    <img alt="" className="size-full" src={c.online ? imgOnline : imgBusy} />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-[22px] text-dark">{c.name}</p>
                  <p
                    className={[
                      'truncate text-xs leading-5',
                      c.name === 'Henry Deco' ? 'text-muted' : 'text-dark',
                    ].join(' ')}
                  >
                    {c.snippet}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
