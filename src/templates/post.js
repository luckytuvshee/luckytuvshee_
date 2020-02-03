import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const postTemplate = ({ data }) => {
  //const { markdownRemark: post } = data // same as const post = data.markdownRemark

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <section className="blog-post-template">
        <div className="post-header">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </Layout>
  )
}

export default postTemplate

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        description
      }
    }
  }
`
