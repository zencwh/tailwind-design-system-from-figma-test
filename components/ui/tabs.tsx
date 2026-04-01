export type TabsStyle = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'

export interface TabsProps {
  style?: TabsStyle
  className?: string
}

function Pill({ text, active = false }: { text: string; active?: boolean }) {
  return (
    <div
      className={[
        'inline-flex items-center justify-center rounded-[6px] px-[35px] py-[12px] text-[16px] font-medium leading-[24px]',
        active ? 'bg-primary text-white' : 'bg-white text-muted',
      ].join(' ')}
    >
      {text}
    </div>
  )
}

export function Tabs({ style = '1', className = '' }: TabsProps) {
  const baseItems = ['Home', 'About Us', 'Our Team', 'Compay Details']

  if (style === '10') {
    return (
      <div className={['flex items-start gap-[40px] border-b border-stroke bg-white px-[25px]', className].join(' ')}>
        {['Profile', 'Password', 'Team', 'Notification', 'Integrations', 'Licenses'].map((item, idx) => (
          <div key={item} className={['py-[15px] text-[16px] font-medium leading-[24px]', idx === 0 ? 'border-b-2 border-primary text-primary' : 'border-b-2 border-white text-muted'].join(' ')}>
            {item}
          </div>
        ))}
      </div>
    )
  }

  if (['7', '8', '9'].includes(style)) {
    return (
      <div
        className={[
          'flex items-start gap-[14px] bg-white',
          style === '7' ? 'rounded-[8px] border border-stroke p-[12px]' : style === '8' ? 'border-b border-stroke p-[20px]' : 'border-b border-stroke px-[20px] pt-[20px]',
          className,
        ].join(' ')}
      >
        {['Home', 'Profile', 'Settings', 'Contact'].map((item, idx) => (
          <div
            key={item}
            className={[
              'inline-flex items-center justify-center rounded-[5px] border border-stroke bg-[#f3f4f6] px-[20px] py-[8px] text-[16px] font-medium leading-[24px]',
              idx === 0 ? 'bg-primary text-white border-primary' : 'text-dark',
              style === '9' ? 'rounded-b-none' : '',
            ].join(' ')}
          >
            {item}
          </div>
        ))}
      </div>
    )
  }

  if (style === '6') {
    return (
      <div className={['flex items-start bg-[#111928]', className].join(' ')}>
        {baseItems.map((item, idx) => (
          <div key={item} className="inline-flex items-center gap-[10px] px-[40px] py-[18px] text-white">
            <span className={['inline-flex size-[30px] items-center justify-center rounded-full text-[14px] font-medium', idx === 0 ? 'bg-white text-primary' : 'bg-[#334155] text-white'].join(' ')}>
              {idx + 1}
            </span>
            <span className="text-[16px] font-medium">{item}</span>
          </div>
        ))}
      </div>
    )
  }

  if (style === '5') {
    return (
      <div className={['relative border-b-2 border-stroke bg-[#f9fafb]', className].join(' ')}>
        <div className="flex items-start">
          {baseItems.map((item, idx) => (
            <div
              key={item}
              className={[
                'inline-flex items-center gap-[10px] px-[40px] py-[18px] text-[16px] font-medium',
                idx === 0 ? 'border-b-2 border-primary bg-[rgba(67,97,255,0.1)] text-primary' : 'text-muted',
              ].join(' ')}
            >
              <span className={['inline-flex size-[30px] items-center justify-center rounded-full text-[14px] font-medium', idx === 0 ? 'bg-primary text-white' : 'bg-[#e5e7eb] text-muted'].join(' ')}>
                {idx + 1}
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (style === '4') {
    return (
      <div className={['flex items-start bg-[#3056d3]', className].join(' ')}>
        {baseItems.map((item, idx) => (
          <div
            key={item}
            className={[
              'inline-flex items-center gap-[10px] px-[40px] py-[18px] text-[16px] font-medium text-white',
              idx === 0 ? 'border-b-2 border-[#1c3fb7]' : '',
            ].join(' ')}
          >
            {item}
          </div>
        ))}
      </div>
    )
  }

  if (style === '3') {
    return (
      <div className={['flex items-start border-b-2 border-stroke bg-[#f9fafb]', className].join(' ')}>
        {baseItems.map((item, idx) => (
          <div
            key={item}
            className={[
              'inline-flex items-center gap-[10px] border-b-2 px-[40px] py-[18px] text-[16px] font-medium',
              idx === 0 ? 'border-primary bg-white text-primary' : 'border-stroke text-muted',
            ].join(' ')}
          >
            {item}
          </div>
        ))}
      </div>
    )
  }

  if (style === '2') {
    return (
      <div className={['flex items-start border-b-2 border-stroke bg-[#f9fafb]', className].join(' ')}>
        {baseItems.map((item, idx) => (
          <div
            key={item}
            className={[
              'inline-flex items-center justify-center border-b-2 px-[40px] py-[18px] text-[16px] font-medium',
              idx === 0 ? 'border-primary bg-[rgba(67,97,255,0.1)] text-primary' : 'border-stroke text-muted',
            ].join(' ')}
          >
            {item}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={['flex items-start gap-[10px] rounded-[10px] border border-stroke bg-white p-[14px]', className].join(' ')}>
      <Pill text="Home" active />
      <Pill text="About Us" />
      <Pill text="Our Team" />
      <Pill text="Compay" />
    </div>
  )
}

