const imgBlogImage = "https://www.figma.com/api/mcp/asset/4aaee9b0-fa2a-49f7-88d7-7d24b2e5a2bc";
const imgBlogImage1 = "https://www.figma.com/api/mcp/asset/7253b304-511e-460c-b106-9c4984d085b4";
const imgBlogImage2 = "https://www.figma.com/api/mcp/asset/47b6e9e4-73e5-4ebc-89d0-c33f1cc5df56";

type BlogsProps = {
  className?: string;
};

export function Blogs({ className }: BlogsProps) {
  return (
    <div className={className || "bg-white h-[866px] overflow-clip relative w-full"}>
      <div className="absolute flex flex-col gap-[60px] items-center left-[135px] top-[120px]">
        <div className="flex flex-col gap-[8px] items-center text-center whitespace-nowrap">
          <p className="font-semibold leading-[26px] relative shrink-0 text-primary text-[18px]">
            Our Blogs
          </p>
          <div className="flex flex-col gap-[12px] items-center relative shrink-0">
            <p className="font-bold leading-[48px] relative shrink-0 text-dark text-[40px]">
              Our Recent News
            </p>
            <div className="font-normal leading-[0] relative shrink-0 text-muted text-[16px]">
              <p className="leading-[24px] mb-0">There are many variations of passages of Lorem Ipsum available</p>
              <p className="leading-[24px]">but the majority have suffered alteration in some form.</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[30px] items-start relative shrink-0">
          <div className="flex flex-col gap-[30px] items-start relative shrink-0">
            <div className="h-[220px] relative rounded-[5px] shrink-0 w-[370px]">
              <img alt="Blog Image" className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full" src={imgBlogImage} />
            </div>
            <div className="flex flex-col gap-[25px] items-start relative shrink-0">
              <div className="bg-primary flex items-center justify-center overflow-clip px-[15px] py-[4px] relative rounded-[5px] shrink-0">
                <p className="font-medium leading-[20px] relative shrink-0 text-[12px] text-white whitespace-nowrap">
                  Dec 22, 2023
                </p>
              </div>
              <div className="flex flex-col gap-[15px] items-start relative shrink-0">
                <p className="font-semibold leading-[30px] relative shrink-0 text-dark text-[24px] w-[370px]">
                  Meet AutoManage, the best AI management tools
                </p>
                <p className="font-normal leading-[24px] relative shrink-0 text-muted text-[16px] w-[370px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] items-start relative shrink-0">
            <div className="h-[220px] relative rounded-[5px] shrink-0 w-[370px]">
              <img alt="Blog Image" className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full" src={imgBlogImage1} />
            </div>
            <div className="flex flex-col gap-[25px] items-start relative shrink-0">
              <div className="bg-primary flex items-center justify-center overflow-clip px-[15px] py-[4px] relative rounded-[5px] shrink-0">
                <p className="font-medium leading-[20px] relative shrink-0 text-[12px] text-white whitespace-nowrap">
                  Mar 15, 2023
                </p>
              </div>
              <div className="flex flex-col gap-[15px] items-start relative shrink-0">
                <p className="font-semibold leading-[30px] relative shrink-0 text-dark text-[24px] w-[370px]">
                  How to earn more money as a wellness coach
                </p>
                <p className="font-normal leading-[24px] relative shrink-0 text-muted text-[16px] w-[370px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] items-start relative shrink-0">
            <div className="h-[220px] relative rounded-[5px] shrink-0 w-[370px]">
              <img alt="Blog Image" className="absolute inset-0 max-w-none object-cover rounded-[5px] size-full" src={imgBlogImage2} />
            </div>
            <div className="flex flex-col gap-[25px] items-start relative shrink-0">
              <div className="bg-primary flex items-center justify-center overflow-clip px-[15px] py-[4px] relative rounded-[5px] shrink-0">
                <p className="font-medium leading-[20px] relative shrink-0 text-[12px] text-white whitespace-nowrap">
                  Jan 05, 2023
                </p>
              </div>
              <div className="flex flex-col gap-[15px] items-start relative shrink-0">
                <p className="font-semibold leading-[30px] relative shrink-0 text-dark text-[24px] w-[370px]">
                  The no-fuss guide to upselling and cross selling
                </p>
                <p className="font-normal leading-[24px] relative shrink-0 text-muted text-[16px] w-[370px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-[999px] bg-white p-1 shadow-sm">
        <button className="px-4 py-2 rounded-full border border-stroke text-sm text-muted hover:border-primary hover:text-primary transition">Previous</button>
        <button className="px-4 py-2 rounded-full bg-primary text-white shadow-sm">1</button>
        <button className="px-4 py-2 rounded-full bg-white text-dark border border-stroke hover:bg-primary hover:text-white transition">2</button>
        <button className="px-4 py-2 rounded-full bg-white text-dark border border-stroke hover:bg-primary hover:text-white transition">3</button>
        <button className="px-4 py-2 rounded-full border border-stroke text-sm text-muted hover:border-primary hover:text-primary transition">Next</button>
      </div>
    </div>
  );
}