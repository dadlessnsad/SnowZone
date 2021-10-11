/* global BigInt */
import React, { Component, useState } from "react"
import { ethers } from "ethers"
import { ABI, CONTRACT_ADDRESS } from "../constant/index"

export default class PoppyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 1,
    }
  }
  onChange = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum, {
        chainId: 137,
      })
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider)
      const signer = provider.getSigner()
      const contractSigner = contract.connect(signer)
      const weiValue = Number(this.state.amount) * 50
      const weiValueString = weiValue.toString()
      let estimatedGas
      try {
        const gasLimit = await contractSigner.estimateGas.mintPoppy(
          Number(this.state.amount),
          {
            value: ethers.utils.parseEther(weiValueString),
          }
        )
        estimatedGas = gasLimit.mul(BigInt(12)).div(BigInt(10))
        console.debug({ estimatedGas: BigInt(estimatedGas).toString() })
      } catch (error) {
        console.error(error)
      }
      const txParamsOverride = {
        value: ethers.utils.parseEther(weiValueString),
      }
      if (estimatedGas) {
        txParamsOverride.gasLimit = estimatedGas
      }
      const tx = await contractSigner.mintPoppy(
        Number(this.state.amount),
        txParamsOverride
      )
    } catch (error) {
      alert("Insufficient balance");
      console.error(error)
    }
  }

  render() {
    return (
      <div className="container">
        <form class="mint__form__container">
          <label>
            <span class="mint__max">Amount:</span>
            <input
              class="mint__input__container"
              type="number"
              name="amount"
              onChange={this.onChange}
              value={this.state.amount}
              placeholder="1-20"
              NumericInput
              min={1}
              max={20}
              required
            />
            <button
              class="mint__button"
              type="submit"
              onClick={this.handleSubmit}
            >
              Mint Poppy
            </button>
          </label>
        </form>
      </div>
    )
  }
}
