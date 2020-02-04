import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Icon from "../assets/svg/heart-solid.svg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="LuckyTuvshee" />
      <div className="home">
        <article className="image-with-text">
          <Image />
          <section className="short-bio">
            <p>Full-stack Developer</p>
            <p>
              <Icon
                style={{ width: "20px", height: "20px", color: "#ffa7c4" }}
              />
            </p>
            <p>*NIX</p>
          </section>
        </article>

        <article className="bio">
          <h1>Hello</h1>
          <p>
            My name is Tuvshinsanaa, and I am full-stack JavaScript developer.
            In my spare time enjoy my favourite{" "}
            <span className="music-genres">
              (house music, japanese vocaloids, eurodance)
            </span>{" "}
            music tracks and I like to customize my distro which is mostly{" "}
            <strong style={{ textDecoration: "underline" }}>
              Arch with i3
            </strong>
            . You can see my dotfiles from{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/luckytuvshee/dotfiles"
            >
              Github
            </a>
            .
          </p>
          For more details, see my{" "}
          <Link className="resume-link" to="/resume">
            resume
          </Link>
          {"."}
          <blockquote>
            "Everything is theoretically impossible, until it is done." <br /> ―
            Robert A. Heinlein
          </blockquote>
        </article>
      </div>
    </Layout>
  )
}

export default IndexPage
