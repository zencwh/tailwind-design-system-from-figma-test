'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

/** Figma 310:20825 — December 2025, selected 19, secondary highlight 18 */
const imgChevL = 'https://www.figma.com/api/mcp/asset/44df7e4d-9cb8-4ee4-8033-0f416ed99acd'
const imgChevR = 'https://www.figma.com/api/mcp/asset/54f714ad-233d-4665-9412-5b72e4e4b7ba'

const WEEK = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] as const

/** Dec 2025 (Mon–Sun weeks); Jan 1–3 muted */
const CELLS: { label: string; muted: boolean }[][] = [
  [
    { label: '1', muted: false },
    { label: '2', muted: false },
    { label: '3', muted: false },
    { label: '4', muted: false },
    { label: '5', muted: false },
    { label: '6', muted: false },
    { label: '7', muted: false },
  ],
  [
    { label: '8', muted: false },
    { label: '9', muted: false },
    { label: '10', muted: false },
    { label: '11', muted: false },
    { label: '12', muted: false },
    { label: '13', muted: false },
    { label: '14', muted: false },
  ],
  [
    { label: '15', muted: false },
    { label: '16', muted: false },
    { label: '17', muted: false },
    { label: '18', muted: false },
    { label: '19', muted: false },
    { label: '20', muted: false },
    { label: '21', muted: false },
  ],
  [
    { label: '22', muted: false },
    { label: '23', muted: false },
    { label: '24', muted: false },
    { label: '25', muted: false },
    { label: '26', muted: false },
    { label: '27', muted: false },
    { label: '28', muted: false },
  ],
  [
    { label: '29', muted: false },
    { label: '30', muted: false },
    { label: '31', muted: false },
    { label: '1', muted: true },
    { label: '2', muted: true },
    { label: '3', muted: true },
    { label: '4', muted: true },
  ],
]

export function CalendarDatePickerSection({ className = '' }: { className?: string }) {
  const [selected, setSelected] = useState('19')

  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[510px] px-6">
        <div className="rounded-xl bg-white p-6 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)]">
          <div className="mb-8 flex items-center justify-between">
            <Button
              type="button"
              kind="Secondary"
              variant="outline"
              round="md"
              showLeftIcon={false}
              showRightIcon={false}
              className="size-[46px] min-w-[46px] rounded-[7px] border-[0.5px] !border-stroke !bg-[#f3f4f6] !p-0"
            >
              <img alt="" className="mx-auto size-6" src={imgChevL} />
            </Button>
            <p className="text-xl font-medium leading-[26px] text-dark">December 2025</p>
            <Button
              type="button"
              kind="Secondary"
              variant="outline"
              round="md"
              showLeftIcon={false}
              showRightIcon={false}
              className="size-[46px] min-w-[46px] rounded-[7px] border-[0.5px] !border-stroke !bg-[#f3f4f6] !p-0"
            >
              <img alt="" className="mx-auto size-6" src={imgChevR} />
            </Button>
          </div>

          <div className="mb-2 grid grid-cols-7 gap-y-2 text-center text-lg font-medium text-muted">
            {WEEK.map((d) => (
              <span key={d} className="py-2">
                {d}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            {CELLS.map((row, ri) => (
              <div key={ri} className="grid grid-cols-7 gap-1 text-center text-lg font-medium">
                {row.map((cell, ci) => {
                  const key = `${ri}-${ci}-${cell.label}`
                  const isSel = !cell.muted && cell.label === selected
                  const isSecondary = !cell.muted && cell.label === '18'
                  return (
                    <button
                      key={key}
                      type="button"
                      disabled={cell.muted}
                      onClick={() => !cell.muted && setSelected(cell.label)}
                      className={[
                        'mx-auto flex h-10 w-10 items-center justify-center rounded-md py-2',
                        cell.muted ? 'cursor-default text-muted' : 'text-dark',
                        isSecondary && !isSel ? 'border-[0.5px] border-stroke bg-[#f3f4f6]' : '',
                        isSel ? 'bg-primary text-white' : '',
                      ].join(' ')}
                    >
                      {cell.label}
                    </button>
                  )
                })}
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-5">
            <Button
              type="button"
              kind="Tertiary"
              variant="outline"
              round="Semi Round"
              showLeftIcon={false}
              showRightIcon={false}
              className="flex-1 rounded-md !border-[#111928] !bg-[#111928] py-3 text-base font-normal !text-white"
            >
              Remove
            </Button>
            <Button
              type="button"
              kind="Primary"
              variant="primary"
              round="Semi Round"
              showLeftIcon={false}
              showRightIcon={false}
              className="flex-1 rounded-md py-3 text-base font-medium"
            >
              Done
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
