import { useMemo, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Select } from '../ui/select'

export type VendorRegistrationFormValues = {
  firstName: string
  lastName: string
  contactPerson: string
  telNumber: string
  industry: string
}

export interface VendorRegistrationFormProps {
  onSubmit?: (values: VendorRegistrationFormValues) => void
  submitLabel?: string
}

export function VendorRegistrationForm({
  onSubmit,
  submitLabel = 'Submit',
}: VendorRegistrationFormProps) {
  const industries = useMemo(
    () => [
      { value: 'branding', label: 'Branding' },
      { value: 'design', label: 'Design' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'development', label: 'Development' },
    ],
    [],
  )

  const [values, setValues] = useState<VendorRegistrationFormValues>({
    firstName: '',
    lastName: '',
    contactPerson: '',
    telNumber: '',
    industry: '',
  })

  function update<K extends keyof VendorRegistrationFormValues>(key: K, next: VendorRegistrationFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: next }))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit?.(values)
      }}
      className="w-full"
      data-name="Vendor registration form"
    >
      <div className="grid gap-[20px] md:grid-cols-2">
        <Input
          label="First Name"
          placeholder="First Name"
          showHelperText={false}
          rightIcon={false}
          className="w-full"
          value={values.firstName}
          onChange={(e) => update('firstName', e.currentTarget.value)}
          name="firstName"
        />

        <Input
          label="Last Name"
          placeholder="Last Name"
          showHelperText={false}
          rightIcon={false}
          className="w-full"
          value={values.lastName}
          onChange={(e) => update('lastName', e.currentTarget.value)}
          name="lastName"
        />

        <Input
          label="Contact Person"
          placeholder="Contact Person"
          showHelperText={false}
          rightIcon={false}
          className="w-full"
          value={values.contactPerson}
          onChange={(e) => update('contactPerson', e.currentTarget.value)}
          name="contactPerson"
        />

        <Input
          label="Tel Number"
          placeholder="Tel Number"
          showHelperText={false}
          rightIcon={false}
          className="w-full"
          value={values.telNumber}
          onChange={(e) => update('telNumber', e.currentTarget.value)}
          name="telNumber"
        />

        <div className="md:col-span-2">
          <Select
            label="Industry"
            placeholder="Select Industry"
            showHelperText={false}
            status="Default"
            wrapperClassName="w-full"
            value={values.industry}
            options={industries}
            onChange={(v) => update('industry', v)}
          />
        </div>

        <div className="md:col-span-2 flex justify-end">
          <Button kind="Primary" color="Secondary" round="Full Rounded" type="submit">
            {submitLabel}
          </Button>
        </div>
      </div>
    </form>
  )
}

