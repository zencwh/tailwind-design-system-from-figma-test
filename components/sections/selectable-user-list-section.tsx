import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'

/** Figma 310:22054 */
const imgAvatar1 = 'https://www.figma.com/api/mcp/asset/c13c7aaa-b2b6-4807-a16a-edd2985f57c1'
const imgAvatar2 = 'https://www.figma.com/api/mcp/asset/d8b9e8e3-0c10-46e7-ab44-c29ebad82c97'
const imgAvatar3 = 'https://www.figma.com/api/mcp/asset/ce2db238-7548-4870-a171-10f688bb4b40'
const imgAvatar4 = 'https://www.figma.com/api/mcp/asset/7dec5244-55d4-48cd-919c-85a851772cba'

const ROWS = [
  { id: 'henry', name: 'Henry Dholi', role: 'Web Developer', avatar: imgAvatar1 },
  { id: 'mariya', name: 'Mariya Desoja', role: 'Graphics Designer', avatar: imgAvatar2 },
  { id: 'robert', name: 'Robert Jhon', role: 'Ui/Ux Designer', avatar: imgAvatar3 },
  { id: 'cody', name: 'Cody Fisher', role: 'Content Writer', avatar: imgAvatar4 },
] as const

export function SelectableUserListSection({ className = '' }: { className?: string }) {
  const [selected, setSelected] = useState<string | null>('mariya')

  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[360px] px-6">
        <div className="flex flex-col gap-2.5 rounded-[6px] bg-white p-[15px] shadow-card">
          {ROWS.map((row) => {
            const isSelected = selected === row.id
            return (
              <div
                key={row.id}
                className={[
                  'flex w-full max-w-[294px] items-center gap-5 rounded-[5px] px-[15px] py-2.5',
                  isSelected ? 'bg-[#f9fafb]' : 'bg-white',
                ].join(' ')}
              >
                <Checkbox
                  checked={isSelected}
                  figmaStyle="2"
                  showLabel={false}
                  onChange={(e) => {
                    if (e.target.checked) setSelected(row.id)
                    else setSelected(null)
                  }}
                  aria-label={`Select ${row.name}`}
                  className="shrink-0"
                />
                <img alt="" className="size-11 shrink-0 rounded-full object-cover" src={row.avatar} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium leading-[22px] text-dark">{row.name}</p>
                  <p className="truncate text-xs font-normal leading-5 text-muted">{row.role}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
