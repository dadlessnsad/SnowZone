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
            <h1 class="welcome__title">The Snow-Zone Meta Verse Built on Polygon by Cube Drop</h1>
              <p class="left__text">Mint, Breed, Stud-Out your Penguins</p>
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
              <h1 class="about__title">What is The Snow Zone</h1>
              <p class="about__description">The legend Of The Snow Zone Begins</p>

              <p class="about__description">Legends Say The Snow Shogun Was Behind The Assault & Escape From Earth Helping All Penguins Seek Refuge And Safety From Mankind & Its Human Grasp It Was When They Found Solitude On The CubeVerse Meta Planet These Penguins Became A Legend For Generations To Come !!!!!!!!</p>

              <p class="about__description">The Shogun Accompanied By The Legendary Percys Protected & Served All Penguins !!!!</p>

              <p class="about__description">They Came Across A Chilly 🥶 Meta Verse Called SNOW ZONE !!!!!</p>

              <p class="about__description">Upon Building There Community They Stumbled Across A ROCK , As Bright As The Sun & As Colourful As A Rainbow This Meta Rock Was Special !!!</p>

              <p class="about__description">The Rock Later Came To Be Called The Song Stone , Penguins Gathered In Mass Amounts Singing In Harmony One By One All Gaining Energy & Powers From The Mythical Song Stone !!!</p>

              <p class="about__description">Then One Pair Of Penguins Took The Leap Like No Other They Used The Song Stone To Mate,</p>

              <p class="about__description">Poppys Started Producing Eggs Like No Penguins Had Ever Seen Before !!!!</p>

              <p class="about__description">Breeding With The Song Stone From The Ground Of The CubeVerse Planet Created A Prehistoric Meta Snow EGG !!</p>

              <p class="about__description">Then A 3rd Penguin Was Born </p>
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
                  <p class="roadmap__desc">We launched 7 Rotating Percy Penguins</p>
                  <button class="roadmap__btn" type="button"><Link to="https://opensea.io/collection/percy-penguin" class="roadmap__btn">Open Collection</Link></button>
                </div>
              </div>
              <div class="roadmap__grid__item">
                <div class="item__container">
                  <h2 class="roadmap__item__title">Phase 2</h2>
                  <p class="roadmap__desc">We dropped 100 OG Percy's With Eggs Attached To Be Airdropped on launch of webpage & game. Launch of Percy & friends story A story based collaboration with Bojo Rhino Zombie Villagers Bruno Banana Bobo Face MoB Rubix Cups And many more
                  </p>
                  <button class="roadmap__btn" type="button"><Link to="https://opensea.io/collection/percy-penguin" class="roadmap__btn">Open Collection</Link></button>
                </div>
              </div>
              <div class="roadmap__grid__item">
                <div class="item__container">
                  <h2 class="roadmap__item__title">Phase 3</h2>
                  <p class="roadmap__desc">We launch 10K Penguins, 5k Percy, 5K Poppy Also With Some Massive Giveaways aswell as an Airdrop to OG holders. 
                  </p>
                  <button class="roadmap__btn" type="button" disabled=""><a href="https://opensea.io/collection/the-snow-zone" class="roadmap__btn">Open Collection</a></button>
                </div>
              </div>
              <div class="roadmap__grid__item">
                <div class="item__container">
                  <h2 class="roadmap__item__title">Phase 4</h2>
                  <p class="roadmap__desc">You Will Be Able To Combine & breed Different Percy's & Poppy’s For Different Outcomes and types of penguin bred out of your Snow Egg</p>
                  <p class="roadmap__desc">We have 3 types of snow eggs, The male and Female can breed</p>

                  <ul class="roadmap__desc">
                    <li>Blue - Common</li>
                    <li>Purple - Rare</li>
                    <li>Green - Legendary</li>
                  </ul>

                  <p class="roadmap__desc">You can also "Rent-a-Percy"</p>

                  <p class="roadmap__desc">This feature allows you to stud your male with other collectors to breed with! Cubedrop invites you to see for yourself and enter the snowzone</p>
                  <button class="roadmap__btn" type="button" disabled="">Coming soon</button>
                </div>
              </div>
              <div class="roadmap__grid__item">
                <div class="item__container">
                  <h2 class="roadmap__item__title">Phase 5</h2>
                  <p class="roadmap__desc">We Already have the snow league in place from the launch of the 100 OG Percy's!</p>
                    
                  <p class="roadmap__desc">BUT will begin properly on phase 4 Think of it as a penguin World Cup.</p>

                  <p class="roadmap__desc">Daily league table reviews and rewards!</p>

                  <p class="roadmap__desc">We will be giving away tons of stuff to league members ONLY all giveaways will be league members ONLY , you will be able to win snow eggs Percy's Poppy’s, Collab pieces , real life models & Merch & ETH All up for grabs!</p>
                  <button class="roadmap__btn" type="button" disabled="">Coming soon</button>
                </div>
              </div>
              <div class="roadmap__grid__item">
                <div class="item__container">
                  <h2 class="roadmap__item__title">Phase 6</h2>
                  <p class="roadmap__desc">We aim to focus on the maintenance of our snow zone & snow lab ,</p>

                  <p class="roadmap__desc">We also want to play a big factor creating the secondary market for others to join and adopt a penguin they like or see Don’t forget each penguin has different rarity from skin texture to objects</p>

                  <p class="roadmap__desc">round & sky So we will be the engine to help get the penguins the secondary, third & forth homes they may need</p>
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
