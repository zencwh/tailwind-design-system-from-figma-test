export type ToggleWithTextStyle = '1' | '2' | '3' | '4'

export interface ToggleWithTextProps {
  active?: boolean
  style?: ToggleWithTextStyle
  className?: string
}

function BaseSwitch({ active, darkWhenActive = false }: { active: boolean; darkWhenActive?: boolean }) {
  return (
    <div className={['relative h-[26px] w-[50px] rounded-[30px]', active ? (darkWhenActive ? 'bg-[#111928]' : 'bg-primary') : 'bg-[#d1d5db]'].join(' ')}>
      <span className={['absolute top-[2px] size-[22px] rounded-full bg-white transition-all', active ? 'left-[26px]' : 'left-[2px]'].join(' ')} />
    </div>
  )
}

function ModeSegment({ active, text, icon }: { active: boolean; text: string; icon: string }) {
  return (
    <div className={['inline-flex items-center gap-[6px] rounded-[4px] px-[18px] py-[9px] text-[14px] leading-[22px]', active ? 'bg-white text-primary' : 'bg-[#f9fafb] text-muted'].join(' ')}>
      <span>{icon}</span>
      <span className="font-medium">{text}</span>
    </div>
  )
}

export function ToggleWithText({ active = false, style = '1', className = '' }: ToggleWithTextProps) {
  if (style === '2') {
    return (
      <div className={['inline-flex h-[48px] w-[275px] items-center rounded-[6px] bg-white p-[5px] shadow-[0px_1px_4px_rgba(0,0,0,0.12)]', className].join(' ')}>
        <ModeSegment active={!active} text="Light mode" icon="☼" />
        <ModeSegment active={active} text="Dark mode" icon="☾" />
      </div>
    )
  }

  if (style === '3') {
    return (
      <div className={['inline-flex items-center gap-[15px]', className].join(' ')}>
        <p className="text-[14px] font-medium leading-[22px] text-dark">Light</p>
        <BaseSwitch active={active} darkWhenActive />
        <p className="text-[14px] font-medium leading-[22px] text-dark">Dark</p>
      </div>
    )
  }

  if (style === '4') {
    return (
      <div className={['inline-flex items-center gap-[15px]', className].join(' ')}>
        <p className="text-[14px] font-medium leading-[22px] text-dark">Switch Version</p>
        <div className="inline-flex items-center rounded-[6px] bg-white p-[5px] shadow-[0px_1px_4px_rgba(0,0,0,0.12)]">
          <span className={['inline-flex size-[36px] items-center justify-center rounded-[4px]', active ? 'bg-white text-muted' : 'bg-primary text-white'].join(' ')}>
            ☼
          </span>
          <span className={['inline-flex size-[36px] items-center justify-center rounded-[4px]', active ? 'bg-primary text-white' : 'bg-white text-muted'].join(' ')}>
            ☾
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={['inline-flex items-center gap-[12px]', className].join(' ')}>
      <BaseSwitch active={active} />
      <p className="text-[14px] font-medium leading-[22px] text-dark">{active ? 'Auto Saver On' : 'Auto Saver Off'}</p>
    </div>
  )
}

