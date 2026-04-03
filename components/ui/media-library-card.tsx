export interface MediaLibraryCardProps {
  imageSrc: string
  imageAlt?: string
  fileName: string
  fileSize: string
  /** Extra classes on the thumbnail &lt;img&gt; (e.g. Figma crop offsets). */
  imageClassName?: string
  /** When true, thumbnail uses overflow-hidden + absolute img (for zoomed crops). */
  imageOverflow?: boolean
  className?: string
}

/**
 * Figma node 310:16124 (My Library) — thumbnail + filename + size.
 */
export function MediaLibraryCard({
  imageSrc,
  imageAlt = '',
  fileName,
  fileSize,
  imageClassName = 'object-cover',
  imageOverflow = false,
  className = '',
}: MediaLibraryCardProps) {
  return (
    <div className={['flex w-[270px] max-w-full flex-col gap-2.5', className].filter(Boolean).join(' ')}>
      <div className="relative h-[190px] w-full shrink-0 overflow-hidden rounded-[5px]">
        {imageOverflow ? (
          <img alt={imageAlt} src={imageSrc} className={['pointer-events-none absolute max-w-none', imageClassName].join(' ')} />
        ) : (
          <img alt={imageAlt} src={imageSrc} className={['pointer-events-none absolute inset-0 size-full rounded-[5px]', imageClassName].join(' ')} />
        )}
      </div>
      <div className="flex flex-col gap-[3px] whitespace-nowrap not-italic">
        <p className="text-base font-medium leading-6 text-dark">{fileName}</p>
        <p className="text-sm font-normal leading-[22px] text-muted">{fileSize}</p>
      </div>
    </div>
  )
}
