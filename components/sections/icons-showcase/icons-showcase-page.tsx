import { Badge } from '@/components/ui/badge'
import { DateTimeIconCard } from './figma-date-time-card'

const remainingIconGroups = [
  'Design',
  'Direction',
  'E-commerce',
  'Education',
  'Building',
  'Business',
  'Chat',
  'Communication',
  'Construction',
  'Currency',
  'Interface and Sign',
  'Legal',
  'Marketing',
  'Media',
  'Startup',
  'Religion',
  'Real Estate',
  'Party and Fest',
  'Symbol',
  'Text Editor',
  'Travel',
  'User',
  'Weather',
  'Web and tech',
]

export function IconsShowcasePage() {
  return (
    <main className="bg-[#f8fafc] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8">
        <DateTimeIconCard />

        <section className="rounded-[24px] bg-white p-8 shadow-icon-card">
          <h2 className="text-[30px] font-bold leading-[38px] text-dark">Icons Library</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {remainingIconGroups.map((group) => (
              <Badge key={group} variant="primary" size="sm">
                {group}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
