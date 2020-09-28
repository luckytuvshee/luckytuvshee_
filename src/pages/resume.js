import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery, Link } from "gatsby"
import Icon from "../assets/svg/arrow-left.svg"

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Resume" />
      <section className="resume">
        <Link to="/" className="back-button">
          <span>
            <Icon
              className="arrow"
              style={{ width: "20px", height: "20px", color: "#ffa7c4" }}
            />
          </span>
          <span>Back to about</span>
        </Link>
        <h1>
          Resume -{" "}
          <a
            target="_blank"
            download
            rel="noopener noreferrer"
            href={data.allFile.edges[0].node.publicURL}
          >
            Download
          </a>{" "}
          <span>&#8226;</span>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data.allFile.edges[0].node.publicURL}
          >
            View
          </a>
        </h1>
        <hr />

        <h1 className="title">Skills</h1>
        <ul>
          <li>JavaScript, React, Vue, Nuxt, GraphQL, Node.JS</li>
          <li>Python, Tensorflow</li>
          <li>PHP, Laravel, Botman</li>
          <li>Database Design</li>
          <li>*NIX</li>
          <li>UI Design</li>
          <li>Java</li>
        </ul>

        <h1 className="title">Work</h1>
        <h2>Software Developer Intern at KhanBank, Jul 2019 to Sep 2019</h2>
        <h3>Built few components with Angular and REST API</h3>

        <h2>Software Developer Intern at BTSolution, June 2020 to Sep 2020</h2>
        <h3>
          Built Real-time chat web client for various social media page using
          Botman and Google Dialogflow
        </h3>

        <h1 className="title">Education</h1>
        <h2>Computer Science student, 2017 - present, GPA: 3.4 out of 4 </h2>

        <h1 className="title">Related Projects</h1>
        <ul>
          <li>Ecommerce website built with ReactJS and PHP/Laravel</li>
          <li>Anime website</li>
        </ul>
      </section>
    </Layout>
  )
}

export default Resume
