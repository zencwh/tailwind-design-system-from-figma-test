import { InfoAlert } from '@/components/ui/info-alert'

export function InfoAlertShowcaseSection() {
  return (
    <section className="mx-auto w-full max-w-[1060px] rounded-[8px] border border-dashed border-primary bg-white p-5">
      <div className="flex flex-col gap-6">
        <InfoAlert style="1" />
        <InfoAlert style="2" />
        <InfoAlert style="3" />
      </div>
    </section>
  )
}

