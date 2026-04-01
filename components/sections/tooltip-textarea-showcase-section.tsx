import { Textarea } from '@/components/ui/textarea'
import { Tooltip } from '@/components/ui/tooltip'

const positions = ['Top', 'Left', 'Right', 'Bottom'] as const
const colors = ['Primary', 'Dark', 'White'] as const

function TextareaColumn({ state }: { state: 'Default' | 'Hover' | 'Focused' | 'Disabled' }) {
  return (
    <div className="space-y-6">
      <Textarea state={state} showLabel showHelperText showCounter />
      <Textarea state={state} showLabel showHelperText={false} showCounter />
      <Textarea state={state} showLabel={false} showHelperText={false} showCounter />
      <Textarea state={state} showLabel={false} showHelperText={false} showCounter />
      <Textarea state={state} showLabel showHelperText={false} showCounter />
      <Textarea state={state} showLabel={false} showHelperText showCounter />
      <Textarea state={state} showLabel showHelperText showCounter={false} />
    </div>
  )
}

export function TooltipTextareaShowcaseSection() {
  return (
    <section className="mx-auto w-full max-w-[1060px] rounded-[8px] border border-dashed border-primary bg-white p-8">
      <div className="mb-10 grid grid-cols-3 gap-8">
        {colors.map((color) => (
          <div key={color} className="space-y-5">
            {positions.map((position) => (
              <Tooltip key={`${color}-${position}`} color={color} position={position} />
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-6">
        <TextareaColumn state="Default" />
        <TextareaColumn state="Hover" />
        <TextareaColumn state="Focused" />
        <TextareaColumn state="Disabled" />
      </div>
    </section>
  )
}

