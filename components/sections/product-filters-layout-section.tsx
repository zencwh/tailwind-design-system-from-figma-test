'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

/** Figma 310:19236 */
const imgChevron = 'https://www.figma.com/api/mcp/asset/5e1a36cf-907a-4d73-9c36-03a8e0df7c35'
const imgList = 'https://www.figma.com/api/mcp/asset/12c2198c-bef1-4dde-ade7-041b1c60603d'
const imgGrid = 'https://www.figma.com/api/mcp/asset/e8cd51f5-90d0-422a-a4fe-76200dacf9ff'
const imgCheck = 'https://www.figma.com/api/mcp/asset/69e10e30-181b-4df3-9864-9ee19878966a'

const PRODUCT_TYPES = ['Standalone', 'Mobile', 'Clothing', 'Tethered'] as const
const SIZES = ['M', 'L', 'XL', 'XXL'] as const
const COLORS = [
  { id: 'black', label: 'Black', swatch: 'bg-[#111928]', border: '' },
  { id: 'red', label: 'Red', swatch: 'bg-[#f23030]', border: 'border border-stroke' },
  { id: 'blue', label: 'Blue', swatch: 'bg-primary', border: '' },
  { id: 'green', label: 'Green', swatch: 'bg-[#13c296]', border: 'border border-[#13c296]' },
] as const

function FilterCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="relative flex w-full max-w-[370px] flex-col gap-[45px] rounded-lg border border-stroke bg-white px-[30px] pb-[30px] pt-[15px]">
      <h3 className="text-lg font-semibold leading-[26px] text-dark">{title}</h3>
      <div className="absolute left-0 top-[53px] h-px w-full bg-stroke" aria-hidden />
      {children}
    </div>
  )
}

function ColorRow({
  label,
  swatchClass,
  borderClass,
  checked,
  onChange,
}: {
  label: string
  swatchClass: string
  borderClass: string
  checked: boolean
  onChange: () => void
}) {
  return (
    <Button
      type="button"
      kind="Tertiary"
      variant="outline"
      round="md"
      showLeftIcon={false}
      showRightIcon={false}
      onClick={onChange}
      className="h-auto w-full justify-start border-0 bg-transparent !p-0 text-left shadow-none hover:bg-transparent"
    >
      <span className="inline-flex items-center gap-2.5">
        <span className={['inline-flex size-5 shrink-0 items-center justify-center rounded', swatchClass, borderClass].join(' ')}>
          {checked ? <img alt="" className="size-[9px]" src={imgCheck} /> : null}
        </span>
        <span className="text-base font-medium leading-6 text-dark">{label}</span>
      </span>
    </Button>
  )
}

export function ProductFiltersLayoutSection({ className = '' }: { className?: string }) {
  const [productType, setProductType] = useState<Record<(typeof PRODUCT_TYPES)[number], boolean>>({
    Standalone: false,
    Mobile: true,
    Clothing: false,
    Tethered: false,
  })
  const [color, setColor] = useState<(typeof COLORS)[number]['id']>('green')
  const [size, setSize] = useState<Record<(typeof SIZES)[number], boolean>>({
    M: false,
    L: true,
    XL: false,
    XXL: false,
  })
  const [view, setView] = useState<'grid' | 'list'>('grid')

  return (
    <section className={['bg-white py-16 lg:py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[1170px] flex-col gap-10 px-6 lg:px-0">
        <div className="flex h-[90px] w-full items-center justify-between rounded-lg border border-stroke bg-white px-6">
          <Button
            type="button"
            kind="Secondary"
            variant="outline"
            round="md"
            showLeftIcon={false}
            showRightIcon={false}
            className="gap-2.5 rounded-[5px] border-stroke !px-[18px] !py-2.5 text-base font-medium text-dark"
          >
            <span className="inline-flex items-center gap-2.5">
              Best Selling
              <img alt="" className="size-3.5 shrink-0" src={imgChevron} />
            </span>
          </Button>
          <div className="flex gap-2.5">
            <Button
              type="button"
              kind={view === 'grid' ? 'Primary' : 'Secondary'}
              variant={view === 'grid' ? 'primary' : 'outline'}
              round="md"
              showLeftIcon
              showRightIcon={false}
              iconLeft={
                <img
                  alt=""
                  className={['size-[22px]', view === 'grid' ? 'brightness-0 invert' : ''].filter(Boolean).join(' ')}
                  src={imgGrid}
                />
              }
              buttonText=""
              className={[
                'size-[46px] min-w-[46px] !p-0',
                view === 'grid' ? '!border-primary !bg-primary' : '!border-stroke',
              ].join(' ')}
              onClick={() => setView('grid')}
            />
            <Button
              type="button"
              kind={view === 'list' ? 'Primary' : 'Secondary'}
              variant={view === 'list' ? 'primary' : 'outline'}
              round="md"
              showLeftIcon
              showRightIcon={false}
              iconLeft={
                <img
                  alt=""
                  className={['size-[22px]', view === 'list' ? 'brightness-0 invert' : ''].filter(Boolean).join(' ')}
                  src={imgList}
                />
              }
              buttonText=""
              className={[
                'size-[46px] min-w-[46px] !p-0',
                view === 'list' ? '!border-primary !bg-primary' : '!border-stroke',
              ].join(' ')}
              onClick={() => setView('list')}
            />
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[30px]">
          <aside className="flex w-full shrink-0 flex-col gap-[30px] lg:w-[370px]">
            <FilterCard title="Product Type">
              <div className="flex flex-col gap-[15px]">
                {PRODUCT_TYPES.map((pt) => (
                  <Checkbox
                    key={pt}
                    checked={productType[pt]}
                    onChange={() => setProductType((s) => ({ ...s, [pt]: !s[pt] }))}
                    label={pt}
                    figmaStyle="2"
                  />
                ))}
              </div>
            </FilterCard>

            <FilterCard title="Choose Color">
              <div className="flex flex-col gap-[15px]">
                {COLORS.map((c) => (
                  <ColorRow
                    key={c.id}
                    label={c.label}
                    swatchClass={c.swatch}
                    borderClass={c.border}
                    checked={color === c.id}
                    onChange={() => setColor(c.id)}
                  />
                ))}
              </div>
            </FilterCard>

            <FilterCard title="Select Size">
              <div className="flex flex-col gap-[15px]">
                {SIZES.map((sz) => (
                  <Checkbox
                    key={sz}
                    checked={size[sz]}
                    onChange={() => setSize((s) => ({ ...s, [sz]: !s[sz] }))}
                    label={sz}
                    figmaStyle="2"
                  />
                ))}
              </div>
            </FilterCard>
          </aside>

          <div className="relative min-h-[400px] flex-1 rounded-lg border border-dashed border-stroke bg-[#f3f4f6] lg:min-h-[855px]">
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[44px] font-semibold leading-[55px] text-dark opacity-[0.12]">
              Products
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
