import { BestSellingCarouselSection } from '@/components/sections/best-selling-carousel-section'
import { CheckoutPageSection } from '@/components/sections/checkout-page-section'
import { FeaturedProductsGridSection } from '@/components/sections/featured-products-grid-section'
import { OrderSummarySection } from '@/components/sections/order-summary-section'
import { ProductFiltersLayoutSection } from '@/components/sections/product-filters-layout-section'
import { ProductReviewsSection } from '@/components/sections/product-reviews-section'

/**
 * Figma preview stack: 310:18317, 310:19115, 310:19236, 310:19352, 319:28861, 310:19525
 */
export function EcommerceBlocksShowcaseSection() {
  return (
    <div className="divide-y divide-stroke/40">
      <CheckoutPageSection />
      <FeaturedProductsGridSection />
      <ProductFiltersLayoutSection />
      <OrderSummarySection />
      <ProductReviewsSection />
      <BestSellingCarouselSection />
    </div>
  )
}
