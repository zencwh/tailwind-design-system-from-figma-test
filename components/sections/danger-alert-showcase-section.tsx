import { DangerAlert } from '@/components/ui/danger-alert'

export function DangerAlertShowcaseSection() {
  return (
    <section className="mx-auto w-full max-w-[1060px] rounded-[8px] border border-dashed border-primary bg-white p-5">
      <div className="flex flex-col gap-6">
        <DangerAlert style="1" />
        <DangerAlert style="2" />
        <DangerAlert style="3" />
      </div>
    </section>
  )
}

