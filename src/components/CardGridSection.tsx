import { Card } from './Card'

const imgRectangle4592 = 'https://www.figma.com/api/mcp/asset/7dd192a8-be58-42d7-8afb-83e0ef322045'
const imgRectangle4593 = 'https://www.figma.com/api/mcp/asset/60beba43-5821-40cc-92fd-bed67d979203'
const imgRectangle4594 = 'https://www.figma.com/api/mcp/asset/64b0e7b7-7732-46a2-be99-504169588b59'

const cards = [
  {
    imageSrc: imgRectangle4592,
    imageAlt: '',
    title: '50+ Best creative website themes & templates',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    ctaLabel: 'View Details',
    ctaVariant: 'outline' as const,
  },
  {
    imageSrc: imgRectangle4593,
    imageAlt: '',
    title: 'The ultimate UX and UI guide to card design',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    ctaLabel: 'View Details',
    ctaVariant: 'primary' as const,
  },
  {
    imageSrc: imgRectangle4594,
    imageAlt: '',
    title: 'Creative Card Component designsgraphic elements',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    ctaLabel: 'View Details',
    ctaVariant: 'outline' as const,
  },
]

export function CardGridSection() {
  return (
    <section aria-label="Card grid" className="flex justify-center">
      <div className="grid w-[1170px] grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}

