export type PaginationStyle = '1' | '2' | '3' | '4' | '5'

export interface PaginationProps {
  style?: PaginationStyle
  className?: string
}

function ArrowButton({ dir, soft = false }: { dir: 'left' | 'right'; soft?: boolean }) {
  return (
    <button
      type="button"
      className={[
        'inline-flex size-[34px] items-center justify-center rounded-[6px] border border-stroke bg-white text-muted',
        soft ? 'bg-[#f3f4f6] text-dark border-[#f3f4f6]' : '',
      ].join(' ')}
    >
      {dir === 'left' ? '‹' : '›'}
    </button>
  )
}

function Page({ n, active = false, rounded = false }: { n: string; active?: boolean; rounded?: boolean }) {
  return (
    <span
      className={[
        'inline-flex h-[34px] min-w-[34px] items-center justify-center border border-stroke bg-white px-3 text-[16px] text-muted',
        rounded ? 'rounded-full' : 'rounded-[6px]',
        active ? 'border-primary bg-primary text-white' : '',
      ].join(' ')}
    >
      {n}
    </span>
  )
}

export function Pagination({ style = '1', className = '' }: PaginationProps) {
  if (style === '4') {
    return (
      <div className={['inline-flex items-center gap-4 rounded-[4px] bg-white p-3 shadow-card', className].join(' ')}>
        <button type="button" className="inline-flex items-center gap-1 rounded-[4px] px-2 py-[5px] text-[10px] text-muted">
          ‹ Previous
        </button>
        <span className="text-muted">1</span>
        <span className="text-muted">2</span>
        <span className="inline-flex size-[25px] items-center justify-center rounded-[3px] bg-primary text-white">3</span>
        <span className="text-muted">4</span>
        <span className="text-muted">5</span>
        <button type="button" className="inline-flex items-center gap-1 rounded-[4px] bg-[#f3f4f6] px-2 py-[5px] text-[10px] text-dark">
          Next ›
        </button>
      </div>
    )
  }

  if (style === '5') {
    return (
      <div className={['inline-flex items-center gap-2 rounded-[45px] bg-white px-3 py-2 shadow-[0px_1px_3px_rgba(0,0,0,0.13)]', className].join(' ')}>
        <Page n="←" rounded />
        <Page n="1" rounded />
        <Page n="2" rounded />
        <Page n="3" rounded />
        <Page n="4" active rounded />
        <Page n="5" rounded />
        <Page n="→" rounded />
      </div>
    )
  }

  if (style === '3') {
    return (
      <div className={['inline-flex items-center gap-5 rounded-[3px] bg-white px-3 py-2 shadow-[0px_1px_3px_rgba(0,0,0,0.13)]', className].join(' ')}>
        <span className="text-muted">‹</span>
        <span className="text-muted">1</span>
        <span className="inline-flex size-[25px] items-center justify-center rounded-[3px] bg-primary text-white">2</span>
        <span className="text-muted">3</span>
        <span className="text-muted">4</span>
        <span className="text-muted">5</span>
        <span className="text-muted">...</span>
        <span className="text-muted">12</span>
        <span className="text-muted">›</span>
      </div>
    )
  }

  if (style === '2') {
    return (
      <div className={['inline-flex items-center rounded-[10px] border border-stroke bg-white p-2', className].join(' ')}>
        <Page n="1" active />
        <Page n="2" />
        <Page n="3" />
        <Page n="4" />
        <Page n="5" />
        <ArrowButton dir="right" />
      </div>
    )
  }

  return (
    <div className={['inline-flex items-center gap-2 rounded-[10px] border border-stroke bg-white p-2', className].join(' ')}>
      <ArrowButton dir="left" />
      <Page n="1" active />
      <Page n="2" />
      <Page n="3" />
      <Page n="4" />
      <ArrowButton dir="right" />
    </div>
  )
}

