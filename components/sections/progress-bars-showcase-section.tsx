import { Fragment } from 'react'
import { ProgressBars } from '@/components/ui/progress-bars'

/** Figma 310:22514 */
const ROWS: Array<{ type: 'Primary' | 'Positive' | 'Negative'; label: string }> = [
  { type: 'Primary', label: 'Primary' },
  { type: 'Positive', label: 'Positive' },
  { type: 'Negative', label: 'Negative' },
]

const PERCENTS = ['80%', '50%', '90%'] as const
const STYLES = ['1', '2', '3'] as const

export function ProgressBarsShowcaseSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-white py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-[1600px] overflow-x-auto px-6">
        <div className="min-w-[900px]">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] items-start gap-x-12 gap-y-12">
            <div />
            {ROWS.map((r) => (
              <p key={r.label} className="text-sm font-medium text-muted">
                {r.label}
              </p>
            ))}
            {STYLES.map((style) => (
              <Fragment key={style}>
                <p className="text-sm font-medium text-muted">Style {style}</p>
                {ROWS.map((r) => (
                  <div key={`${style}-${r.type}`} className="flex flex-col gap-10">
                    {PERCENTS.map((p) => (
                      <ProgressBars
                        key={p}
                        type={r.type}
                        style={style}
                        percentage={p}
                        className="w-full max-w-[470px]"
                      />
                    ))}
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
