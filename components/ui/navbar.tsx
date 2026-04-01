const imgLogomark = "https://www.figma.com/api/mcp/asset/c593339f-e332-44f7-8558-5aa01febfa2f";
const imgTailGrids = "https://www.figma.com/api/mcp/asset/b3854b4f-7923-4ad8-8c37-2c0deb3c10b3";

type LogoProps = {
  className?: string;
};

function Logo({ className }: LogoProps) {
  return (
    <div className={className || "h-[40px] relative w-[160px]"}>
      <div className="absolute inset-[0_74.9%_0_0]">
        <img alt="Logomark" className="absolute block max-w-none size-full" src={imgLogomark} />
      </div>
      <div className="absolute inset-[22.5%_0_22.55%_34.51%]">
        <img alt="TailGrids" className="absolute block max-w-none size-full" src={imgTailGrids} />
      </div>
    </div>
  );
}

type NavbarProps = {
  className?: string;
  style?: '1' | '2';
};

export function Navbar({ className, style = '1' }: NavbarProps) {
  if (style === '2') {
    return (
      <div className={className || "bg-white h-[100px] overflow-clip relative w-full"}>
        <div className="absolute contents left-0 top-0">
          <div className="absolute bg-white h-[100px] left-0 top-0 w-full" />
          <div className="absolute content-stretch flex gap-[22px] items-center right-[135px] top-[29px]">
            <p className="font-medium leading-[24px] relative shrink-0 text-dark text-[16px] whitespace-nowrap">
              Sign In
            </p>
          </div>
          <div className="absolute content-stretch flex font-medium gap-[40px] items-start leading-[24px] left-[135px] text-[16px] top-[38px] whitespace-nowrap">
            <p className="relative shrink-0 text-dark">
              Home
            </p>
            <p className="relative shrink-0 text-muted">
              About
            </p>
            <p className="relative shrink-0 text-muted">
              Features
            </p>
          </div>
        </div>
        <Logo className="absolute h-[40px] left-[calc(41.67%+40px)] top-[30px] w-[160px]" />
      </div>
    );
  }

  return (
    <div className={className || "bg-white h-[100px] overflow-clip relative w-full"}>
      <div className="absolute contents left-0 top-0">
        <div className="absolute bg-white h-[100px] left-0 top-0 w-full" />
        <div className="absolute content-stretch flex gap-[22px] items-center right-[135px] top-[29px]">
          <p className="font-medium leading-[24px] relative shrink-0 text-dark text-[16px] whitespace-nowrap">
            Sign In
          </p>
        </div>
        <div className="absolute content-stretch flex font-medium gap-[40px] items-start leading-[24px] left-[calc(25%+75px)] text-[16px] top-[38px] whitespace-nowrap">
          <p className="relative shrink-0 text-dark">
            Home
          </p>
          <p className="relative shrink-0 text-muted">
            About
          </p>
          <p className="relative shrink-0 text-muted">
            Features
          </p>
        </div>
        <Logo className="absolute h-[40px] left-[135px] top-[30px] w-[160px]" />
      </div>
    </div>
  );
}