import { useState } from 'react'
import { Container } from '../layout/container'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import WarningAlert from '@/components/ui/warning-alert'
import { PortfolioGridSection } from './portfolio-grid'
import { VendorRegistrationForm, type VendorRegistrationFormValues } from './vendor-registration-form'

export function VendorRegistrationPage() {
  const [showWarning, setShowWarning] = useState(true)

  function handleSubmit(values: VendorRegistrationFormValues) {
    // For demo purposes: show the warning toast on submit.
    // You can replace this with real validation.
    void values
    setShowWarning(true)
  }

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-12">
      {showWarning ? (
        <div className="fixed right-6 top-6 z-50">
          <WarningAlert
            style="3"
            className="w-[420px]"
            onClose={() => setShowWarning(false)}
            description="Please check your details and try again."
          />
        </div>
      ) : null}

      <Container>
        <div className="pt-2">
          <Breadcrumbs
            variant="default"
            showHomeIcon
            items={[
              { label: 'Home', href: '#' },
              { label: 'Dashboard', href: '#' },
              { label: 'Vendor Registration' },
            ]}
          />
        </div>

        <div className="mt-8 rounded-[12px] bg-white p-6 shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]">
          <VendorRegistrationForm onSubmit={handleSubmit} />
        </div>

        <div className="mt-12">
          <PortfolioGridSection />
        </div>
      </Container>
    </div>
  )
}

