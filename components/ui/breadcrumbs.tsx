import type { HTMLAttributes, ReactNode } from 'react'

export type BreadcrumbVariant =
  | 'default' // white card, border, shadow
  | 'subtle' // light gray background card
  | 'bar' // bottom bar with underline
  | 'primary' // primary background
  | 'dark' // dark background

export interface BreadcrumbItem {
  href?: string
  label: string
  icon?: ReactNode
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  variant?: BreadcrumbVariant
  showHomeIcon?: boolean
  separator?: ReactNode
}

export function Breadcrumbs({
  items,
  variant = 'default',
  showHomeIcon = false,
  separator = '/',
  className = '',
  ...rest
}: BreadcrumbsProps) {
  if (!items.length) return null

  const lastIndex = items.length - 1

  const base =
    'flex items-center gap-3 text-[16px] leading-[24px] font-medium rounded-[8px] border border-stroke shadow-card'

  const variantClasses =
    variant === 'subtle'
      ? 'bg-[#F9FAFB]'
      : variant === 'bar'
        ? 'w-full max-w-[1170px] border-b border-x-0 border-t-0 rounded-none shadow-none pb-5 gap-2'
        : variant === 'primary'
          ? 'bg-primary text-white'
          : variant === 'dark'
            ? 'bg-[#111928] text-white'
            : 'bg-white'

  const padding =
    variant === 'bar'
      ? ''
      : 'px-[30px] py-[22px]'

  const containerClasses = [base, variantClasses, padding, className].join(' ').trim()

  return (
    <nav aria-label="Breadcrumb" className={containerClasses} {...rest}>
      {showHomeIcon && (
        <>
          <HomeCrumb isOnDark={variant === 'primary' || variant === 'dark'} />
          <Separator separator={separator} isOnDark={variant === 'primary' || variant === 'dark'} />
        </>
      )}

      {items.map((item, index) => {
        const isLast = index === lastIndex
        const isOnDark = variant === 'primary' || variant === 'dark'
        const colorClass = isLast ? (isOnDark ? 'text-white' : 'text-dark') : isOnDark ? 'text-white/80' : 'text-muted'

        const content = (
          <span className={['inline-flex items-center gap-2', colorClass].join(' ')}>
            {item.icon ? <span className="inline-flex size-[18px] items-center justify-center">{item.icon}</span> : null}
            <span>{item.label}</span>
          </span>
        )

        return (
          <span key={item.label} className="inline-flex items-center gap-3">
            {item.href && !isLast ? (
              <a href={item.href} className="hover:underline">
                {content}
              </a>
            ) : (
              content
            )}
            {!isLast && <Separator separator={separator} isOnDark={isOnDark} />}
          </span>
        )
      })}
    </nav>
  )
}

function HomeCrumb({ isOnDark }: { isOnDark: boolean }) {
  const colorClass = isOnDark ? 'text-white' : 'text-muted'
  return (
    <span className={['inline-flex items-center gap-2', colorClass].join(' ')}>
      <span className="inline-flex size-[18px] items-center justify-center">
        <span className="block h-[14px] w-[14px] rounded-[3px] border border-stroke bg-white" />
      </span>
      <span>Home</span>
    </span>
  )
}

function Separator({ separator, isOnDark }: { separator: ReactNode; isOnDark: boolean }) {
  const colorClass = isOnDark ? 'text-white/70' : 'text-muted'
  return <span className={['mx-1', colorClass].join(' ')}>{separator}</span>
}

