import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact">
      <h1>I'm always happy to hear from you.</h1>
      <h2>luckytuvshee@gmail.com</h2>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/luckytuvshee"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/luckytuvshee"
          >
            Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/luckytuvshee"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </section>
  </Layout>
)

export default Contact
