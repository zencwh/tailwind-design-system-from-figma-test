import { CookieBanner } from '@/components/ui/cookie-banner'

export function CookieBannerShowcaseSection() {
  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div>
          <h1 className="mb-2 text-2xl font-bold text-dark">Cookie banner</h1>
          <p className="text-muted">Figma node 310:15235</p>
        </div>
        <CookieBanner
          onAccept={() => {
            console.info('accept cookies')
          }}
          onClose={() => {
            console.info('close banner')
          }}
        />
      </div>
    </div>
  )
}
