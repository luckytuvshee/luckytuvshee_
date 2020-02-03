import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { globalHistory } from "@reach/router"

const Header = ({ siteTitle }) => {
  const menus = ["about", "contact", "projects", "blog"]
  const path = globalHistory.location.pathname.slice(1)
  const home = path === ""

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">LuckyTuvshee</Link>
        </h1>
      </div>
      <ul className="menu">
        {menus.map((menu, index) => (
          <Link
            to={menu === "about" ? "/" : `/${menu}`}
            key={index}
            className={
              path.split("/")[0] === menu || (index === 0 && home)
                ? "active-menu"
                : ""
            }
          >
            {menu}
          </Link>
        ))}
      </ul>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
