import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import PropTypes from "prop-types";

const Footer = ({ siteTitle }) =>  (
    <footer class="footer__container">
        <div class="footer__left">
            <StaticImage
              src="../images/snowflake.png"
              height={100}
              width={100}
              quality={100}
              alt="snowflake logo"
            />
        </div>
        <div class="footer__center">  
            <div class="footer__links">
                <Link class="footer__link" to="https://www.cubedrop.io/">Cube Drop</Link>
                <Link class="footer__link" to="https://twitter.com/_percypenguin_?s=11">Twitter</Link>
                <Link class="footer__link" to="https://discord.gg/rxvGgT5UsQ">Discord</Link>
            </div>
        </div>
        <div class="footer__right">
        <StaticImage
              src="../images/cube__logo.png"
              quality={100}
              alt="cubedrop logo"
              class="cubedrop__logo"
            />      
        </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}
  
export default Footer