import { ToggleWithText } from '@/components/ui/toggle-with-text'

export function ToggleWithTextShowcaseSection() {
  return (
    <section className="mx-auto w-full max-w-[800px] rounded-[8px] border border-dashed border-primary bg-white px-20 py-14">
      <div className="space-y-10">
        <div className="flex items-center gap-10">
          <ToggleWithText style="1" />
          <ToggleWithText style="1" active />
        </div>

        <div className="flex items-center gap-14">
          <ToggleWithText style="2" />
          <ToggleWithText style="2" active />
        </div>

        <div className="flex items-center gap-14">
          <ToggleWithText style="3" />
          <ToggleWithText style="3" active />
        </div>

        <div className="flex items-center gap-14">
          <ToggleWithText style="4" />
          <ToggleWithText style="4" active />
        </div>
      </div>
    </section>
  )
}

