import VendorSignUp from '../app/(marketing)/vendor-signup/page'
import { EcommerceBlocksShowcaseSection } from '@/components/sections/ecommerce-blocks-showcase-section'

export default function App() {
  const demo = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('demo') : null
  if (demo === 'ecommerce') {
    return <EcommerceBlocksShowcaseSection />
  }
  return <VendorSignUp />
}
