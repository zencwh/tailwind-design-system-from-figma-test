import type { HTMLAttributes } from 'react'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type AvatarCorner = 'square' | 'semi' | 'radius' | 'full'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  name?: string
  size?: AvatarSize
  corner?: AvatarCorner
  badge?: boolean
}

const sizeMap: Record<AvatarSize, string> = {
  xs: 'h-6 w-6 text-[10px]',
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-14 w-14 text-base',
}

const cornerMap: Record<AvatarCorner, string> = {
  square: 'rounded-none',
  semi: 'rounded-[4px]',
  radius: 'rounded-[8px]',
  full: 'rounded-full',
}

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  corner = 'full',
  badge = false,
  className = '',
  ...props
}: AvatarProps) {
  const initials =
    name
      ?.split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('') ?? ''

  const base =
    'relative inline-flex items-center justify-center bg-slate-100 text-dark border border-stroke overflow-hidden'

  const sizeClasses = sizeMap[size]
  const cornerClasses = cornerMap[corner]

  return (
    <div className={[base, sizeClasses, cornerClasses, className].join(' ')} {...props}>
      {src ? (
        <img src={src} alt={alt ?? name ?? 'Avatar'} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        <span>{initials}</span>
      )}

      {badge ? (
        <span className="absolute right-[-2px] top-[-2px] inline-flex h-2 w-2 items-center justify-center rounded-full bg-[#22AD5C] ring-1 ring-white" />
      ) : null}
    </div>
  )
}
