import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

/** Figma 310:22282 */
const imgEnvelope = 'https://www.figma.com/api/mcp/asset/777ab45b-1a3c-4bec-a53e-c0fda17fbcfd'

function EnvelopeIcon() {
  return (
    <div className="size-4 shrink-0 overflow-hidden">
      <img alt="" className="size-full object-contain" src={imgEnvelope} />
    </div>
  )
}

export function FormElementsShowcaseSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-white py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          <Input fullWidth label="Default Input" placeholder="Placeholder" showHelperText={false} rightIcon={false} />
          <Input fullWidth label="Active Input" placeholder="Placeholder" fieldVariant="primary" showHelperText={false} rightIcon={false} />
          <Input
            fullWidth
            label="Disabled input"
            placeholder="Placeholder"
            state="Disabled"
            disabled
            showHelperText={false}
            rightIcon={false}
            labelClassName="text-[#111928]"
            fieldClassName="content-stretch flex min-h-px min-w-px items-center gap-[10px] rounded-[6px] border-[3px] border-solid border-[#adbcf2] bg-white pl-[20px] pr-[16px] py-3"
          />
          <Input fullWidth label="Disabled input" placeholder="Placeholder" state="Disabled" disabled showHelperText={false} rightIcon={false} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
          <Input fullWidth label="Name" placeholder="Devid Jhon" leftIcon showHelperText={false} rightIcon={false} />
          <Input
            fullWidth
            label="Email"
            placeholder="info@yourmai.com"
            leftIcon
            leftIconNode={<EnvelopeIcon />}
            showHelperText={false}
            rightIcon={false}
          />
          <Input
            fullWidth
            label="Company"
            placeholder="Type company name"
            leftIcon
            leftIconNode={<EnvelopeIcon />}
            showHelperText={false}
            rightIcon={false}
          />
          <Input
            fullWidth
            label="Email"
            placeholder="xyz@gmail.com"
            status="Error"
            helperText="Invalid email address"
            defaultValue="xyz@gmail.com"
            rightIcon
          />
          <Input
            fullWidth
            label="Password"
            placeholder="********************"
            status="Success"
            helperText="Password is strong"
            defaultValue="********************"
            rightIcon
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          <Textarea
            className="h-[220px] w-full max-w-[350px]"
            label="Default Textarea"
            placeholder="Placeholder"
            state="Default"
            showHelperText={false}
            showCounter={false}
          />
          <Textarea
            className="h-[220px] w-full max-w-[350px]"
            label="Active Textarea"
            placeholder="Placeholder"
            state="Hover"
            showHelperText={false}
            showCounter={false}
          />
          <Textarea
            className="h-[220px] w-full max-w-[350px]"
            label="Disabled Textarea"
            placeholder="Placeholder"
            state="Focused"
            showHelperText={false}
            showCounter={false}
          />
          <Textarea
            className="h-[220px] w-full max-w-[350px]"
            label="Disabled Textarea"
            placeholder="Placeholder"
            state="Disabled"
            disabled
            showHelperText={false}
            showCounter={false}
          />
        </div>
      </div>
    </section>
  )
}
