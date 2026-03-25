const headingScale = [
  { name: 'Heading H1', weight: 'Bold', size: '60px', lineHeight: '72px', className: 'text-[60px] leading-[72px] font-bold' },
  { name: 'Heading H2', weight: 'Bold', size: '48px', lineHeight: '58px', className: 'text-[48px] leading-[58px] font-bold' },
  { name: 'Heading H3', weight: 'Bold', size: '40px', lineHeight: '48px', className: 'text-[40px] leading-[48px] font-bold' },
  { name: 'Heading H4', weight: 'Bold', size: '30px', lineHeight: '38px', className: 'text-[30px] leading-[38px] font-bold' },
  { name: 'Heading H5', weight: 'SemiBold', size: '28px', lineHeight: '40px', className: 'text-[28px] leading-[40px] font-semibold' },
  { name: 'Heading H6', weight: 'SemiBold', size: '24px', lineHeight: '30px', className: 'text-[24px] leading-[30px] font-semibold' },
]

const bodyScale = [
  { name: 'Body Large / Regular', className: 'text-[18px] leading-[26px] font-normal' },
  { name: 'Body Large / Medium', className: 'text-[18px] leading-[26px] font-medium' },
  { name: 'Body Large / SemiBold', className: 'text-[18px] leading-[26px] font-semibold' },
  { name: 'Body Large / Bold', className: 'text-[18px] leading-[26px] font-bold' },
  { name: 'Body Medium / Regular', className: 'text-[16px] leading-[24px] font-normal' },
  { name: 'Body Medium / Medium', className: 'text-[16px] leading-[24px] font-medium' },
  { name: 'Body Medium / SemiBold', className: 'text-[16px] leading-[24px] font-semibold' },
  { name: 'Body Medium / Bold', className: 'text-[16px] leading-[24px] font-bold' },
  { name: 'Body Small / Regular', className: 'text-[14px] leading-[22px] font-normal' },
  { name: 'Body Small / Medium', className: 'text-[14px] leading-[22px] font-medium' },
  { name: 'Body XS / Regular', className: 'text-[12px] leading-[20px] font-normal' },
  { name: 'Body XS / Medium', className: 'text-[12px] leading-[20px] font-medium' },
]

export function TypographyShowcase() {
  return (
    <section className="rounded-[25px] bg-[#F9FAFB] px-8 py-8 shadow-[0px_10px_20px_0px_rgba(92,115,160,0.07)] md:px-14">
      <header className="border-b border-stroke pb-6">
        <h2 className="text-[40px] font-bold leading-[48px] text-dark">Typography</h2>
      </header>

      <div className="mt-8 rounded-[25px] bg-white px-8 py-10 shadow-[0px_4px_12px_0px_rgba(13,10,44,0.08)] md:px-[60px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[620px]">
            <p className="text-[24px] font-semibold leading-[30px] text-primary">FREE GOOGLE FONT</p>
            <p className="mt-2 text-[60px] font-bold leading-[72px] text-dark">Inter</p>
            <p className="mt-4 text-[24px] font-semibold leading-[30px] text-dark">9 font weights available</p>
            <p className="mt-3 text-[18px] leading-[26px] text-[#1F2A37]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit at erat consectetur ultricies sapien facilisi euismod.
            </p>
            <a
              href="https://fonts.google.com/specimen/Inter"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-[6px] bg-primary px-[35px] py-[16px] text-[16px] font-medium leading-[24px] text-white underline"
            >
              Download Font
            </a>
          </div>
          <p className="text-right text-[160px] font-bold leading-[1] tracking-[-5px] text-dark lg:text-[290px]">Aa</p>
        </div>
      </div>

      <div className="mt-12 border-b border-stroke pb-4">
        <h3 className="text-[40px] font-bold leading-[48px] text-dark">Special headings</h3>
      </div>

      <div className="mt-8 space-y-8">
        {headingScale.map((item) => (
          <article key={item.name} className="grid gap-6 lg:grid-cols-[220px_1fr]">
            <div>
              <p className="text-[30px] font-bold leading-[38px] text-dark">{item.name}</p>
              <p className="mt-4 text-[18px] font-medium leading-[26px] text-[#374151]">Inter / {item.weight}</p>
              <p className="text-[18px] font-medium leading-[26px] text-primary">
                {item.size} / {item.lineHeight}
              </p>
            </div>
            <p className={[item.className, 'text-dark'].join(' ')}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 border-b border-stroke pb-4">
        <h3 className="text-[40px] font-bold leading-[48px] text-dark">Body styles</h3>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {bodyScale.map((item) => (
          <article key={item.name} className="rounded-[8px] border border-stroke bg-white px-5 py-4">
            <p className="text-[12px] font-medium leading-[20px] uppercase tracking-wide text-muted">{item.name}</p>
            <p className={[item.className, 'mt-2 text-[#1F2A37]'].join(' ')}>
              The quick brown fox jumps over the lazy dog.
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

