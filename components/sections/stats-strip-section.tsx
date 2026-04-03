/** Figma 310:17407 — primary strip with light line texture (mask approximated in CSS). */
export function StatsStripSection({ className = '' }: { className?: string }) {
  return (
    <section
      className={['relative isolate min-h-[321px] overflow-hidden border-y border-stroke/20', className].filter(Boolean).join(' ')}
    >
      <div className="absolute inset-0 bg-primary" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -24deg,
            rgba(255,255,255,0.5) 0px,
            rgba(255,255,255,0.5) 1px,
            transparent 1px,
            transparent 14px
          )`,
        }}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 text-center text-white md:grid-cols-3 md:gap-[70px] lg:px-[160px]">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[48px] font-bold leading-[58px]">5M+</p>
          <p className="max-w-[325px] text-lg font-normal leading-[26px]">Customers visit Omega every month to get their service done.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-[48px] font-bold leading-[58px]">92%</p>
          <p className="max-w-[325px] text-lg font-normal leading-[26px]">Satisfaction rate comes from our awesome customers.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-[48px] font-bold leading-[58px]">500+</p>
          <div className="max-w-[325px] text-lg font-normal leading-[26px]">
            <p className="mb-0">Average Award we have got all</p>
            <p className="mb-0">over internet.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
