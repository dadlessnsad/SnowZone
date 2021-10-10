import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { ethers } from "ethers"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {
  const [wallet, setWallet] = React.useState("Connect Wallet")

  React.useEffect(() => {
    ;(async () => {
      if (window.ethereum) {
        window.ethereum.on(`accountsChanged`, accounts => {
          console.debug(accounts, `accountsChanged`)

          if (accounts.length) {
            const address = accounts[0]
            setWallet(`${address.slice(0, 6)}...${address.slice(-4)}`)
            return
          }
          setWallet(`Connect Wallet`)
        })
        window.ethereum.on(`chainChanged`, () => {
          window.location.reload()
        })
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.listAccounts()
        if (accounts.length) {
          const address = accounts[0]
          setWallet(`${address.slice(0, 6)}...${address.slice(-4)}`)
          return
        }
      }
    })()
  }, [])
  React.useEffect(() => {
    const { ethereum } = window
    if (ethereum) {
      const chainParams = [
        {
          chainId: "0x89",
          chainName: "Matic(Polygon) Mainnet",
          nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
          },
          rpcUrls: ["https://rpc-mainnet.matic.network"],
          blockExplorerUrls: ["https://polygonscan.com"],
        },
      ]

      window.ethereum
        .request({ method: "wallet_addEthereumChain", chainParams })
        .catch(console.error)
      ethereum
        .request({
          method: `wallet_switchEthereumChain`,
          params: [{ chainId: "0x89" }],
        })
        .catch(console.error)
    }
  })

  const connectHandler = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send(`eth_requestAccounts`, [])
      const address = (await provider.listAccounts())[0]
      setWallet(`${address.slice(0, 6)}...${address.slice(-4)}`)
    }
  }
  return (
    <header>
      <div class="app__logo">
        <Link to="/">
          <StaticImage
            src="../images/snowflake.png"
            height={50}
            width={50}
            quality={100}
            alt="Snow Flake logo"
            class="snowflake__logo"
            href="/"
          />
        </Link>
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
          <Link class="desktop__nav__link" to="../mintpage/">
            Mint
          </Link>
          <Link class="desktop__nav__link">Breed</Link>
          <Link class="desktop__nav__link">Incubator</Link>
          <Link class="desktop__nav__link" to="/#roadmap">
            RoadMap
          </Link>
          <div class="account__container">
            <StaticImage
              src="../images/cube.png"
              height={50}
              width={50}
              quality={100}
              alt="cube drop logo"
            />
            <button class="header__btn" onClick={connectHandler}>
              {wallet}
            </button>
          </div>
        </ui>
        <div class="account__container_sml">
          <button class="header__btn" onClick={connectHandler}>
            {wallet}
          </button>
        </div>
      </div>
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
