/** Figma 319:28861 */
const imgAvatar1 = 'https://www.figma.com/api/mcp/asset/d5128ea3-653f-4bc1-86ee-90c05a5fabc7'
const imgAvatar2 = 'https://www.figma.com/api/mcp/asset/a27324a1-967b-41ee-bdfb-948ae39378b0'
const imgAvatar3 = 'https://www.figma.com/api/mcp/asset/1d039b45-8a4f-4668-9ccc-ab8198223fe4'
const imgStarFill = 'https://www.figma.com/api/mcp/asset/190fd675-e4eb-43c1-b0e5-40dd52baea08'
const imgStarOutline = 'https://www.figma.com/api/mcp/asset/b9138754-fb37-46e1-a82c-609eb4efd80e'
const REVIEWS = [
  {
    name: 'Jhon Smith',
    date: '25, Nov 2025',
    rating: 3,
    title: 'I Really Love This Product!',
    avatar: imgAvatar1,
  },
  {
    name: 'Andrio Gelario',
    date: '12, Dec 2024',
    rating: 4,
    title: 'This is one of the best product.',
    avatar: imgAvatar2,
  },
  {
    name: 'Juliya Gessy',
    date: '23, April 2024',
    rating: 5,
    title: ' Quality was not good but it can be better.',
    avatar: imgAvatar3,
  },
] as const

const BODY = (
  <>
    <p className="mb-0 leading-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac risus a risus elementum vehicula. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tristique nisl nec fermentum eleifend. Fusce
      tincidunt, tortor a elementum vehicula,
    </p>
    <p className="leading-6">magna ligula iaculis lacus, vel feugiat velit felis a metus.</p>
  </>
)

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex gap-1" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="relative size-4 shrink-0 overflow-hidden">
          <img alt="" className="size-full" src={i < value ? imgStarFill : imgStarOutline} />
        </span>
      ))}
    </div>
  )
}

export function ProductReviewsSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f3f4f6] py-16 lg:py-[120px]', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[1170px] flex-col gap-10 px-6 lg:px-[135px] xl:px-0">
        {REVIEWS.map((r) => (
          <article
            key={r.name}
            className="flex flex-col rounded-xl bg-white px-[30px] pb-[30px] pt-5 shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]"
          >
            <div className="flex flex-col gap-6 border-b border-stroke pb-12 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <img alt="" className="size-14 shrink-0 rounded-full" height={56} src={r.avatar} width={56} />
                <div>
                  <p className="text-base font-medium leading-6 text-dark">{r.name}</p>
                  <p className="text-sm leading-[22px] text-muted">{r.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <p className="whitespace-nowrap text-base font-medium text-dark">Rating: {r.rating.toFixed(1)}</p>
                <StarRating value={r.rating} />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <h3 className="text-xl font-semibold capitalize leading-[26px] text-dark">{r.title}</h3>
              <div className="max-w-none text-base leading-6 text-muted">{BODY}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
