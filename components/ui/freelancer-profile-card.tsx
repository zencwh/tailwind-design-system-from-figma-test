import { Button } from '@/components/ui/button'

const imgPhone = 'https://www.figma.com/api/mcp/asset/dbd60466-e3dc-42b1-9950-327f8e83b1e2'
const imgPhone1 = 'https://www.figma.com/api/mcp/asset/863b4c0f-0b93-4af6-aba6-e66700d09802'
const imgPhone2 = 'https://www.figma.com/api/mcp/asset/9ffe6343-5242-4a4d-9de3-c5e10199f3ca'
const imgEnvelope = 'https://www.figma.com/api/mcp/asset/03e45bd6-fa6c-4421-ac9c-32288edf5952'

export interface FreelancerProfileCardProps {
  avatarSrc: string
  avatarAlt?: string
  name: string
  role: string
  aboutTitle?: string
  aboutText: string
  phone: string
  email: string
  hireLabel?: string
  onHire?: () => void
  className?: string
}

function PhoneGlyph({ className = '' }: { className?: string }) {
  return (
    <div className={['relative size-4 shrink-0 overflow-hidden', className].join(' ')} aria-hidden>
      <div className="absolute inset-[2.79%_2.94%_2.66%_2.73%]">
        <img alt="" className="block size-full max-w-none" src={imgPhone} />
      </div>
      <div className="absolute inset-[4.68%_4.83%_55.47%_54.68%]">
        <img alt="" className="block size-full max-w-none" src={imgPhone1} />
      </div>
      <div className="absolute inset-[19.68%_20.3%_54.06%_53.58%]">
        <img alt="" className="block size-full max-w-none" src={imgPhone2} />
      </div>
    </div>
  )
}

function EnvelopeGlyph({ className = '' }: { className?: string }) {
  return (
    <div className={['relative size-4 shrink-0 overflow-hidden', className].join(' ')} aria-hidden>
      <img alt="" className="absolute inset-[15%_2.66%_14.69%_2.66%] block size-full max-w-none" src={imgEnvelope} />
    </div>
  )
}

/**
 * Figma node 310:16124 (Available Freelance) — profile card with Hire CTA and contact row.
 */
export function FreelancerProfileCard({
  avatarSrc,
  avatarAlt = '',
  name,
  role,
  aboutTitle = 'About Person',
  aboutText,
  phone,
  email,
  hireLabel = 'Hire Now',
  onHire,
  className = '',
}: FreelancerProfileCardProps) {
  return (
    <article
      className={[
        'flex w-full max-w-[470px] flex-col rounded-[10px] border border-stroke bg-white px-[22px] pb-[15px] pt-[22px] shadow-card',
        className,
      ].join(' ')}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <div className="relative size-[50px] shrink-0 overflow-hidden rounded-[5px]">
            <img alt={avatarAlt} src={avatarSrc} className="pointer-events-none absolute inset-0 size-full object-cover" />
          </div>
          <div className="flex min-w-0 flex-col">
            <p className="truncate text-base font-medium leading-6 text-dark">{name}</p>
            <p className="truncate text-sm font-normal leading-[22px] text-muted">{role}</p>
          </div>
        </div>
        <Button
          type="button"
          kind="Primary"
          variant="primary"
          round="Semi Round"
          showLeftIcon={false}
          showRightIcon={false}
          onClick={onHire}
          className="shrink-0 rounded px-4 py-[3px] text-base font-medium leading-6 !rounded-[4px]"
        >
          {hireLabel}
        </Button>
      </div>

      <div className="mt-11 flex flex-col gap-[37px] border-t border-stroke pt-11">
        <div className="flex flex-col gap-1.5">
          <p className="text-base font-medium leading-6 text-dark">{aboutTitle}</p>
          <p className="max-w-[426px] text-sm font-normal leading-[22px] text-muted">{aboutText}</p>
        </div>

        <div className="flex flex-col gap-4 border-t border-stroke pt-9 sm:flex-row sm:flex-wrap sm:gap-[30px]">
          <div className="flex items-center gap-2">
            <PhoneGlyph />
            <p className="whitespace-nowrap text-sm font-normal leading-[22px] text-muted">{phone}</p>
          </div>
          <div className="flex min-w-0 items-center gap-2">
            <EnvelopeGlyph />
            <p className="truncate text-sm font-normal leading-[22px] text-muted">{email}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
