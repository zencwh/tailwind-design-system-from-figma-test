type ColorItem = {
  name: string
  hex: string
}

const tailgridsColors: ColorItem[] = [
  { name: 'Primary', hex: '#3758F9' },
  { name: 'Secondary', hex: '#13C296' },
  { name: 'Primary Text', hex: '#637381' },
  { name: 'Secondary Text', hex: '#8899A8' },
  { name: 'Stroke', hex: '#DFE4EA' },
]

const darkColors: ColorItem[] = [
  { name: 'Dark', hex: '#111928' },
  { name: 'Dark 2', hex: '#1F2A37' },
  { name: 'Dark 3', hex: '#374151' },
  { name: 'Dark 4', hex: '#4B5563' },
  { name: 'Dark 5', hex: '#6B7280' },
  { name: 'Dark 6', hex: '#9CA3AF' },
  { name: 'Dark 7', hex: '#D1D5DB' },
  { name: 'Dark 8', hex: '#E5E7EB' },
]

const shadowCards = [
  { name: 'Shadow 1', className: 'shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]' },
  { name: 'Shadow 2', className: 'shadow-[0px_5px_12px_0px_rgba(0,0,0,0.1)]' },
  { name: 'Shadow 3', className: 'shadow-[0px_4px_12px_0px_rgba(13,10,44,0.06)]' },
  { name: 'Shadow 4', className: 'shadow-[0px_10px_15px_0px_rgba(5,13,29,0.18)]' },
  { name: 'Shadow 5', className: 'shadow-[0px_34px_26px_0px_rgba(13,10,44,0.05),0px_12px_34px_0px_rgba(13,10,44,0.08)]' },
  { name: 'Shadow 6', className: 'shadow-[0px_20px_20px_0px_rgba(5,13,29,0.2)]' },
]

function ColorCard({ name, hex }: ColorItem) {
  return (
    <article className="w-[200px] overflow-hidden rounded-[12px] bg-[#f3f4f6] shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]">
      <div className="h-[155px] w-full" style={{ backgroundColor: hex }} />
      <div className="flex flex-col gap-px px-[21px] py-[14px]">
        <p className="text-[18px] font-semibold leading-[26px] text-dark">{name}</p>
        <p className="text-[16px] font-medium leading-[24px] text-muted">{hex}</p>
      </div>
    </article>
  )
}

function ColorGroup({ title, items }: { title: string; items: ColorItem[] }) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-[28px] font-semibold leading-[40px] text-dark">{title}</h2>
      <div className="flex flex-wrap gap-x-[30px] gap-y-[30px]">
        {items.map((item) => (
          <ColorCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}

export function ColorsShadowsPage() {
  return (
    <main className="space-y-8 bg-[#f8f9fb] p-4 sm:p-8">
      <section className="mx-auto w-full max-w-[1280px] rounded-[25px] bg-white px-6 py-8 sm:px-[80px] sm:py-[30px]">
        <header className="flex flex-col gap-5 pt-[30px]">
          <h1 className="text-[40px] font-bold leading-[48px] text-dark">Colors</h1>
          <div className="h-px w-full bg-[#f3f4f6]" />
        </header>

        <div className="mt-10 space-y-12">
          <ColorGroup title="TailGrids Colors" items={tailgridsColors} />
          <ColorGroup title="Dark Colors" items={darkColors} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] rounded-[25px] bg-white px-6 pb-[100px] pt-[30px] sm:px-[80px]">
        <header className="flex flex-col gap-6">
          <h1 className="text-[40px] font-bold leading-[48px] text-dark">Shadows</h1>
          <div className="h-px w-full bg-stroke" />
        </header>
        <div className="mt-[50px] flex flex-wrap gap-10">
          {shadowCards.map((shadow) => (
            <article key={shadow.name} className="flex flex-col items-center gap-[14px]">
              <div className={`size-[150px] rounded-[20px] bg-white ${shadow.className}`} />
              <p className="text-center text-[18px] font-medium leading-[26px] text-dark">{shadow.name}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
