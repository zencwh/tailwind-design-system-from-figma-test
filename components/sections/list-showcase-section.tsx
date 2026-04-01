import { List } from '@/components/ui/list'

const orderedItems = [
  'Lorem ipsum dolor sit amet',
  'It is a long established fact reader',
  'The point of using Lorem Ipsum',
  'There are many variations of passages',
  'If you are going to use a of Lorem',
]

const unorderedItems = [
  'Lorem ipsum dolor sit amet',
  'Psium is therefore always free from',
  'Comes from a line in section',
  'Discovered the undoubtable source',
  'The standard chunk of Lorem',
]

export function ListShowcaseSection() {
  return (
    <section className="mx-auto w-full max-w-[1040px] rounded-[8px] border border-dashed border-primary bg-white p-10">
      <div className="grid grid-cols-3 gap-x-16 gap-y-12">
        <List state="Order List" style="1" items={orderedItems} />
        <List state="Order List" style="2" items={orderedItems} />
        <List state="Order List" style="3" items={orderedItems} />

        <List state="Unorder List" style="1" items={unorderedItems} />
        <List state="Unorder List" style="2" items={unorderedItems} />
        <List state="Unorder List" style="3" items={unorderedItems} />

        <List state="Unorder List" style="4" items={unorderedItems} />
        <List state="Unorder List" style="5" items={unorderedItems} />
        <List state="Unorder List" style="6" items={unorderedItems} />
      </div>
    </section>
  )
}

