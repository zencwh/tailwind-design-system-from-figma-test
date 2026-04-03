import { ConfirmationModal } from '@/components/ui/confirmation-modal'
import { MarketingFooter } from '@/components/ui/marketing-footer'
import { NotFoundScreen } from '@/components/ui/not-found-screen'

/**
 * Preview for Figma nodes 310:15264 (404), 310:15309 (footer), 310:15604 (modals).
 */
export function MarketingLayoutShowcaseSection() {
  return (
    <div className="bg-[#f9fafb]">
      <div className="border-b border-stroke bg-white px-4 py-8">
        <h1 className="mx-auto max-w-6xl text-2xl font-bold text-dark">Marketing layout — Figma batch</h1>
        <p className="mx-auto mt-2 max-w-6xl text-muted">310:15264 · 310:15309 · 310:15604</p>
      </div>

      <div className="overflow-hidden rounded-none border-b border-stroke">
        <NotFoundScreen onAction={() => console.info('home')} />
      </div>

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
        <div>
          <h2 className="mb-4 text-lg font-semibold text-dark">Modals</h2>
          <div className="flex flex-col flex-wrap items-center justify-center gap-10 lg:flex-row lg:items-start">
            <ConfirmationModal variant="success" onCancel={() => console.info('cancel')} onConfirm={() => console.info('details')} />
            <ConfirmationModal variant="danger" onCancel={() => console.info('cancel')} onConfirm={() => console.info('deactivate')} />
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  )
}
