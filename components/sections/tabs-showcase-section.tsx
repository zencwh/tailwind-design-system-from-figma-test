import { Tabs } from '@/components/ui/tabs'

export function TabsShowcaseSection() {
  return (
    <section className="mx-auto w-full max-w-[1060px] rounded-[8px] border border-dashed border-primary bg-white p-8">
      <div className="space-y-10">
        <Tabs style="1" />
        <Tabs style="2" />
        <Tabs style="3" />
        <Tabs style="4" />
        <Tabs style="5" />
        <Tabs style="6" />
        <Tabs style="7" />
        <Tabs style="8" />
        <Tabs style="9" />
        <Tabs style="10" />
      </div>
    </section>
  )
}

