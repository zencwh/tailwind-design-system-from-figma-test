import { Button } from '@/components/ui/button'

const imgWarning = 'https://www.figma.com/api/mcp/asset/9f23f4b5-3010-4547-b8c0-9d4f3aa1e7ab'

export type ConfirmationModalVariant = 'success' | 'danger'

export interface ConfirmationModalProps {
  variant: ConfirmationModalVariant
  title?: string
  description?: string
  cancelLabel?: string
  confirmLabel?: string
  onCancel?: () => void
  onConfirm?: () => void
  className?: string
}

/**
 * Figma node 310:15604 — success (message sent) or danger (deactivate) dialog card.
 */
export function ConfirmationModal({
  variant,
  title,
  description,
  cancelLabel = 'Cancle',
  confirmLabel,
  onCancel,
  onConfirm,
  className = '',
}: ConfirmationModalProps) {
  const resolvedTitle =
    title ??
    (variant === 'success' ? 'Your Message Sent Successfully' : 'Deactivate Your Account')
  const resolvedDescription =
    description ??
    (variant === 'success'
      ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
      : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum been.')
  const resolvedConfirm =
    confirmLabel ?? (variant === 'success' ? 'View Details' : 'Deactivate')

  return (
    <div className={['flex flex-col items-start', className].filter(Boolean).join(' ')}>
      <div className="flex w-full max-w-[530px] flex-col items-center gap-[35px] rounded-[20px] bg-white p-[50px] shadow-[0px_5px_12px_0px_rgba(0,0,0,0.1)]">
        <div className="flex w-full flex-col items-center gap-6">
          {variant === 'success' ? (
            <>
              <div className="flex flex-col items-center gap-[18px]">
                <p className="text-center text-2xl font-semibold leading-[30px] text-dark">{resolvedTitle}</p>
                <div className="h-[3px] w-[90px] rounded-[2px] bg-primary" aria-hidden />
              </div>
              <p className="max-w-[430px] text-center text-base font-normal leading-6 text-muted">{resolvedDescription}</p>
            </>
          ) : (
            <div className="flex flex-col items-center gap-[22px]">
              <div className="relative flex size-[60px] shrink-0 items-center justify-center rounded-[37px] bg-[#feebeb]">
                <div className="relative size-6 overflow-hidden">
                  <img alt="" className="absolute inset-[5.1%_2.74%_13.44%_2.74%] block size-full max-w-none" src={imgWarning} />
                </div>
              </div>
              <div className="flex flex-col items-center gap-[15px] text-center not-italic">
                <p className="text-2xl font-semibold leading-[30px] text-dark">{resolvedTitle}</p>
                <p className="max-w-[430px] text-base font-normal leading-6 text-muted">{resolvedDescription}</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex w-full flex-wrap justify-center gap-[18px]">
          <Button
            type="button"
            kind="Secondary"
            variant="outline"
            color="Tertiary"
            round="Semi Round"
            showLeftIcon={false}
            showRightIcon={false}
            onClick={onCancel}
            className="w-[190px] justify-center rounded-[6px] border-stroke bg-white px-7 py-[13px] text-base font-medium leading-6 text-dark"
          >
            {cancelLabel}
          </Button>
          <Button
            type="button"
            kind="Primary"
            variant="primary"
            round="Semi Round"
            showLeftIcon={false}
            showRightIcon={false}
            onClick={onConfirm}
            className={[
              'w-[190px] justify-center rounded-[6px] border-0 px-7 py-[13px] text-base font-medium leading-6 text-white',
              variant === 'danger' ? '!bg-[#e10e0e] hover:!brightness-95' : '',
            ].join(' ')}
          >
            {resolvedConfirm}
          </Button>
        </div>
      </div>
    </div>
  )
}
