import { Button } from '@/components/ui/button'

/** Figma 310:21311 */
const imgMore = 'https://www.figma.com/api/mcp/asset/458f6273-d7c2-4564-97aa-006656331315'

const USERS = [
  { name: 'Devid Wilium', role: 'Digital marketer', avatar: 'https://www.figma.com/api/mcp/asset/814abf8c-d300-4a84-98e1-d28743bc2f63', active: true },
  { name: 'Deniyal Shifer', role: 'Graphics designer', avatar: 'https://www.figma.com/api/mcp/asset/f554e566-8aab-451d-a12d-64bf0c17407f', active: false },
  { name: 'Philifs Geno', role: 'Content creator', avatar: 'https://www.figma.com/api/mcp/asset/f27058f6-3876-470e-8f1e-9ad6c6186ab5', active: false },
  { name: 'Marko Diyan', role: 'Web developer', avatar: 'https://www.figma.com/api/mcp/asset/c87cb896-5840-4828-959f-dc81f65c1ad7', active: false },
] as const

export function UserListStackSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[400px] px-6">
        <div className="overflow-hidden rounded border border-stroke bg-white py-2.5 shadow-sm">
          {USERS.map((u) => (
            <div
              key={u.name}
              className={['flex items-center justify-between px-[18px] py-[18px]', u.active ? 'bg-[#f9fafb]' : 'bg-white'].join(' ')}
            >
              <div className="flex items-center gap-4">
                <img alt="" className="size-[50px] rounded-full object-cover" height={50} src={u.avatar} width={50} />
                <div>
                  <p className="text-base font-medium leading-6 text-dark">{u.name}</p>
                  <p className="text-sm leading-[22px] text-muted">{u.role}</p>
                </div>
              </div>
              <Button
                type="button"
                kind="Tertiary"
                variant="outline"
                round="md"
                showLeftIcon={false}
                showRightIcon={false}
                aria-label="More options"
                className="size-5 min-w-0 border-0 !p-0 shadow-none"
              >
                <img alt="" className="size-5" src={imgMore} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
