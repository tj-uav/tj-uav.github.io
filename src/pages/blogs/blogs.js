import styled from "styled-components"
import Grid from "components/Grid"
import { darker } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"

// Sample Blogs posts data - you can move this to content/posts.js later
const BlogsPosts = [
  {
    id: 1,
    title: "TJUAV Competition Success",
    date: "March 10, 2024",
    excerpt: "Our team's recent achievements at the national drone competition.",
    imageUrl: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "New Drone Design Unveiled",
    date: "March 5, 2024",
    excerpt: "Introducing our latest drone design featuring improved aerodynamics.",
    imageUrl: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Join TJUAV: 2024 Recruitment",
    date: "March 1, 2024",
    excerpt: "Learn how you can become part of our innovative drone team.",
    imageUrl: "/placeholder.svg?height=300&width=500",
  },
]

const Container = styled(Grid)`
  --columns: repeat(12, 1fr);
  --rows: auto;
  grid-template-areas:
    ".       title   title   title   title   title   title   title   title   title   title   .      "
    ".       content content content content content content content content content content .      ";

  background-color: ${darker};
  padding: 2rem 0;
  min-height: 100vh;
`

const BlogsGrid = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

const BlogsCard = styled.article`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

const BlogsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const BlogsContent = styled.div`
  padding: 1.5rem;
`

const BlogsDate = styled.p`
  color: #bdc3c7;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`

const Blogs = () => {
  return (
    <Container>
      <h1 style={{ ...Heading, gridArea: "title", textAlign: "center", marginBottom: "2rem" }}>TJUAV Blogs</h1>

      <BlogsGrid>
        {BlogsPosts.map((post) => (
          <BlogsCard key={post.id}>
            <BlogsImage src={post.imageUrl} alt={post.title} />
            <BlogsContent>
              <BlogsDate>{post.date}</BlogsDate>
              <h2 style={{ ...Heading, fontSize: "1.5rem", marginBottom: "1rem" }}>{post.title}</h2>
              <p style={{ ...Paragraph }}>{post.excerpt}</p>
            </BlogsContent>
          </BlogsCard>
        ))}
      </BlogsGrid>
    </Container>
  )
}

export default Blogs