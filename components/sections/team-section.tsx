import { TeamMemberCard } from '@/components/ui/team-member-card'

const img1 = 'https://www.figma.com/api/mcp/asset/9b2b0dcd-17e9-4f9f-9192-15dd86576b9b'
const img2 = 'https://www.figma.com/api/mcp/asset/62e19cdd-0272-4b20-86d1-5f06485d258b'
const img3 = 'https://www.figma.com/api/mcp/asset/2ddbd4b0-0497-44b0-8022-62cab881a45a'
const img4 = 'https://www.figma.com/api/mcp/asset/2dcbb648-a540-45e0-ae1b-53a3aab8c4d6'

const MEMBERS = [
  { imageSrc: img1, name: 'Coriss Ambady', role: 'Web Developer' },
  { imageSrc: img2, name: 'glorius Cristian', role: 'App Developer' },
  { imageSrc: img3, name: 'glorius Cristian', role: 'Ui/Ux Designer' },
  { imageSrc: img4, name: 'Nikolas Brooten', role: 'Sales Manager' },
] as const

/** Figma 310:17596 */
export function TeamSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-white py-16 lg:py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-[60px] px-6 lg:px-[135px]">
        <div className="flex max-w-[1170px] flex-col items-center gap-2 text-center">
          <p className="text-lg font-semibold leading-[26px] text-primary">Our Team</p>
          <h2 className="text-[40px] font-bold leading-[48px] text-dark">Our Awesome Team</h2>
          <div className="text-base font-normal leading-6 text-muted">
            <p className="mb-0">There are many variations of passages of Lorem Ipsum available</p>
            <p className="mb-0">but the majority have suffered alteration in some form.</p>
          </div>
        </div>
        <div className="flex max-w-[1170px] flex-wrap justify-center gap-[30px]">
          {MEMBERS.map((m, i) => (
            <TeamMemberCard key={i} imageSrc={m.imageSrc} name={m.name} role={m.role} />
          ))}
        </div>
      </div>
    </section>
  )
}
