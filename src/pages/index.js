import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div class="homepage">
      <div class="welcome__section">
        <StaticImage
          src="../images/pfcommon1.png"
          quality={100}
          alt="Percy common skin one"
          class="pfcommon__img"
        />
        <StaticImage
          src="../images/pmcommon1.png"
          quality={100}
          alt="Percy common skin one"
          class="pmcommon__img"
        />
        <div class="welcome__section__container">
          <div class="left">
            <h1 class="welcome__title">The Snowzone Metaverse Built on Polygon by Cube Drop</h1>
              <p class="left__text">Mint, Breed, Stud-out your Penguins</p>
              <div class="button__container">
                <button class="left__button"><Link to="../mintpage/" class="left__button__link">Mint</Link></button>
                <button class="left__button"><Link to="#roadmap" class="left__button__link">RoadMap</Link></button>
              </div>
          </div>
          <div class="right">
            <StaticImage
              src="../images/cube.png"
              height={400}
              width={400}
              quality={100}
              alt="Cube Drop logo"
              class="cubedrop__img"
            />
          </div>
        </div>
      </div>
      
        <div class="about__section">
          <div class="about__section__container">
            <div class="snowzone__description">
              <h1 class="about__title">What is The Snowzone?
              </h1>
              <p class="about__description">The Legend of The Snowzone Begins!</p>

              <p class="about__description">Legends say The Snow Shogun was behind the assault and escape from Earth, helping all penguins seek refuge and safety from mankind and its human grasp was when they found solitude on The CubeVerse Meta Planet. These penguins became a legend for generations to come !!!!!!!!
              </p>

              <p class="about__description">The Shogun accompanied by The Legendary Percys protected and served all penguins.</p>

              <p class="about__description">They came across a chilly 🥶 Metaverse called The SNOWZONE</p>

              <p class="about__description">Upon building their community, they stumbled across A ROCK , as bright as the sun and twice as colorful as a rainbow, this Meta Rock was special beyond anyone's imagination!</p>

              <p class="about__description">The rock later came to be called The Song Stone. Penguins gathered in mass numbers singing in harmony, one by one all gaining energy and powers from this mysterious stone.</p>

              <p class="about__description">Then one pair of penguins took the leap like no other had before and used The Song Stone to mate,</p>

              <p class="about__description">Poppys started producing eggs, the likes the penguins had never seen, as breeding using The Song Stone created Prehistoric Meta Snow Eggs!</p>

              <p class="about__description">Breeding With The Song Stone From The Ground Of The CubeVerse Planet Created A Prehistoric Meta Snow EGG !!</p>

              <p class="about__description">Then a 3rd type of penguin was born.</p>
            </div>
          </div>
        </div>

        <div id="roadmap" class="roadmap__section">
          <StaticImage
          src="../images/pfcommon1.png"
          quality={100}
          alt="Percy common skin one"
          class="pfcommon__img"
          />
          <StaticImage
          src="../images/pmcommon1.png"
          quality={100}
          alt="Percy common skin one"
          class="pmcommon__img"
          />
          <div class="roadmap__container">
            <h1 class="roadmap__title">ROADMAP</h1>
            <div class="roadmap__grid">
              <div class="roadmap__grid__item">
                <div class="item__container">
                  <h2 class="roadmap__item__title">Phase 1</h2>
                  <p class="roadmap__desc">We launched 7 rotating Percy Penguins.</p>
                  <button class="roadmap__btn" type="button"><Link to="https://opensea.io/collection/percy-penguin" class="roadmap__btn">Open Collection</Link></button>
                </div>
              </div>
              <div class="roadmap__grid__item">
                <div class="item__container">
                  <h2 class="roadmap__item__title">Phase 2</h2>
                  <p class="roadmap__desc">We dropped 100 OG Percys with Eggs attached to be airdropped on launch of the webpage and game. Launch of Percy & Friends story; A story based collaboration with Bojo Rhino, Zombie Villagers, Bruno Banana, Bobo Face, MoB, Rubix Cups and many more.</p>
                  <button class="roadmap__btn" type="button"><Link to="https://opensea.io/collection/percy-penguin" class="roadmap__btn">Open Collection</Link></button>
                </div>
              </div>
              <div class="roadmap__grid__item">
                <div class="item__container">
                  <h2 class="roadmap__item__title">Phase 3</h2>
                  <p class="roadmap__desc">We launch 10K Penguins, 5k Percy, 5K Poppy also with some massive giveaways as well as an airdrop to OG holders.</p>
                  <button class="roadmap__btn" type="button" disabled=""><a href="https://opensea.io/collection/the-snow-zone" class="roadmap__btn">Open Collection</a></button>
                </div>
              </div>
              <div class="roadmap__grid__item">
                <div class="item__container">
                  <h2 class="roadmap__item__title">Phase 4</h2>
                  <p class="roadmap__desc">You will be able to combine and breed different Percys and Poppys for different outcomes and types of penguin bred out of your Snow Egg.</p>
                  <p class="roadmap__desc">We have 3 types of Snow Eggs, the male and female can produce when bred.</p>

                  <ul class="roadmap__desc">
                    <li>Blue - Common</li>
                    <li>Purple - Rare</li>
                    <li>Green - Legendary</li>
                  </ul>

                  <p class="roadmap__desc">You can also "Rent-a-Percy"</p>

                  <p class="roadmap__desc">This feature allows you to stud your male with other collectors to breed with! Cubedrop invites you to see for yourself and enter The Snowzone</p>
                  <button class="roadmap__btn" type="button" disabled="">Coming soon</button>
                </div>
              </div>
              <div class="roadmap__grid__item">
                <div class="item__container">
                  <h2 class="roadmap__item__title">Phase 5</h2>
                  <p class="roadmap__desc">We Already have the snow league in place from the launch of the 100 OG Percy's!</p>
                    
                  <p class="roadmap__desc">BUT this will begin properly during Phase 4. Think of it as a Penguin World Cup.</p>

                  <p class="roadmap__desc">Daily league table reviews and rewards!</p>

                  <p class="roadmap__desc">We will be giving away tons of prizes to League Members ONLY. All giveaways will be League Members ONLY.</p>

                  <p class="roadmap__desc">You will be able to win Snow Eggs, Percys, Poppys, Collab Pieces, real life models, merch & ETH all up for grabs!</p>

                  <button class="roadmap__btn" type="button" disabled="">Coming soon</button>
                </div>
              </div>
              <div class="roadmap__grid__item">
                <div class="item__container">
                  <h2 class="roadmap__item__title">Phase 6</h2>
                  <p class="roadmap__desc">We aim to focus on the development of our Snowzone and Snow Lab.
                  </p>

                  <p class="roadmap__desc">We also want to play a big factor in creating the secondary market for others to join and adopt a penguin they like or see. Don’t forget each penguin has different rarities from skin texture to objects.</p>

                  <p class="roadmap__desc">Round and sky, so we will be the engine to help get the penguins the secondary, third and fourth homes they may need.</p>
                  <button class="roadmap__btn" type="button" disabled="">Coming soon</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
