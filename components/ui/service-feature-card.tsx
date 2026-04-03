export interface ServiceFeatureCardProps {
  title: string
  description: string
  iconSrc: string
  iconAlt?: string
  /** Absolute inset classes for the icon graphic inside the 36×36 clip (Figma-exported). */
  iconInsetClassName: string
  className?: string
}

/**
 * Figma node 310:16721 — service tile (primary icon tile + title + body).
 */
export function ServiceFeatureCard({
  title,
  description,
  iconSrc,
  iconAlt = '',
  iconInsetClassName,
  className = '',
}: ServiceFeatureCardProps) {
  return (
    <article
      className={[
        'flex w-full max-w-[370px] flex-col gap-[30px] rounded-[20px] bg-white p-10 shadow-[0px_5px_12px_0px_rgba(0,0,0,0.1)]',
        className,
      ].join(' ')}
    >
      <div className="relative inline-grid shrink-0 place-items-start leading-none">
        <div
          className="col-start-1 row-start-1 size-[70px] rounded-[15px] bg-primary shadow-[0px_4px_11px_0px_rgba(0,0,0,0.06)]"
          aria-hidden
        />
        <div className="relative col-start-1 row-start-1 m-[17px] size-9 overflow-clip">
          <img
            alt={iconAlt}
            src={iconSrc}
            className={['pointer-events-none absolute block max-w-none', iconInsetClassName].join(' ')}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3.5 not-italic">
        <h3 className="text-2xl font-semibold leading-[30px] text-dark">{title}</h3>
        <p className="max-w-[290px] text-base font-normal leading-6 text-muted">{description}</p>
      </div>
    </article>
  )
}
