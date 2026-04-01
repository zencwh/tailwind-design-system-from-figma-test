import { CardGridSection } from '../components/sections/card-grid'
import { Blogs } from '../components/sections/blogs'
import { ComponentsShowcase } from '../components/sections/components-showcase'
import { Container } from '../components/layout/container'

export default function Page() {
  return (
    <Container>
      <CardGridSection />
      <Blogs />
      <ComponentsShowcase />
    </Container>
  )
}

