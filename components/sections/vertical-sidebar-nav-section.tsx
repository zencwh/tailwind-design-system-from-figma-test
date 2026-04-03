/** Figma 310:22132 */
const imgLogomark = 'https://www.figma.com/api/mcp/asset/b77d86d8-c9a4-44b8-9719-89d13c4b5906'
const imgTailGrids = 'https://www.figma.com/api/mcp/asset/4e6ff141-d4bb-4f7f-8042-7af013f518f1'
const imgChevron = 'https://www.figma.com/api/mcp/asset/d2def500-eabf-44be-bec1-000b42f5634f'
const imgDivider = 'https://www.figma.com/api/mcp/asset/7fa55f52-6562-4d7e-8858-b1dafa7ef4b2'
const imgAvatar = 'https://www.figma.com/api/mcp/asset/79c18664-17ff-41e6-a6fd-61a0fd9a4da6'

const PRIMARY = ['Home', 'Dashboard'] as const
const AFTER_DROPDOWN = ['Messages', 'Order', 'Calendar', 'Static', 'Documents'] as const
const FOOTER = ['Chat', 'Settings', 'Log out'] as const
const SUB = ['Dropdown one', 'Dropdown two', 'Dropdown three'] as const

export function VerticalSidebarNavSection({ className = '' }: { className?: string }) {
  return (
    <section className={['bg-[#f9fafb] py-16', className].filter(Boolean).join(' ')}>
      <div className="mx-auto flex max-w-[280px] justify-center px-6">
        <aside className="flex min-h-[640px] w-[280px] flex-col justify-between bg-white py-10 shadow-layout-spec">
          <div className="flex flex-col gap-9">
            <div className="pl-[35px]">
              <div className="relative h-10 w-[160px]">
                <div className="absolute inset-y-0 left-0 w-[25%]">
                  <img alt="" className="size-full object-contain" src={imgLogomark} />
                </div>
                <div className="absolute inset-y-[22.5%] left-[34.51%] right-0">
                  <img alt="TailGrids" className="size-full object-contain" src={imgTailGrids} />
                </div>
              </div>
            </div>

            <nav aria-label="Main" className="flex flex-col gap-[15px]">
              <div className="flex flex-col">
                {PRIMARY.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="w-[280px] py-2.5 pl-[35px] pr-[30px] text-base font-medium leading-6 text-muted hover:text-dark"
                    onClick={(e) => e.preventDefault()}
                  >
                    {label}
                  </a>
                ))}

                <div className="border-r-[3px] border-solid border-primary bg-[rgba(55,88,249,0.05)]">
                  <div className="flex w-[280px] items-center justify-between py-2.5 pl-[35px] pr-[22px]">
                    <span className="text-base font-medium leading-6 text-muted">Products</span>
                    <span className="size-5 overflow-hidden">
                      <img alt="" className="size-full object-contain" src={imgChevron} />
                    </span>
                  </div>
                </div>
              </div>

              <ul className="flex list-none flex-col gap-[18px] pl-[50px] text-base font-medium leading-6">
                {SUB.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className={label === 'Dropdown one' ? 'text-primary' : 'text-muted hover:text-dark'}
                      onClick={(e) => e.preventDefault()}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  {AFTER_DROPDOWN.map((label) => (
                    <a
                      key={label}
                      href="#"
                      className="w-[280px] py-2.5 pl-[35px] pr-[30px] text-base font-medium leading-6 text-muted hover:text-dark"
                      onClick={(e) => e.preventDefault()}
                    >
                      {label}
                    </a>
                  ))}
                </div>

                <div className="mx-auto h-px w-[210px]">
                  <img alt="" className="h-full w-full object-fill" src={imgDivider} />
                </div>

                <div className="flex flex-col">
                  {FOOTER.map((label) => (
                    <a
                      key={label}
                      href="#"
                      className="w-[280px] py-2.5 pl-[35px] pr-[30px] text-base font-medium leading-6 text-muted hover:text-dark"
                      onClick={(e) => e.preventDefault()}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-[15px] pl-[35px]">
            <img alt="" className="size-[49px] shrink-0 rounded-full object-cover" src={imgAvatar} />
            <div className="min-w-0">
              <p className="truncate text-base font-medium leading-6 text-dark">Musharof</p>
              <p className="truncate text-sm font-normal leading-[22px] text-muted">hello@tailgrids.com</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
