import type { HTMLAttributes } from 'react'

export type AvatarSize = 'sm' | 'md' | 'lg'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  name?: string
  size?: AvatarSize
}

const sizeMap: Record<AvatarSize, string> = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
}

export function Avatar({ src, alt, name, size = 'md', className = '', ...props }: AvatarProps) {
  const initials =
    name
      ?.split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('') ?? ''

  const base =
    'inline-flex items-center justify-center rounded-full bg-slate-100 text-dark border border-stroke overflow-hidden'

  const sizeClasses = sizeMap[size]

  return (
    <div className={[base, sizeClasses, className].join(' ')} {...props}>
      {src ? (
        <img src={src} alt={alt ?? name ?? 'Avatar'} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  )
}

