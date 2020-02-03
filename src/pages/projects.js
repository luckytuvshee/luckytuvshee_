import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <section className="projects">
        <div className="project">Project 1</div>
        <div className="project">Project 2</div>
      </section>
    </Layout>
  )
}

export default Projects
