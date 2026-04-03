import { Button } from '@/components/ui/button'

/** Figma 310:19352 */
const imgImage14 = 'https://www.figma.com/api/mcp/asset/91de6373-f2f1-4650-a7c1-d7cb1b54ed05'
const imgImage15 = 'https://www.figma.com/api/mcp/asset/47ecb27e-9630-43fe-99c2-f3ef4a5516bf'
const imgImage16 = 'https://www.figma.com/api/mcp/asset/ffd58001-0bb1-47f5-9df5-4fad5b60798d'
const imgAvatar = 'https://www.figma.com/api/mcp/asset/2d329f09-c70a-47df-aa86-7022dd7e32fe'
const imgLine65 = 'https://www.figma.com/api/mcp/asset/28e46041-2718-4837-907f-2233a7fb3f45'
const imgMap = 'https://www.figma.com/api/mcp/asset/1569d8d5-430c-41fa-86a1-7bb6c7538918'
const imgEnvelope = 'https://www.figma.com/api/mcp/asset/f6ef11e8-3239-44ff-afd6-bd66e80514e5'

const LINES = [
  {
    title: 'Mist black triblend',
    meta: ['Color: White', 'Size: Medium'],
    qty: '01',
    price: '$36.00',
    img: imgImage14,
    imgClass: 'size-full object-cover',
    wrap: false as const,
  },
  {
    title: 'Awesome pest color t-shirt',
    meta: ['Color: Pest', 'Size: Large'],
    qty: '01',
    price: '$25.00',
    img: imgImage15,
    imgClass: 'absolute h-[108%] left-[-13.47%] top-[-3.29%] w-[131.35%] max-w-none',
    wrap: true as const,
  },
  {
    title: 'Yellow t-shirt',
    meta: ['Color: Yellow', 'Size: Medium'],
    qty: '01',
    price: '$45.00',
    img: imgImage16,
    imgClass: 'absolute h-[180.1%] left-[-8.19%] top-[-78.6%] w-[120.59%] max-w-none',
    wrap: true as const,
  },
] as const

export function OrderSummarySection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-white py-16 lg:py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[1170px] flex-col gap-10 px-6 lg:flex-row lg:items-start lg:gap-[30px] lg:px-[135px] xl:px-0">
        <div className="w-full flex-1 rounded-[10px] border border-stroke bg-white shadow-[0px_10px_20px_0px_rgba(92,115,160,0.07)] lg:max-w-[770px]">
          <div className="p-6 sm:p-10">
            <div className="mb-6 sm:mb-10">
              <h2 className="text-2xl font-semibold leading-[30px] text-dark">Order #15478</h2>
              <p className="mt-1 text-base leading-6 text-muted">21st Mart 2021 at 10:34 PM</p>
            </div>

            <div className="mb-6 hidden grid-cols-[1fr_auto_auto] gap-4 rounded-md border-[0.5px] border-stroke bg-[#f9fafb] px-6 py-3 text-base font-medium text-dark sm:grid sm:grid-cols-[minmax(0,1fr)_120px_100px]">
              <span>Product Details</span>
              <span className="text-center">Quantity</span>
              <span className="text-right">Price</span>
            </div>

            <ul className="divide-y divide-stroke">
              {LINES.map((line) => (
                <li key={line.title} className="flex flex-col gap-4 py-6 first:pt-0 sm:grid sm:grid-cols-[minmax(0,1fr)_120px_100px] sm:items-center">
                  <div className="flex gap-5">
                    <div className="relative size-[60px] shrink-0 overflow-hidden rounded-[3px]">
                      {line.wrap ? (
                        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[3px]">
                          <img alt="" className={line.imgClass} src={line.img} />
                        </div>
                      ) : (
                        <img alt="" className={line.imgClass} src={line.img} />
                      )}
                    </div>
                    <div>
                      <p className="text-base font-semibold leading-6 text-dark">{line.title}</p>
                      <div className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-sm leading-[22px] text-muted">
                        {line.meta.map((m) => (
                          <span key={m}>{m}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-base font-medium text-dark sm:text-center">{line.qty}</p>
                  <p className="text-base font-medium text-dark sm:text-right">{line.price}</p>
                </li>
              ))}
            </ul>

            <div className="ml-auto mt-8 max-w-[360px] space-y-4 border-t border-transparent pt-4 text-base text-dark">
              <div className="flex justify-between">
                <span className="font-normal">Subtotal</span>
                <span className="font-medium">$106</span>
              </div>
              <div className="flex justify-between">
                <span className="font-normal">Shipping Cost (+)</span>
                <span className="font-medium">$10.85</span>
              </div>
              <div className="flex justify-between">
                <span className="font-normal">Discount (-)</span>
                <span className="font-medium">$9.00</span>
              </div>
              <div className="relative py-4">
                <img alt="" className="h-px w-full max-w-[360px]" src={imgLine65} />
              </div>
              <div className="flex justify-between font-medium">
                <span>Total Payable</span>
                <span>$107.85</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full shrink-0 rounded-[10px] border border-stroke bg-white shadow-[0px_10px_20px_0px_rgba(92,115,160,0.07)] lg:w-[370px]">
          <div className="flex flex-col gap-8 p-6 sm:p-10">
            <div>
              <h3 className="text-2xl font-semibold leading-[30px] text-dark">Customer</h3>
              <div className="mt-8 flex gap-5">
                <img alt="" className="size-20 shrink-0 rounded object-cover" src={imgAvatar} />
                <div className="space-y-1 text-base leading-6">
                  <p className="font-semibold text-dark">Willium Deno</p>
                  <p className="text-muted">10 Previous Orders</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-3">
                <div className="pt-1">
                  <img alt="" className="size-5" src={imgMap} />
                </div>
                <div>
                  <p className="text-lg font-semibold leading-[26px] text-dark">Shipping Address</p>
                  <p className="mt-1 text-base leading-6 text-muted">
                    New York, USA 2707 Davis
                    <br />
                    Anenue
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="pt-1">
                  <img alt="" className="size-5" src={imgMap} />
                </div>
                <div>
                  <p className="text-lg font-semibold leading-[26px] text-dark">Billing Address</p>
                  <p className="mt-1 text-base leading-6 text-muted">
                    New York, USA 2707 Davis
                    <br />
                    Anenue
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="pt-0.5">
                  <img alt="" className="size-5" src={imgEnvelope} />
                </div>
                <div>
                  <p className="text-lg font-semibold leading-[26px] text-dark">Email Address</p>
                  <p className="mt-1 text-base leading-6 text-muted">contact@yourmail.com</p>
                </div>
              </div>
            </div>

            <Button
              type="button"
              kind="Primary"
              variant="primary"
              round="Semi Round"
              showLeftIcon={false}
              showRightIcon={false}
              className="w-full justify-center rounded-md py-3 text-base font-medium"
            >
              Edit Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
