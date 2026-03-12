import type { HTMLAttributes } from 'react'
import { Avatar, type AvatarSize, type AvatarCorner } from './avatar'

export interface AvatarGroupItem {
  src?: string
  alt?: string
  name?: string
  badge?: boolean
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  items: AvatarGroupItem[]
  size?: AvatarSize
  corner?: AvatarCorner
  maxVisible?: number
}

const overlapBySize: Record<AvatarSize, string> = {
  xs: '-ml-2',
  sm: '-ml-2.5',
  md: '-ml-3',
  lg: '-ml-3.5',
  xl: '-ml-4',
}

export function AvatarGroup({
  items,
  size = 'lg',
  corner = 'full',
  maxVisible = 5,
  className = '',
  ...rest
}: AvatarGroupProps) {
  const visible = items.slice(0, maxVisible)
  const remaining = items.length - visible.length

  return (
    <div className={['flex items-center', className].join(' ')} {...rest}>
      {visible.map((item, index) => (
        <div key={`${item.src ?? item.name ?? index}`} className={index === 0 ? '' : overlapBySize[size]}>
          <Avatar
            src={item.src}
            alt={item.alt}
            name={item.name}
            size={size}
            corner={corner}
            badge={item.badge}
            className="bg-white"
          />
        </div>
      ))}

      {remaining > 0 ? (
        <div className={overlapBySize[size]}>
          <Avatar
            name={`+${remaining}`}
            size={size}
            corner={corner}
            className="bg-[#E5E7EB] text-[12px] font-medium text-[#111928]"
          />
        </div>
      ) : null}
    </div>
  )
}

