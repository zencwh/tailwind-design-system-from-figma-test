import type { ReactNode } from 'react'

/** Figma node 310:15309 — TailGrids marketing footer (remote assets; refresh if expired). */
const imgLogomark = 'https://www.figma.com/api/mcp/asset/50491f99-9b6e-4a61-bdac-8e9c6543a6cb'
const imgTailGrids = 'https://www.figma.com/api/mcp/asset/7f54c63d-0e83-4cee-8acb-61992569bdad'
const imgEllipse2730 = 'https://www.figma.com/api/mcp/asset/3752ff3f-caf8-4331-ad54-84642a152888'
const imgEllipse2731 = 'https://www.figma.com/api/mcp/asset/0f837cdd-4100-436b-884a-de6b51e8c9cb'
const imgBack = 'https://www.figma.com/api/mcp/asset/2355b9be-25ef-4911-ac1c-de41442871c0'
const imgVector = 'https://www.figma.com/api/mcp/asset/c5f710a8-8ab3-4b57-aa13-cbec3f9b7a65'
const imgBack1 = 'https://www.figma.com/api/mcp/asset/bd7fe5d6-5451-43fe-ab5d-04b631f0f2c5'
const imgVector1 = 'https://www.figma.com/api/mcp/asset/e49ca30d-460c-4a98-bfcb-fc3692d8e923'
const imgXmlid30 = 'https://www.figma.com/api/mcp/asset/92222995-8ef0-4579-99b2-40ad781927ea'
const imgVector2 = 'https://www.figma.com/api/mcp/asset/4d4cf817-3986-4dbb-8967-19ba0a03a76d'
const imgVector3 = 'https://www.figma.com/api/mcp/asset/8424f599-1dc3-4319-b2f8-f915efbfb1b7'
const imgPhoneGroup = 'https://www.figma.com/api/mcp/asset/1da60419-99b9-4e08-b8b6-7fef98d388c9'
const imgPhoneGroup1 = 'https://www.figma.com/api/mcp/asset/3a502bd4-308c-4b85-a995-d8ad188fa162'
const imgPhoneGroup2 = 'https://www.figma.com/api/mcp/asset/0c8236f5-d56b-4d89-a96f-ab79069d1860'

function LogoBlock({ className = '' }: { className?: string }) {
  return (
    <div className={['relative h-10 w-40 shrink-0', className].join(' ')}>
      <div className="absolute inset-[0_74.9%_0_0]">
        <img alt="" className="absolute block size-full max-w-none" src={imgLogomark} />
      </div>
      <div className="absolute inset-[22.5%_0_22.55%_34.51%]">
        <img alt="" className="absolute block size-full max-w-none" src={imgTailGrids} />
      </div>
    </div>
  )
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-[35px]">
      <p className="text-lg font-semibold leading-[26px] text-dark">{title}</p>
      <div className="flex flex-col gap-3 text-base font-normal leading-6">{children}</div>
    </div>
  )
}

function FooterLink({ href, children, active }: { href: string; children: ReactNode; active?: boolean }) {
  return (
    <a
      href={href}
      className={[
        'transition-colors hover:text-primary',
        active ? 'text-primary' : 'text-muted',
      ].join(' ')}
    >
      {children}
    </a>
  )
}

function PhoneRow() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative size-5 shrink-0 overflow-hidden">
        <div className="absolute inset-[2.79%_2.94%_2.66%_2.73%]">
          <img alt="" className="block size-full max-w-none" src={imgPhoneGroup} />
        </div>
        <div className="absolute inset-[4.68%_4.83%_55.47%_54.68%]">
          <img alt="" className="block size-full max-w-none" src={imgPhoneGroup1} />
        </div>
        <div className="absolute inset-[19.68%_20.3%_54.06%_53.58%]">
          <img alt="" className="block size-full max-w-none" src={imgPhoneGroup2} />
        </div>
      </div>
      <p className="whitespace-nowrap text-sm font-medium leading-[22px] text-dark">+012 (345) 678 99</p>
    </div>
  )
}

function SocialIconFacebook() {
  return (
    <a href="#" className="relative inline-grid shrink-0 place-items-start leading-none" aria-label="Facebook">
      <span className="col-start-1 row-start-1 block size-8">
        <img alt="" className="block size-full max-w-none" src={imgBack} />
      </span>
      <span className="relative col-start-1 row-start-1 m-2 size-4 overflow-clip">
        <img alt="" className="absolute inset-[1.56%_21.98%_1.56%_21.56%] block size-full max-w-none" src={imgVector} />
      </span>
    </a>
  )
}

function SocialIconTwitter() {
  return (
    <a href="#" className="relative inline-grid shrink-0 place-items-start leading-none" aria-label="Twitter">
      <span className="col-start-1 row-start-1 block size-8">
        <img alt="" className="block size-full max-w-none" src={imgBack1} />
      </span>
      <span className="relative col-start-1 row-start-1 m-2 size-4 overflow-clip">
        <img alt="" className="absolute inset-[16.67%_8.33%] block size-full max-w-none" src={imgVector1} />
      </span>
    </a>
  )
}

function SocialIconYoutube() {
  return (
    <a href="#" className="relative inline-grid shrink-0 place-items-start leading-none" aria-label="YouTube">
      <span className="col-start-1 row-start-1 block size-[31.77px]">
        <img alt="" className="block size-full max-w-none" src={imgXmlid30} />
      </span>
      <span className="relative col-start-1 row-start-1 m-2 size-4 overflow-clip">
        <img alt="" className="absolute inset-[16.09%_1.56%] block size-full max-w-none" src={imgVector2} />
      </span>
    </a>
  )
}

function SocialIconLinkedIn() {
  return (
    <a href="#" className="relative inline-grid shrink-0 place-items-start leading-none" aria-label="LinkedIn">
      <span className="col-start-1 row-start-1 block size-[31.77px]">
        <img alt="" className="block size-full max-w-none" src={imgXmlid30} />
      </span>
      <span className="relative col-start-1 row-start-1 ml-[8.23px] mt-2 size-4">
        <img alt="" className="absolute inset-[12.5%_8.33%_12.5%_12.25%] block size-full max-w-none" src={imgVector3} />
      </span>
    </a>
  )
}

export interface MarketingFooterProps {
  className?: string
}

export function MarketingFooter({ className = '' }: MarketingFooterProps) {
  return (
    <footer
      className={[
        'relative overflow-hidden bg-white pb-16 pt-[120px] lg:min-h-[426px]',
        className,
      ].join(' ')}
    >
      <div className="pointer-events-none absolute right-10 top-10 hidden size-[75px] lg:block">
        <img alt="" className="size-full max-w-none -rotate-90 object-contain" src={imgEllipse2730} />
      </div>
      <div className="pointer-events-none absolute -left-16 bottom-0 hidden size-[281px] lg:block">
        <img alt="" className="size-full max-w-none rotate-180 object-contain" src={imgEllipse2731} />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,270px)_repeat(4,minmax(0,1fr))] lg:gap-8 lg:px-[135px] xl:gap-12">
        <div className="flex flex-col gap-[22px]">
          <div className="flex flex-col gap-5">
            <LogoBlock />
            <div className="max-w-[270px] text-base font-normal leading-6 text-muted">
              <p className="mb-0">Sed ut perspiciatis undmnis is iste</p>
              <p className="mb-0">natus error sit amet voluptatem</p>
              <p className="mb-0">totam rem aperiam. </p>
            </div>
          </div>
          <PhoneRow />
        </div>

        <FooterColumn title="Resources">
          <FooterLink href="#" active>
            Saas Development
          </FooterLink>
          <FooterLink href="#">Our Products</FooterLink>
          <FooterLink href="#">Our Products</FooterLink>
          <FooterLink href="#">User Strategy</FooterLink>
        </FooterColumn>

        <FooterColumn title="Company">
          <FooterLink href="#">About Landio</FooterLink>
          <FooterLink href="#">Contact & Support</FooterLink>
          <FooterLink href="#">Success History</FooterLink>
          <FooterLink href="#">Setting & Privacy</FooterLink>
        </FooterColumn>

        <FooterColumn title="Quick Links">
          <FooterLink href="#">Premium Support</FooterLink>
          <FooterLink href="#">Our Services</FooterLink>
          <FooterLink href="#">Know Our Team</FooterLink>
          <FooterLink href="#">Download App</FooterLink>
        </FooterColumn>

        <div className="flex flex-col gap-[35px]">
          <p className="text-lg font-semibold leading-[26px] text-dark">Follow Us On</p>
          <div className="flex flex-col gap-[25px]">
            <div className="flex flex-wrap gap-[15px]">
              <SocialIconFacebook />
              <SocialIconTwitter />
              <SocialIconYoutube />
              <SocialIconLinkedIn />
            </div>
            <p className="whitespace-nowrap text-base font-normal leading-6 text-muted">© 2023 TailGrids.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
