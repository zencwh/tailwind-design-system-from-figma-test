import { ActiveConversationsListSection } from '@/components/sections/active-conversations-list-section'
import { CalendarDatePickerSection } from '@/components/sections/calendar-date-picker-section'
import { ChatMessagePanelSection } from '@/components/sections/chat-message-panel-section'
import { DashboardChartsSection } from '@/components/sections/dashboard-charts-section'
import { DashboardTemplatePreviewsSection } from '@/components/sections/dashboard-template-previews-section'
import { FaqAccordionSection } from '@/components/sections/faq-accordion-section'
import { FormElementsShowcaseSection } from '@/components/sections/form-elements-showcase-section'
import { HorizontalStepsSection } from '@/components/sections/horizontal-steps-section'
import { DashboardHorizontalHeaderSection } from '@/components/sections/dashboard-horizontal-header-section'
import { DashboardNotificationsSection } from '@/components/sections/dashboard-notifications-section'
import { DashboardStatsCardsSection } from '@/components/sections/dashboard-stats-cards-section'
import { DrawerNavigationSection } from '@/components/sections/drawer-navigation-section'
import { MapSellsByStateSection } from '@/components/sections/map-sells-by-state-section'
import { PageTitleVariantsSection } from '@/components/sections/page-title-variants-section'
import { PopoverCardSection } from '@/components/sections/popover-card-section'
import { ProfileCardDashboardSection } from '@/components/sections/profile-card-dashboard-section'
import { ProgressBarsShowcaseSection } from '@/components/sections/progress-bars-showcase-section'
import { SelectableUserListSection } from '@/components/sections/selectable-user-list-section'
import { UserListStackSection } from '@/components/sections/user-list-stack-section'
import { VerticalSidebarNavSection } from '@/components/sections/vertical-sidebar-nav-section'

/**
 * Figma dashboard / admin UI blocks:
 * 310:20481, 310:20649, 310:20751, 310:20825, 310:20913, 310:21024, 310:21210,
 * 310:21311, 310:21385, 310:21798, 310:21862, 310:21901, 310:21928, 310:21991,
 * 310:22054, 310:22132, 310:22214, 310:22282, 310:22514, 310:22740, 310:22738
 */
export function DashboardBlocksShowcaseSection() {
  return (
    <div className="divide-y divide-stroke/40 bg-[#f9fafb]">
      <DashboardChartsSection />
      <ChatMessagePanelSection />
      <ActiveConversationsListSection />
      <CalendarDatePickerSection />
      <DashboardStatsCardsSection />
      <DrawerNavigationSection />
      <DashboardHorizontalHeaderSection />
      <UserListStackSection />
      <MapSellsByStateSection />
      <DashboardNotificationsSection />
      <PageTitleVariantsSection />
      <PopoverCardSection />
      <ProfileCardDashboardSection />
      <HorizontalStepsSection />
      <SelectableUserListSection />
      <VerticalSidebarNavSection />
      <FaqAccordionSection />
      <FormElementsShowcaseSection />
      <ProgressBarsShowcaseSection />
      <DashboardTemplatePreviewsSection />
    </div>
  )
}
