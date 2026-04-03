import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

/** Figma 310:20649 */
const imgAvatar = 'https://www.figma.com/api/mcp/asset/0ba83086-cfa2-48bc-8739-a38987700f8b'
const imgHeaderGrad = 'https://www.figma.com/api/mcp/asset/48cfb2c8-78c9-465b-863e-ca5ccb699c0e'
const imgFooterGrad = 'https://www.figma.com/api/mcp/asset/bdabdd21-ea27-4617-8470-b88698f09787'
const imgMore = 'https://www.figma.com/api/mcp/asset/a22afc59-ada8-459a-a1e7-71141f06aebe'
const imgPaperclip = 'https://www.figma.com/api/mcp/asset/e2ec503d-fb54-41a8-a34d-8120553e0632'
const imgSmile = 'https://www.figma.com/api/mcp/asset/81be6cb9-f8cb-4e02-851f-b516d2a53a25'
const imgSend = 'https://www.figma.com/api/mcp/asset/b53c9dee-8ccd-4b31-82ba-40d42900f9d6'

export function ChatMessagePanelSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[560px] px-6">
        <div className="relative flex h-[684px] flex-col overflow-hidden rounded-lg border border-stroke bg-white shadow-sm">
          <div className="absolute left-0 right-0 top-[12.5%] h-px overflow-hidden">
            <img alt="" className="h-full w-full object-cover" src={imgHeaderGrad} />
          </div>
          <header className="flex shrink-0 items-center justify-between px-5 pt-5">
            <div className="flex items-center gap-[18px]">
              <img alt="" className="size-[52px] rounded-full object-cover" height={52} src={imgAvatar} width={52} />
              <div>
                <p className="text-base font-medium leading-6 text-dark">Andri Thomas</p>
                <p className="text-sm leading-[22px] text-muted">Reply to message</p>
              </div>
            </div>
            <Button
              type="button"
              kind="Secondary"
              variant="outline"
              round="md"
              showLeftIcon={false}
              showRightIcon={false}
              className="size-9 min-w-9 rounded border-[0.5px] border-stroke !bg-[#f3f4f6] !p-0"
            >
              <img alt="" className="mx-auto size-[18px]" src={imgMore} />
            </Button>
          </header>

          <div className="relative flex flex-1 flex-col gap-6 overflow-y-auto px-5 py-8">
            <div className="flex max-w-[85%] flex-col gap-2">
              <span className="text-sm font-medium text-muted">Andri Thomas</span>
              <div className="rounded-2xl rounded-bl-md bg-[#f3f4f6] px-5 py-3 text-base leading-6 text-muted">
                <p className="mb-0">I want to make an appointment tomorrow</p>
                <p>from 2:00 to 5:00pm?</p>
              </div>
              <span className="text-xs leading-5 text-muted">1:55pm</span>
            </div>

            <div className="ml-auto flex max-w-[85%] flex-col items-end gap-2">
              <div className="rounded-2xl rounded-br-md bg-primary px-5 py-3 text-base leading-6 text-white">
                <p className="mb-0">Hello, Thomas! I will check the schedule</p>
                <p>and inform you</p>
              </div>
              <span className="text-xs leading-5 text-muted">1:58pm</span>
            </div>

            <div className="flex max-w-[85%] flex-col gap-2">
              <span className="text-sm font-medium text-muted">Andri Thomas</span>
              <div className="rounded-2xl rounded-bl-md bg-[#f3f4f6] px-5 py-3 text-base leading-6 text-muted">
                Ok, Thanks for your reply.
              </div>
              <span className="text-xs leading-5 text-muted">1:59pm</span>
            </div>

            <div className="ml-auto flex max-w-[85%] flex-col items-end gap-2">
              <div className="rounded-2xl rounded-br-md bg-primary px-5 py-3 text-base leading-6 text-white">You are welcome!</div>
              <span className="text-xs leading-5 text-muted">2:00pm</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px">
            <img alt="" className="h-full w-full" src={imgFooterGrad} />
          </div>
          <footer className="flex shrink-0 items-end gap-3 px-5 pb-5 pt-4">
            <div className="relative min-w-0 flex-1">
              <Textarea
                placeholder="Type something here..."
                showLabel={false}
                showHelperText={false}
                showCounter={false}
                className="!h-auto min-h-[52px] w-full flex-col [&_textarea]:min-h-[48px] [&_textarea]:pr-24 [&_textarea]:text-[#8899a8]"
              />
              <div className="pointer-events-none absolute bottom-4 right-4 flex gap-4">
                <img alt="" className="size-5" src={imgPaperclip} />
                <img alt="" className="size-5" src={imgSmile} />
              </div>
            </div>
            <Button
              type="button"
              kind="Primary"
              variant="primary"
              round="md"
              showLeftIcon={false}
              showRightIcon={false}
              className="size-12 min-w-12 shrink-0 rounded-md !p-0"
            >
              <img alt="" className="mx-auto size-5" src={imgSend} />
            </Button>
          </footer>
        </div>
      </div>
    </section>
  )
}
