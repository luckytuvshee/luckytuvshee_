import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Icon from "../assets/svg/arrow-left.svg"

const Resume = () => {
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
            rel="noopener noreferrer"
            href="https://luckytuvshee.files.wordpress.com/2019/12/tuvshinsanaas-resume-2.pdf"
          >
            Download
          </a>
        </h1>
        <hr />

        <h1 className="title">Skills</h1>
        <ul>
          <li>JavaScript, React, GraphQL, Node.JS, Vue, REST</li>
          <li>*NIX</li>
          <li>UX Design</li>
          <li>Database Design</li>
        </ul>

        <h1 className="title">Work</h1>
        <h2>Software Developer Intern at KhanBank, Jul 2019 to Sep 2019</h2>
        <h3>Built few components with Angular and REST API</h3>

        <h1 className="title">Education</h1>
        <h2>Computer Science student, 2017 - present, GPA: 3.3 out of 4 </h2>

        <h1 className="title">Related Projects</h1>
        <ul>
          <li>Anime website</li>
        </ul>
      </section>
    </Layout>
  )
}

export default Resume
