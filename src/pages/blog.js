import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => {
    const { node } = edge

    return (
      <div className="post" key={node.id}>
        <Link className="post-title" to={node.frontmatter.path}>
          {node.frontmatter.title}
        </Link>
        <p className="post-date">{node.frontmatter.date}</p>
        <p className="post-description">{node.frontmatter.description}</p>
      </div>
    )
  })

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <section className="blog">{Posts}</section>
    </Layout>
  )
}

export default Blog
export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            description
          }
        }
      }
    }
  }
`
