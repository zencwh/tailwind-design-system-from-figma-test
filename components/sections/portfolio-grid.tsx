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

const imgRectangle4504 = 'https://www.figma.com/api/mcp/asset/e8e05476-13fa-438d-aee7-2d56343c3111'
const imgRectangle4505 = 'https://www.figma.com/api/mcp/asset/e1ec2c25-db2d-467a-ac51-4f7fef9cbcba'
const imgRectangle4506 = 'https://www.figma.com/api/mcp/asset/cad4333a-74c5-41c1-ac97-1395333a8214'
const imgRectangle4507 = 'https://www.figma.com/api/mcp/asset/98ceee70-ce30-4690-9ad8-2f8a89a908db'
const imgRectangle4508 = 'https://www.figma.com/api/mcp/asset/646dcc80-9429-46a1-b007-f393b84f027e'
const imgRectangle4509 = 'https://www.figma.com/api/mcp/asset/ddff70db-f430-4fdb-938f-2991b8ff56ec'

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
        <div className="absolute inset-x-0 top-0 h-[300px] rounded-[10px]">
          <img
            src={item.imageSrc}
            alt={item.title}
            className="absolute inset-0 size-full rounded-[10px] object-cover"
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
                <Button variant={buttonVariant} round="md">
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

