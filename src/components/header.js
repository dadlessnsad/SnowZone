import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import PropTypes from "prop-types";

const Header = ({ siteTitle }) => (
  <header>
    <div class="app__logo">
      <Link to="/"><StaticImage
        src="../images/snowflake.png"
        height={50}
        width={50}
        quality={100}
        alt="Snow Flake logo"
        class="snowflake__logo"
        href="/"
      /></Link>
      <h1 class="app__logo__title">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div class="desktop__nav">
        <ui class="desktop__nav__ui">
          <Link class="desktop__nav__link" to="../mintpage/">Mint</Link>
          <Link class="desktop__nav__link">Breed</Link>
          <Link class="desktop__nav__link">Incubator</Link>
          <Link class="desktop__nav__link" to="/#roadmap">RoadMap</Link>
          <div class="account__container">
            <StaticImage
              src="../images/cube.png"
              height={50}
              width={50}
              quality={100}
              alt="cube drop logo"
            />
            <button class="header__btn">Connect Wallet</button>
          </div>
        </ui>
        <div class="account__container_sml">
            <button class="header__btn">Connect Wallet</button>
          </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
