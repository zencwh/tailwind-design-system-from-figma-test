import { Card, type CardProps } from '../ui/card'

const imgRectangle4592 = 'https://www.figma.com/api/mcp/asset/e4ca69ca-2506-44e2-a35b-c0fa03bc0b22'
const imgRectangle4593 = 'https://www.figma.com/api/mcp/asset/23b29026-fbc3-4bca-9062-35315a68b92d'
const imgRectangle4594 = 'https://www.figma.com/api/mcp/asset/5d441c9d-f4fb-446d-9894-e845410fb0a1'

const defaultItems: CardProps[] = [
  {
    media: { src: imgRectangle4592 },
    title: '50+ Best creative website themes & templates',
    description:
      'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    ctaLabel: 'View Details',
    ctaVariant: 'outline',
  },
  {
    media: { src: imgRectangle4593 },
    title: 'The ultimate UX and UI guide to card design',
    description:
      'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    ctaLabel: 'View Details',
    ctaVariant: 'primary',
  },
  {
    media: { src: imgRectangle4594 },
    title: 'Creative Card Component designsgraphic elements',
    description:
      'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    ctaLabel: 'View Details',
    ctaVariant: 'outline',
  },
]

export interface CardGridSectionProps {
  items?: CardProps[]
  className?: string
}

export function CardGridSection({ items = defaultItems, className = '' }: CardGridSectionProps) {
  return (
    <section
      aria-label="Card grid"
      className={['flex min-h-screen w-full items-center justify-center bg-[#f3f4f6]', className].join(' ')}
      data-name="Cards"
      data-node-id="310:14711"
    >
      <div className="grid w-[1170px] grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}

