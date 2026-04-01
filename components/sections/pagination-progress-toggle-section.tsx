import { Pagination } from '@/components/ui/pagination'
import { ProgressBars } from '@/components/ui/progress-bars'
import { Toggle } from '@/components/ui/toggle'

export function PaginationProgressToggleSection() {
  return (
    <section className="mx-auto w-full max-w-[1060px] rounded-[8px] border border-dashed border-primary bg-white p-5">
      <div className="grid grid-cols-[360px_1fr] gap-10">
        <div className="flex flex-col gap-10">
          <Pagination style="1" />
          <Pagination style="2" />
          <Pagination style="3" />
          <Pagination style="4" />
          <Pagination style="5" />
        </div>

        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-6">
              <ProgressBars type="Primary" style="1" percentage="80%" />
              <ProgressBars type="Primary" style="1" percentage="50%" />
              <ProgressBars type="Primary" style="1" percentage="90%" />
            </div>
            <div className="space-y-6">
              <ProgressBars type="Positive" style="1" percentage="80%" />
              <ProgressBars type="Positive" style="1" percentage="50%" />
              <ProgressBars type="Positive" style="1" percentage="90%" />
            </div>
            <div className="space-y-6">
              <ProgressBars type="Negative" style="1" percentage="80%" />
              <ProgressBars type="Negative" style="1" percentage="50%" />
              <ProgressBars type="Negative" style="1" percentage="90%" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-6">
              <ProgressBars type="Primary" style="2" percentage="80%" />
              <ProgressBars type="Primary" style="2" percentage="50%" />
              <ProgressBars type="Primary" style="2" percentage="90%" />
            </div>
            <div className="space-y-6">
              <ProgressBars type="Positive" style="2" percentage="80%" />
              <ProgressBars type="Positive" style="2" percentage="50%" />
              <ProgressBars type="Positive" style="2" percentage="90%" />
            </div>
            <div className="space-y-6">
              <ProgressBars type="Negative" style="2" percentage="80%" />
              <ProgressBars type="Negative" style="2" percentage="50%" />
              <ProgressBars type="Negative" style="2" percentage="90%" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-6">
              <ProgressBars type="Primary" style="3" percentage="80%" />
              <ProgressBars type="Primary" style="3" percentage="50%" />
              <ProgressBars type="Primary" style="3" percentage="90%" />
            </div>
            <div className="space-y-6">
              <ProgressBars type="Positive" style="3" percentage="80%" />
              <ProgressBars type="Positive" style="3" percentage="50%" />
              <ProgressBars type="Positive" style="3" percentage="90%" />
            </div>
            <div className="space-y-6">
              <ProgressBars type="Negative" style="3" percentage="80%" />
              <ProgressBars type="Negative" style="3" percentage="50%" />
              <ProgressBars type="Negative" style="3" percentage="90%" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6">
            {(['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const).map((s) => (
              <div key={s} className="flex items-center justify-between">
                <Toggle style={s} />
                <Toggle style={s} active />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

