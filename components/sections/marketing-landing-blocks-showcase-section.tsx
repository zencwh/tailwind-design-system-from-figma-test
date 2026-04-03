import { MarketingHeaderHeroSection } from '@/components/sections/marketing-header-hero-section'
import { NewsletterSection } from '@/components/sections/newsletter-section'
import { PricingPlansSection } from '@/components/sections/pricing-plans-section'
import { StatsStripSection } from '@/components/sections/stats-strip-section'
import { TeamSection } from '@/components/sections/team-section'
import { TestimonialFeatureSection } from '@/components/sections/testimonial-feature-section'
import { VideoIntroSplitSection } from '@/components/sections/video-intro-split-section'

/**
 * Preview stack for Figma nodes:
 * 310:16807, 310:16909 (×2), 310:17209, 310:17407, 310:17596, 310:17986, 310:18070
 */
export function MarketingLandingBlocksShowcaseSection() {
  return (
    <div className="divide-y divide-stroke/40">
      <MarketingHeaderHeroSection />
      <NewsletterSection variant="split" />
      <NewsletterSection variant="centered" />
      <PricingPlansSection />
      <StatsStripSection />
      <TeamSection />
      <TestimonialFeatureSection />
      <VideoIntroSplitSection />
    </div>
  )
}
