import { Dropdown } from '@/components/ui/dropdown'

export function DropdownShowcaseSection() {
  return (
    <section className="mx-auto w-full max-w-[1040px] rounded-[8px] border border-dashed border-primary bg-white p-8">
      <div className="grid grid-cols-4 gap-x-[56px] gap-y-10">
        <div className="space-y-5">
          <Dropdown label="Label" state="Default" />
          <Dropdown label="Label" state="Default" expanded />
          <Dropdown showLabel={false} state="Default" />
          <Dropdown showLabel={false} state="Default" expanded />
        </div>

        <div className="space-y-5">
          <Dropdown label="Label" state="Hover" />
          <Dropdown label="Label" state="Hover" expanded />
          <Dropdown showLabel={false} state="Hover" />
          <Dropdown showLabel={false} state="Hover" expanded />
        </div>

        <div className="space-y-5">
          <Dropdown label="Label" state="Focused" />
          <Dropdown label="Label" state="Focused" expanded />
          <Dropdown showLabel={false} state="Focused" />
          <Dropdown showLabel={false} state="Focused" expanded />
        </div>

        <div className="space-y-5">
          <Dropdown label="Label" state="Disabled" />
          <Dropdown label="Label" state="Disabled" />
        </div>
      </div>
    </section>
  )
}

