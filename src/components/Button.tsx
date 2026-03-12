import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}

export function Button({ variant = 'outline', className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-medium leading-6 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900/40'

  const styles =
    variant === 'primary'
      ? 'border border-[#DFE4EA] bg-[#3758F9] text-white hover:bg-[#2F4AE8]'
      : 'border border-[#DFE4EA] bg-white text-[#637381] hover:bg-slate-50'

  return <button className={[base, styles, className].join(' ')} {...props} />
}

