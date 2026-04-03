'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Dropdown } from '@/components/ui/dropdown'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

/** Figma 310:18317 — remote assets */
const ASSETS = {
  p1: 'https://www.figma.com/api/mcp/asset/dc69bcd8-1540-412d-889b-609d21c15d28',
  p2: 'https://www.figma.com/api/mcp/asset/cf7748b2-7512-42e9-b397-932ede514ef9',
  p3: 'https://www.figma.com/api/mcp/asset/908c7b1e-ec2b-48d7-8620-f1bb75edbe92',
  payChecked: 'https://www.figma.com/api/mcp/asset/98e99dbb-7f90-4c3a-9650-8936c68c6415',
  payEmpty: 'https://www.figma.com/api/mcp/asset/81bb95fd-4a7e-4539-b419-8b27d1c8efa9',
  payLogos: 'https://www.figma.com/api/mcp/asset/caf43938-861f-4c02-b886-1bc0906ac548',
} as const

const ORDER_LINES = [
  {
    key: '1',
    name: 'Hollow Port',
    meta: ['Brown', 'XL', '1 X 36.00'],
    price: '$36.00',
    img: ASSETS.p1,
    imgClass: 'absolute h-[180.1%] left-[-8.19%] max-w-none top-[-78.6%] w-[120.59%]',
    overflow: true,
  },
  {
    key: '2',
    name: 'Mist White Triblend',
    meta: ['Brown', 'XL', '1 X 36.00'],
    price: '$36.00',
    img: ASSETS.p2,
    imgClass: 'object-cover',
    overflow: false,
  },
  {
    key: '3',
    name: 'Realm Bone',
    meta: ['Brown', 'XL', '1 X 36.00'],
    price: '$36.00',
    img: ASSETS.p3,
    imgClass: 'absolute h-[150.07%] left-0 max-w-none top-[-25.04%] w-full',
    overflow: true,
  },
] as const

type PayMethod = 'bank' | 'cod' | 'gateway'

export function CheckoutPageSection({ className = '' }: { className?: string }) {
  const [pay, setPay] = useState<PayMethod>('bank')
  const [createAccount, setCreateAccount] = useState(true)
  const [shipDifferent, setShipDifferent] = useState(false)

  return (
    <section className={['bg-white py-16 lg:py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 lg:flex-row lg:gap-10 lg:px-[135px] xl:gap-16">
        <div className="min-w-0 flex-1 space-y-10">
          <div>
            <h1 className="text-[40px] font-bold leading-[48px] text-dark">Checkout</h1>
            <p className="mt-3 text-base leading-6 text-muted">There are 3 products in your cart</p>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold leading-[30px] text-dark">Billing Details</h2>
            <div className="grid max-w-[700px] grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2">
              <Input placeholder="First name*" showLabel={false} showHelperText={false} rightIcon={false} fullWidth fieldVariant="primary" />
              <Input placeholder="Last name*" showLabel={false} showHelperText={false} rightIcon={false} fullWidth />
              <Input placeholder="Address*" showLabel={false} showHelperText={false} rightIcon={false} fullWidth className="sm:col-span-2" />
              <Input placeholder="Address line 2" showLabel={false} showHelperText={false} rightIcon={false} fullWidth className="sm:col-span-2" />
              <Dropdown showLabel={false} placeholder="Country*" className="w-full max-w-none sm:col-span-1" items={['USA', 'UK', 'Canada']} />
              <Input placeholder="City/Town*" showLabel={false} showHelperText={false} rightIcon={false} fullWidth />
              <Input placeholder="Postcode / ZIP*" showLabel={false} showHelperText={false} rightIcon={false} fullWidth />
              <Input placeholder="Phone*" showLabel={false} showHelperText={false} rightIcon={false} fullWidth />
              <Textarea
                placeholder="Additional information"
                showLabel={false}
                showHelperText={false}
                showCounter={false}
                className="flex min-h-[264px] w-full flex-col sm:col-span-2"
              />
            </div>

            <div className="flex flex-col gap-5">
              <Checkbox checked={createAccount} onChange={() => setCreateAccount(!createAccount)} label="Create Account" figmaStyle="2" />
              <Checkbox checked={shipDifferent} onChange={() => setShipDifferent(!shipDifferent)} label="Ship to a different address?" />
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-semibold leading-[26px] text-dark">Apply Coupon to get discount!</h3>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <Input
                  placeholder="Coupon code"
                  showLabel={false}
                  showHelperText={false}
                  rightIcon={false}
                  className="w-full max-w-[325px]"
                />
                <Button
                  type="button"
                  kind="Primary"
                  variant="primary"
                  round="Semi Round"
                  showLeftIcon={false}
                  showRightIcon={false}
                  className="rounded-md border-0 bg-dark px-7 py-[13px] text-base font-medium !bg-[#111928]"
                >
                  Apply Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[420px] shrink-0 flex-col gap-8 lg:pt-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold leading-[30px] text-dark">Your Order</h2>
            <div className="overflow-hidden rounded-[10px] border border-stroke bg-white shadow-[0px_10px_20px_0px_rgba(92,115,160,0.07)]">
              <div className="flex items-center justify-between rounded-t-lg bg-[#f9f9f9] px-8 py-5">
                <span className="text-base font-medium text-dark">Product</span>
                <span className="text-base font-medium text-dark">Subtotal</span>
              </div>
              <div className="px-8 pb-6 pt-6">
                <p className="mb-6 text-xl font-semibold text-dark">Your Order</p>
                <ul className="divide-y divide-stroke">
                  {ORDER_LINES.map((line) => (
                    <li key={line.key} className="flex gap-4 py-6 first:pt-0">
                      <div className="relative size-12 shrink-0 overflow-hidden rounded">
                        {line.overflow ? (
                          <img alt="" src={line.img} className={['pointer-events-none absolute max-w-none', line.imgClass].join(' ')} />
                        ) : (
                          <img alt="" src={line.img} className="size-full object-cover" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-medium text-dark">{line.name}</p>
                        <p className="mt-1 text-sm leading-[22px] text-muted">
                          {line.meta.join(' ')}
                        </p>
                      </div>
                      <p className="shrink-0 text-base font-semibold text-dark">{line.price}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 space-y-4 border-t border-stroke pt-4 text-base">
                  <div className="flex justify-between">
                    <span className="font-normal text-dark">Subtotal</span>
                    <span className="font-medium text-dark">$108</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-normal text-dark">Shipping Cost (+)</span>
                    <span className="font-medium text-dark">$10.85</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-normal text-dark">Discount (-)</span>
                    <span className="font-medium text-dark">$9.00</span>
                  </div>
                  <div className="flex justify-between border-t border-stroke pt-4">
                    <span className="font-normal text-dark">Total Payable</span>
                    <span className="font-medium text-dark">$88.15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[10px] border border-stroke bg-white shadow-[0px_10px_20px_0px_rgba(92,115,160,0.07)]">
            <div className="rounded-t-lg bg-[#f9f9f9] px-9 py-4">
              <p className="text-2xl font-bold leading-[30px] text-dark">Payment</p>
            </div>
            <div className="space-y-4 px-9 py-8" role="radiogroup" aria-label="Payment method">
              {(
                [
                  { id: 'bank' as const, label: 'Direct Bank Transfer' },
                  { id: 'cod' as const, label: 'Cash on delivery' },
                  { id: 'gateway' as const, label: 'Online Getway' },
                ] as const
              ).map((opt) => (
                <Button
                  key={opt.id}
                  type="button"
                  role="radio"
                  aria-checked={pay === opt.id}
                  kind="Tertiary"
                  variant="outline"
                  round="md"
                  showLeftIcon
                  showRightIcon={false}
                  iconLeft={
                    <span className="relative size-5 shrink-0">
                      <img alt="" className="size-full" src={pay === opt.id ? ASSETS.payChecked : ASSETS.payEmpty} />
                    </span>
                  }
                  buttonText={opt.label}
                  className="h-auto w-full justify-start gap-2.5 border-0 bg-transparent !px-0 !py-1 text-left text-base font-normal text-dark shadow-none hover:bg-transparent focus-visible:outline-primary"
                  onClick={() => setPay(opt.id)}
                />
              ))}
            </div>
            <div className="px-9 pb-8">
              <img alt="" className="h-[17px] w-auto max-w-full object-contain" src={ASSETS.payLogos} />
            </div>
          </div>

          <Button
            type="button"
            kind="Primary"
            variant="primary"
            round="Semi Round"
            showLeftIcon={false}
            showRightIcon={false}
            className="w-full justify-center rounded-md border-0 py-[13px] text-base font-medium"
          >
            Place an Order
          </Button>
        </div>
      </div>
    </section>
  )
}
