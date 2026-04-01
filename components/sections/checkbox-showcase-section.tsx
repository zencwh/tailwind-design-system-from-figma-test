import { Checkbox } from '@/components/ui/checkbox'

const styles = ['1', '2', '3', '4', '5'] as const

function CheckboxRow({ checked }: { checked: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-x-16 gap-y-4">
      {styles.map((style) => (
        <Checkbox key={`${style}-with`} checked={checked} figmaStyle={style} label="Checkbox Text" readOnly />
      ))}
      {styles.map((style) => (
        <Checkbox key={`${style}-icon`} checked={checked} figmaStyle={style} showLabel={false} readOnly />
      ))}
    </div>
  )
}

export function CheckboxShowcaseSection() {
  return (
    <section className="mx-auto w-full max-w-[640px] rounded-[8px] border border-dashed border-primary bg-white p-10">
      <div className="space-y-6">
        <CheckboxRow checked={false} />
        <CheckboxRow checked />
      </div>
    </section>
  )
}

