import { ServiceFeatureCard } from '@/components/ui/service-feature-card'

/** Figma node 310:16721 */
const imgPie = 'https://www.figma.com/api/mcp/asset/a736c9f5-c460-4615-a6a3-1f08325ede69'
const imgTailwind = 'https://www.figma.com/api/mcp/asset/b9013b33-dbac-48a5-82be-af3e3a00c806'
const imgGrid = 'https://www.figma.com/api/mcp/asset/27dbf10a-78ac-45ed-bf2f-fead6284d8a0'
const imgDashboard = 'https://www.figma.com/api/mcp/asset/1264ff16-48dc-42c5-b533-a7e5c11b7507'
const imgLayers = 'https://www.figma.com/api/mcp/asset/d4680750-ca7f-4b19-b754-d7f7690027eb'
const imgReload = 'https://www.figma.com/api/mcp/asset/cac1851d-283e-4b07-9250-46f416340ab2'

const DESCRIPTION =
  'We dejoy working with disning clients, people for whom qualuty, service, integrity & aesthetics.'

const SERVICES = [
  { title: 'Refreshing Design', iconSrc: imgPie, iconInsetClassName: 'inset-[2.71%_2.71%_2.66%_2.79%] size-full' },
  { title: 'Based on Tailwind CSS', iconSrc: imgTailwind, iconInsetClassName: 'inset-[21.88%_3.29%_21.88%_4.4%] size-full' },
  { title: '100+ Components', iconSrc: imgGrid, iconInsetClassName: 'inset-[5.31%_4.37%_5.62%_4.37%] size-full' },
  { title: 'Speed Optimized', iconSrc: imgDashboard, iconInsetClassName: 'inset-[14.84%_2.34%_14.69%_2.81%] size-full' },
  { title: 'Fully Customizable', iconSrc: imgLayers, iconInsetClassName: 'inset-[2.77%_11.09%_2.81%_11.09%] size-full' },
  { title: 'Regular Updates', iconSrc: imgReload, iconInsetClassName: 'inset-[6.41%_2.76%_6.72%_2.46%] size-full' },
] as const

export interface ServicesOfferSectionProps {
  className?: string
}

export function ServicesOfferSection({ className = '' }: ServicesOfferSectionProps) {
  return (
    <section className={['bg-white py-16 lg:py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-[60px] px-6 lg:px-[135px]">
        <div className="flex max-w-[1170px] flex-col items-center gap-2 text-center">
          <p className="text-lg font-semibold leading-[26px] text-primary">Our Services</p>
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-[40px] font-bold leading-[48px] text-dark">What We Offer</h2>
            <div className="text-base font-normal leading-6 text-muted">
              <p className="mb-0">There are many variations of passages of Lorem Ipsum available</p>
              <p className="mb-0">but the majority have suffered alteration in some form.</p>
            </div>
          </div>
        </div>

        <div className="flex max-w-[1170px] flex-wrap justify-center gap-x-[30px] gap-y-[35px]">
          {SERVICES.map((s) => (
            <ServiceFeatureCard
              key={s.title}
              title={s.title}
              description={DESCRIPTION}
              iconSrc={s.iconSrc}
              iconInsetClassName={s.iconInsetClassName}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
