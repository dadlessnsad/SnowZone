import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import PoppyForm from "../components/poppyform"
import PercyForm from "../components/percyform"
import Layout from "../components/layout"
import Seo from "../components/seo"

const MintPage = () => (
  <Layout>
    <div class="mintpage">
    <Seo title="Mint page" />
      <div class="mint__section">
        <div class="mint__container">
          <h1 class="mint__container__title">Mint Your Own Penguin</h1>
          <p class="mint__intro">Here you can choose to mint a Percy, or a Poppy or Both!</p>
          <div class="mint__grid">
            <div class="mint__grid__item">
              <h1 class="mint__title">Percy Penguin</h1>
              <h2 class="mint__title">50.00
                <StaticImage
                  src="../images/matic-token-icon.png"
                  quality={100}
                  height={25}
                  width={25}
                  alt="matic logo"
                  class="matic__logo"
                />
              </h2>
              <p class="mint__max">You can mint a max of 20 per transaction</p>
              <div class="mintpercy__img__container" > 
                <StaticImage
                  src="../images/pmcommon1.png"
                  quality={100}
                  alt="Percy common skin one"
                  class="mintpercy__img"
                />
              </div>
              <div class="mint__button__container">
                <PercyForm />
              </div>
            </div>
            <div class="mint__grid__item">
              <h1 class="mint__title">Poppy Penguin</h1>
              <h2 class="mint__title">50.00
                <StaticImage
                  src="../images/matic-token-icon.png"
                  quality={100}
                  height={25}
                  width={25}
                  alt="matic logo"
                  class="matic__logo"
                />
              </h2>
              <p class="mint__max">You can mint a max of 20 per transaction</p>
              <div class="mintpercy__img__container" > 
                <StaticImage
                  src="../images/pfcommon1.png"
                  quality={100}
                  alt="poppy common skin one"
                  class="mintpoppy__img"
                />
              </div>
              <div class="mint__button__container">
                <PoppyForm />
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </Layout>
)

export default MintPage
