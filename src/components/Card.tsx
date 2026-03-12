import { Button } from './Button'

export type CardProps = {
  imageAlt: string
  imageSrc: string
  title: string
  description: string
  ctaLabel: string
  ctaVariant?: 'primary' | 'outline'
}

export function Card({
  imageAlt,
  imageSrc,
  title,
  description,
  ctaLabel,
  ctaVariant = 'outline',
}: CardProps) {
  return (
    <article className="w-[370px] overflow-hidden rounded-[8px] bg-white shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]">
      <div className="h-[230px] w-[370px] bg-slate-200">
        <img
          alt={imageAlt}
          src={imageSrc}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="bg-white px-[35px] py-[30px] text-center">
        <div className="mx-auto flex max-w-[300px] flex-col gap-[15px]">
          <h3 className="text-[22px] font-semibold leading-[30px] text-[#111928]">{title}</h3>
          <p className="text-[16px] font-normal leading-[24px] text-[#637381]">{description}</p>
        </div>

        <div className="mt-[28px]">
          <Button variant={ctaVariant}>{ctaLabel}</Button>
        </div>
      </div>
    </article>
  )
}

