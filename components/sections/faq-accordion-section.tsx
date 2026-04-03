import { useState } from 'react'

/** Figma 310:22214 */
const imgBg = 'https://www.figma.com/api/mcp/asset/19f1be80-d9dd-48fb-b122-1d2a0e04b786'
const imgChevronUp = 'https://www.figma.com/api/mcp/asset/59aef1de-996a-42a6-8d8f-2f7335eb7abc'
const imgChevronDown = 'https://www.figma.com/api/mcp/asset/87b3ce21-a4ea-47b5-9a05-5aee585a37ae'

const QUESTION = 'How long we deliver your first blog post?'
const ANSWER =
  'It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post,  Ipsum available .'

const ITEMS = [
  { id: 'a', column: 'left' as const },
  { id: 'b', column: 'right' as const },
  { id: 'c', column: 'right' as const },
  { id: 'd', column: 'right' as const },
  { id: 'e', column: 'left' as const },
]

function FaqItem({
  open,
  onToggle,
  id,
}: {
  open: boolean
  onToggle: () => void
  id: string
}) {
  return (
    <div
      className={[
        'rounded-[10px] border border-[#f3f4fe] bg-white shadow-[0px_20px_95px_0px_rgba(201,203,204,0.3)]',
        open ? 'p-6 sm:p-8' : 'px-6 py-6 sm:px-8 sm:py-7',
      ].join(' ')}
    >
      <div className="flex gap-4">
        <button
          type="button"
          id={`faq-${id}-trigger`}
          aria-expanded={open}
          aria-controls={`faq-${id}-panel`}
          onClick={onToggle}
          className="grid size-[42px] shrink-0 place-items-center rounded-[10px] bg-[rgba(48,86,211,0.06)] text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span className="size-[22px] overflow-hidden">
            <img alt="" src={open ? imgChevronUp : imgChevronDown} />
          </span>
        </button>
        <div className="min-w-0 flex-1">
          <p className="text-lg font-semibold leading-[26px] text-dark opacity-[0.88]">{QUESTION}</p>
          {open ? (
            <div id={`faq-${id}-panel`} role="region" aria-labelledby={`faq-${id}-trigger`} className="mt-6 text-base font-normal leading-6 text-muted">
              <p>{ANSWER}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export function FaqAccordionSection({ className = '' }: { className?: string }) {
  const [openId, setOpenId] = useState('a')

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id))
  }

  const leftItems = ITEMS.filter((i) => i.column === 'left')
  const rightItems = ITEMS.filter((i) => i.column === 'right')

  return (
    <section className={['relative overflow-hidden bg-white py-20', className].filter(Boolean).join(' ')}>
      <div className="pointer-events-none absolute left-1/2 top-[-20%] size-[120%] max-w-none -translate-x-1/2 opacity-90">
        <div className="flex h-full w-full items-center justify-center">
          <div className="rotate-45">
            <img alt="" className="max-h-none min-w-[120%] object-cover opacity-40" src={imgBg} />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="mb-14 flex flex-col items-center gap-3 text-center">
          <p className="text-lg font-semibold leading-[26px] text-primary">FAQ</p>
          <h2 className="text-4xl font-bold leading-[48px] text-dark">Any Questions? Look Here</h2>
          <div className="max-w-2xl text-base font-normal leading-6 text-muted">
            <p className="mb-0">There are many variations of passages of Lorem Ipsum available</p>
            <p>but the majority have suffered alteration in some form.</p>
          </div>
        </div>

        <div className="flex flex-col gap-9 lg:flex-row lg:items-start lg:gap-10">
          <div className="flex flex-1 flex-col gap-9">
            {leftItems.map((item) => (
              <FaqItem key={item.id} id={item.id} open={openId === item.id} onToggle={() => toggle(item.id)} />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-9">
            {rightItems.map((item) => (
              <FaqItem key={item.id} id={item.id} open={openId === item.id} onToggle={() => toggle(item.id)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
