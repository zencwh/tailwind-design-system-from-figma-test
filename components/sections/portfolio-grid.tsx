import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

type PortfolioCategory = 'Branding' | 'Marketing' | 'Design' | 'Development'

export type PortfolioItem = {
  id: string
  category: PortfolioCategory
  title: string
  imageSrc: string
  featured?: boolean
}

// NOTE: These are Figma MCP asset URLs (time-limited). If images disappear, re-fetch via MCP.
const imgRectangle4504 = 'https://www.figma.com/api/mcp/asset/c16987c4-ba73-445b-94d2-d755371c7b19'
const imgRectangle4505 = 'https://www.figma.com/api/mcp/asset/2f04ed27-cc26-4583-a5ba-574120215427'
const imgRectangle4506 = 'https://www.figma.com/api/mcp/asset/6ae24a3d-21b5-42fa-be71-9ab2d70c4225'
const imgRectangle4507 = 'https://www.figma.com/api/mcp/asset/41c822db-db56-4854-88ee-e999fcda2270'
const imgRectangle4508 = 'https://www.figma.com/api/mcp/asset/096f9dce-f439-4a4a-82ab-304d5f5389b3'
const imgRectangle4509 = 'https://www.figma.com/api/mcp/asset/456cf6aa-f695-4efc-a7cb-a8eb67dc7a9a'

const defaultItems: PortfolioItem[] = [
  { id: 'branding-1', category: 'Branding', title: 'Branding Design', imageSrc: imgRectangle4504 },
  { id: 'marketing-1', category: 'Marketing', title: 'Best Marketing tips', imageSrc: imgRectangle4505, featured: true },
  { id: 'development-1', category: 'Development', title: 'Web Design Trend', imageSrc: imgRectangle4506 },
  { id: 'design-1', category: 'Design', title: 'Business Card Design', imageSrc: imgRectangle4507 },
  { id: 'marketing-2', category: 'Marketing', title: 'Dgital marketing', imageSrc: imgRectangle4508 },
  { id: 'branding-2', category: 'Branding', title: 'Creative Agency', imageSrc: imgRectangle4509 },
]

const filters: PortfolioCategory[] = ['Branding', 'Design', 'Marketing', 'Development']

export interface PortfolioGridSectionProps {
  items?: PortfolioItem[]
  className?: string
}

export function PortfolioGridSection({ items = defaultItems, className = '' }: PortfolioGridSectionProps) {
  return (
    <section className={['bg-white py-16 sm:py-24', className].join(' ')} aria-labelledby="portfolio-heading">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col gap-2">
            <Badge variant="primary" size="md">
              Our Portfolio
            </Badge>
            <h1 id="portfolio-heading" className="text-[40px] font-bold leading-[48px] text-dark">
              Our Recent Projects
            </h1>
          </div>
          <p className="max-w-2xl text-[16px] font-normal leading-[24px] text-muted">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some
            form.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button variant="primary" round="md">
            All Project
          </Button>
          {filters.map((filter) => (
            <Button key={filter} variant="outline" round="md">
              {filter}
            </Button>
          ))}
        </div>

        <div className="mt-14 grid gap-x-[30px] gap-y-[45px] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const buttonVariant = item.featured ? 'primary' : 'outline'

  return (
    <article className="h-[399px] w-[370px]">
      <div className="relative h-full">
        <div className="absolute inset-x-0 top-0 h-[300px] overflow-hidden rounded-[10px]">
          <img
            src={item.imageSrc}
            alt={item.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="absolute inset-x-[7.5%] bottom-0">
          <div className="relative h-[185px] w-full">
            <div className="absolute inset-0 rounded-[8px] bg-white shadow-[0px_4px_30px_rgba(0,0,0,0.08)]" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-[21px] text-center">
                <div className="flex flex-col items-center gap-[6px]">
                  <Badge variant="primary" size="sm">
                    {item.category}
                  </Badge>
                  <h2 className="text-[20px] font-bold leading-[24px] text-dark">
                    {item.title}
                  </h2>
                </div>
                <Button variant={buttonVariant} round="md" href="#">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

