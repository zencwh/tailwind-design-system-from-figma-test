import { type FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

/** Figma 310:16909 */
const imgMaskGroup = 'https://www.figma.com/api/mcp/asset/98681c39-7e47-4a45-a75a-8c191bdd67b7'
const imgVectorBg = 'https://www.figma.com/api/mcp/asset/7619d40c-5318-4c22-b96c-ab292d7e2507'

export type NewsletterSectionVariant = 'split' | 'centered'

export interface NewsletterSectionProps {
  variant: NewsletterSectionVariant
  className?: string
  onSubmit?: (email: string) => void
}

export function NewsletterSection({ variant, className = '', onSubmit }: NewsletterSectionProps) {
  const [email, setEmail] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSubmit?.(email)
  }

  if (variant === 'centered') {
    return (
      <section className={['relative overflow-hidden bg-white py-16 lg:min-h-[544px] lg:py-24', className].filter(Boolean).join(' ')}>
        <div className="pointer-events-none absolute inset-x-0 top-1 h-[533px]">
          <img alt="" className="size-full object-cover object-top opacity-90" src={imgVectorBg} />
        </div>
        <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-6 text-center">
          <div className="flex max-w-2xl flex-col gap-2">
            <p className="text-lg font-semibold leading-[26px] text-primary">Sub Heading</p>
            <h2 className="text-[40px] font-bold leading-[48px] text-dark">Subscribe to our newsletter</h2>
            <div className="text-base font-normal leading-6 text-muted">
              <p className="mb-0">There are many variations of passages of Lorem Ipsum available</p>
              <p className="mb-0">but the majority have suffered alteration in some form.</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[520px] flex-col gap-3 rounded-xl bg-white p-5 shadow-[0px_5px_12px_0px_rgba(0,0,0,0.1)] sm:flex-row sm:items-start"
          >
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              showLabel={false}
              showHelperText={false}
              rightIcon={false}
              fullWidth
              className="min-w-0 flex-1"
            />
            <Button
              type="submit"
              kind="Primary"
              variant="primary"
              round="Semi Round"
              showLeftIcon={false}
              showRightIcon={false}
              className="shrink-0 rounded-md border-0 px-7 py-[13px] text-base font-medium"
            >
              Submit
            </Button>
          </form>
        </div>
      </section>
    )
  }

  return (
    <section className={['bg-white py-16 lg:py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[1170px] px-6 lg:px-0">
        <div className="relative min-h-[400px] overflow-hidden rounded-xl lg:rounded-2xl">
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgMaskGroup} />
          <div className="relative grid min-h-[400px] grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 text-white lg:p-12 lg:pl-14">
              <h2 className="mb-5 max-w-[408px] text-[40px] font-bold leading-[48px]">
                <span className="block">Start Building</span>
                <span className="block">for Free</span>
              </h2>
              <p className="max-w-[295px] text-base font-normal leading-6">
                And because your company is unique, you will need an extensible identity solution.
              </p>
            </div>
            <div className="flex flex-col justify-center bg-white/95 p-8 backdrop-blur-sm lg:bg-white/80 lg:p-12">
              <h3 className="mb-8 text-[30px] font-bold leading-[38px] text-dark">Subscribe Now</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    showLabel={false}
                    showHelperText={false}
                    rightIcon={false}
                    fullWidth
                    className="min-w-0 sm:max-w-[317px]"
                  />
                  <Button
                    type="submit"
                    kind="Primary"
                    variant="primary"
                    round="Semi Round"
                    showLeftIcon={false}
                    showRightIcon={false}
                    className="shrink-0 rounded-md border-0 px-7 py-[13px] text-base font-medium"
                  >
                    Submit
                  </Button>
                </div>
                <p className="text-base font-normal leading-6 text-muted">you will receive every news and pro tips</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
