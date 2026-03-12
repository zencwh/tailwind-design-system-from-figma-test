import type { ReactNode } from 'react'
import { Button, type ButtonVariant } from './button'

export interface CardMedia {
  src: string
  alt?: string
}

export interface CardProps {
  title: string
  description: string
  media: CardMedia
  ctaLabel: string
  ctaVariant?: ButtonVariant
  badge?: ReactNode
}

export function Card({ title, description, media, ctaLabel, ctaVariant = 'outline', badge }: CardProps) {
  return (
    <article className="w-[370px] overflow-hidden rounded-[8px] bg-white shadow-card">
      <div className="relative h-[230px] w-[370px]">
        <img
          alt={media.alt ?? ''}
          src={media.src}
          className="absolute inset-0 size-full max-w-none object-cover"
          loading="lazy"
        />
      </div>

      <div className="bg-white px-[35px] py-[30px] text-center">
        {badge ? <div className="mb-3 flex justify-center">{badge}</div> : null}

        <div className="mx-auto flex max-w-[300px] flex-col gap-[15px]">
          <h3 className="text-[22px] font-semibold leading-[30px] text-dark">{title}</h3>
          <p className="text-[16px] font-normal leading-[24px] text-muted">{description}</p>
        </div>

        <div className="mt-[28px]">
          <Button variant={ctaVariant}>{ctaLabel}</Button>
        </div>
      </div>
    </article>
  )
}

