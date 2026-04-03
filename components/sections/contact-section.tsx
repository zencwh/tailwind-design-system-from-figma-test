import type { FormEvent, ReactNode } from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

/** Figma node 310:14964 — decorative & icon assets (remote, refresh if expired). */
const imgFrame35 = 'https://www.figma.com/api/mcp/asset/4126af5f-8819-4c3e-ba4c-0efc85734927'
const imgDottedShape = 'https://www.figma.com/api/mcp/asset/40c52693-e803-4797-b88d-81f88a064128'
const imgVector = 'https://www.figma.com/api/mcp/asset/3238d6dd-974b-4472-85ca-aa026cad34cd'
const imgGroup = 'https://www.figma.com/api/mcp/asset/c190f124-5e93-412c-9d01-df5842bdbb63'
const imgGroup1 = 'https://www.figma.com/api/mcp/asset/92ed9ca3-ef38-4008-8e01-de5117551330'
const imgGroup2 = 'https://www.figma.com/api/mcp/asset/e5f51942-33e6-4b7f-a949-0683ade72391'
const imgVector1 = 'https://www.figma.com/api/mcp/asset/e115aa3d-80b0-4d33-9113-75da48fe6ffc'

function ContactInfoRow({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="relative inline-grid shrink-0 place-items-start leading-none">
        <div className="col-start-1 row-start-1 size-[70px] rounded-[5px] bg-primary/5" aria-hidden />
        <div className="col-start-1 row-start-1 m-[19px] size-8 overflow-hidden">{icon}</div>
      </div>
      <div className="flex min-w-0 flex-col gap-2.5 not-italic">
        <p className="font-semibold text-lg leading-[26px] text-dark">{title}</p>
        <div className="font-normal text-base leading-6 text-muted">{children}</div>
      </div>
    </div>
  )
}

export interface ContactSectionProps {
  className?: string
}

export function ContactSection({ className = '' }: ContactSectionProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <section className={['bg-white overflow-hidden', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-[135px] lg:py-[93px]">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-12 xl:gap-24">
          <div className="flex max-w-xl flex-col gap-[50px]">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold leading-[26px] text-primary">Contact Us</p>
              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-[40px] leading-[48px] text-dark">Get In Touch With Us</h2>
                <div className="text-base font-normal leading-6 text-muted">
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor</p>
                  <p className="mb-0">incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam</p>
                  <p className="mb-0">quis nostrud exercitation ullamco </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[35px]">
              <ContactInfoRow
                title="Our Location"
                icon={<img alt="" className="size-8 object-contain" src={imgVector} />}
              >
                <p className="mb-0">99 S.t Jomblo Park Pekanbaru</p>
                <p className="mb-0">28292. Indonesia</p>
              </ContactInfoRow>

              <ContactInfoRow
                title="Phone Number"
                icon={
                  <div className="relative size-8 overflow-hidden">
                    <div className="absolute inset-[2.79%_2.94%_2.66%_2.73%]">
                      <img alt="" className="block size-full max-w-none" src={imgGroup} />
                    </div>
                    <div className="absolute inset-[4.68%_4.83%_55.47%_54.68%]">
                      <img alt="" className="block size-full max-w-none" src={imgGroup1} />
                    </div>
                    <div className="absolute inset-[19.68%_20.3%_54.06%_53.58%]">
                      <img alt="" className="block size-full max-w-none" src={imgGroup2} />
                    </div>
                  </div>
                }
              >
                <p className="mb-0">(+62)81 414 257 9980</p>
              </ContactInfoRow>

              <ContactInfoRow
                title="Email Address"
                icon={
                  <div className="relative size-8 overflow-hidden">
                    <img alt="" className="absolute inset-[15%_2.66%_14.69%_2.66%] size-full max-w-none object-contain" src={imgVector1} />
                  </div>
                }
              >
                <p className="mb-0">info@yourdomain.com</p>
              </ContactInfoRow>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px] lg:mx-0 lg:ml-auto lg:mr-0">
            <div className="pointer-events-none absolute -right-2 top-0 hidden h-[100px] w-[100px] sm:block lg:-right-8 lg:top-2">
              <img alt="" className="size-full object-contain" src={imgFrame35} />
            </div>
            <div className="pointer-events-none absolute right-0 top-[72px] hidden h-[134px] w-[106px] rotate-180 sm:block lg:right-[-12px]">
              <img alt="" className="size-full object-contain" src={imgDottedShape} />
            </div>
            <div className="pointer-events-none absolute bottom-8 left-0 hidden h-[134px] w-[106px] rotate-180 sm:block lg:-left-6">
              <img alt="" className="size-full object-contain" src={imgDottedShape} />
            </div>

            <div className="relative rounded-lg bg-white p-10 shadow-[0px_4px_18px_0px_rgba(0,0,0,0.07)] sm:p-12 lg:p-[50px]">
              <form className="flex flex-col gap-[25px]" onSubmit={handleSubmit}>
                <Input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  showLabel={false}
                  showHelperText={false}
                  rightIcon={false}
                  fullWidth
                  fieldVariant="primary"
                  autoComplete="name"
                />
                <Input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  showLabel={false}
                  showHelperText={false}
                  rightIcon={false}
                  fullWidth
                  autoComplete="email"
                />
                <Input
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your Phone"
                  showLabel={false}
                  showHelperText={false}
                  rightIcon={false}
                  fullWidth
                  autoComplete="tel"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  showLabel={false}
                  showHelperText={false}
                  showCounter={false}
                  state="Default"
                  className="flex h-[130px] w-full flex-col items-start"
                  value={message}
                  onChangeText={setMessage}
                />
                <Button
                  type="submit"
                  kind="Primary"
                  variant="primary"
                  round="Semi Round"
                  showLeftIcon={false}
                  showRightIcon={false}
                  className="w-full justify-center rounded-[6px] border-0 px-7 py-[13px] text-base font-medium leading-6"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
