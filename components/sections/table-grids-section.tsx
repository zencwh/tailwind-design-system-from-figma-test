import { FreelancerProfileCard } from '@/components/ui/freelancer-profile-card'
import { MediaLibraryCard } from '@/components/ui/media-library-card'

/** Figma MCP assets for node 310:16124 (expire ~7 days; mirror to /public for production). */
const imgLibrary1 = 'https://www.figma.com/api/mcp/asset/4ae4c857-0640-4d79-b140-4484db125d7c'
const imgAvatar = 'https://www.figma.com/api/mcp/asset/60b16efa-9143-473b-8d26-9602bb515596'
const imgLibrary2 = 'https://www.figma.com/api/mcp/asset/c5431353-3d0e-4d7f-abf1-80305b8a9811'
const imgLibrary3 = 'https://www.figma.com/api/mcp/asset/a5a96176-8cc7-40fe-b9f3-7bb698df8a2d'
const imgLibrary4 = 'https://www.figma.com/api/mcp/asset/5a121ff6-784c-4912-828a-41b828336a42'
const imgLibrary5 = 'https://www.figma.com/api/mcp/asset/22f90e51-68d7-4b7a-a5b6-b6b26d29550c'
const imgLibrary6 = 'https://www.figma.com/api/mcp/asset/70547e31-94f4-4337-8a87-a96eb5fee2ea'
const imgLibrary7 = 'https://www.figma.com/api/mcp/asset/dd6a6de0-8196-4dd1-bc39-6eab261cc76e'
const imgLibrary8 = 'https://www.figma.com/api/mcp/asset/8d65a1a4-2d44-4b29-96f1-6d0659ad1a87'

const LIBRARY_ITEMS = [
  {
    imageSrc: imgLibrary1,
    fileName: 'family_photo.jpg',
    fileSize: '589KB',
    imageOverflow: true as const,
    imageClassName: 'left-0 top-[-31.47%] h-[213.16%] w-full',
  },
  { imageSrc: imgLibrary2, fileName: 'office_tour.png', fileSize: '985KB' },
  { imageSrc: imgLibrary3, fileName: 'personal_image.jpg', fileSize: '4MB' },
  { imageSrc: imgLibrary4, fileName: 'my_photo.jpg', fileSize: '993KB' },
  { imageSrc: imgLibrary5, fileName: 'mother_image.jpg', fileSize: '7MB' },
  {
    imageSrc: imgLibrary6,
    fileName: 'father_image.jpg',
    fileSize: '2MB',
    imageOverflow: true as const,
    imageClassName: 'left-[-14.44%] top-[-18.47%] h-[122.11%] w-[128.89%]',
  },
  { imageSrc: imgLibrary7, fileName: 'brother_image.jpg', fileSize: '343KB' },
  { imageSrc: imgLibrary8, fileName: 'brother_image.jpg', fileSize: '5MB' },
]

const SECTION_BLURB = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '

const DEFAULT_ABOUT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris'

export interface MyLibrarySectionProps {
  className?: string
}

export function MyLibrarySection({ className = '' }: MyLibrarySectionProps) {
  return (
    <section className={['bg-white py-16 lg:py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[135px]">
        <div className="mb-10 flex max-w-[1170px] flex-col gap-2">
          <h2 className="text-[28px] font-semibold leading-10 text-dark">My Library</h2>
          <p className="text-base font-normal leading-6 text-muted">{SECTION_BLURB}</p>
        </div>
        <div className="flex max-w-[1170px] flex-wrap gap-x-[30px] gap-y-[35px]">
          {LIBRARY_ITEMS.map((item, index) => (
            <MediaLibraryCard
              key={`library-${index}`}
              imageSrc={item.imageSrc}
              fileName={item.fileName}
              fileSize={item.fileSize}
              imageOverflow={item.imageOverflow}
              imageClassName={item.imageClassName}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export interface AvailableFreelanceSectionProps {
  className?: string
}

export function AvailableFreelanceSection({ className = '' }: AvailableFreelanceSectionProps) {
  return (
    <section className={['bg-[#f3f4f6] py-16 lg:py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[235px]">
        <div className="mb-11 flex max-w-[970px] flex-col gap-2 lg:mb-[45px]">
          <h2 className="text-[28px] font-semibold leading-10 text-dark">Available Freelance</h2>
          <p className="text-base font-normal leading-6 text-muted">{SECTION_BLURB}</p>
        </div>
        <div className="flex max-w-[970px] flex-wrap justify-start gap-[30px]">
          {Array.from({ length: 4 }).map((_, i) => (
            <FreelancerProfileCard
              key={i}
              avatarSrc={imgAvatar}
              name="Andro Strassmann"
              role="Web Developer"
              aboutText={DEFAULT_ABOUT}
              phone="+990 343 23443"
              email="contact@devid.com"
              onHire={() => undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/** Full frame 310:16124 — both grids stacked for preview. */
export function TableGridsShowcaseSection() {
  return (
    <div>
      <MyLibrarySection />
      <AvailableFreelanceSection />
    </div>
  )
}
