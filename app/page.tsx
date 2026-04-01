import { CardGridSection } from '../components/sections/card-grid'
import { Blogs } from '../components/sections/blogs'
import { Container } from '../components/layout/container'

export default function Page() {
  return (
    <Container>
      <CardGridSection />
      <Blogs />
    </Container>
  )
}

