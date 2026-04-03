const imgBgShapes = 'https://www.figma.com/api/mcp/asset/01fc58b1-e0b8-4275-af3f-420fd7fb3270'

export interface TeamMemberCardProps {
  imageSrc: string
  name: string
  role: string
  className?: string
}

/** Figma 310:17596 — portrait + bottom name plate */
export function TeamMemberCard({ imageSrc, name, role, className = '' }: TeamMemberCardProps) {
  return (
    <div className={['relative h-[330px] w-full max-w-[270px]', className].join(' ')}>
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <img alt="" className="pointer-events-none absolute inset-0 size-full object-cover" src={imageSrc} />
      </div>
      <div className="pointer-events-none absolute bottom-[21px] left-[22px] h-[83px] w-[230px]">
        <img alt="" className="block size-full max-w-none object-contain" src={imgBgShapes} />
      </div>
      <div className="absolute bottom-[55px] left-1/2 w-[calc(100%-44px)] -translate-x-1/2 text-center">
        <p className="text-base font-semibold leading-6 text-dark">{name}</p>
        <p className="mt-1 text-xs font-medium leading-5 text-muted">{role}</p>
      </div>
    </div>
  )
}
