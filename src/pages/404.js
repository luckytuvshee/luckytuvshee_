import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../assets/svg/arrow-left.svg"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <section className="not-found-page">
      <h1 style={{ color: "#F8B9B9", fontSize: "38px" }}>NOT FOUND</h1>
      <h2>Sorry, this page doesn't exist. </h2>

      <Link to="/" className="back-button">
        <span>
          <Icon
            className="arrow"
            style={{ width: "20px", height: "20px", color: "#ffa7c4" }}
          />
        </span>
        <span>Return to Home</span>
      </Link>
    </section>
  </Layout>
)

export default NotFoundPage
