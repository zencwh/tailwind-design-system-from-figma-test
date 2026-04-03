/** Figma 310:22740 Mega, 310:22738 Dashy */
const imgMega = 'https://www.figma.com/api/mcp/asset/02e965ed-a3ce-4ee6-a286-e05d822d6fe7'
const imgDashy = 'https://www.figma.com/api/mcp/asset/6cb9170a-04b7-499b-bd8c-e64891078b7c'

export function DashboardTemplatePreviewsSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto max-w-6xl space-y-14 px-6">
        <figure className="overflow-hidden rounded-xl border border-stroke bg-white shadow-card">
          <figcaption className="border-b border-stroke px-4 py-3 text-sm font-medium text-dark">Mega — Minimal Dashboard Template</figcaption>
          <img
            alt="Mega minimal dashboard template preview"
            className="h-auto w-full object-cover object-top"
            src={imgMega}
            loading="lazy"
          />
        </figure>
        <figure className="overflow-hidden rounded-xl border border-stroke bg-white shadow-card">
          <figcaption className="border-b border-stroke px-4 py-3 text-sm font-medium text-dark">Dashy — CSS Dashboard Template</figcaption>
          <img alt="Dashy dashboard template preview" className="h-auto w-full object-cover object-top" src={imgDashy} loading="lazy" />
        </figure>
      </div>
    </section>
  )
}
