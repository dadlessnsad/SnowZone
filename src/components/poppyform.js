import React, { Component } from "react";

export default class PoppyForm extends Component {

constructor(props) {
  super(props)
  this.state = {
    amount : ""
  }
}
onChange = (event) => {
  const name = event.target.getAttribute("name")
  this.setState({
    message: { ...this.state.message, [name]: event.target.value },
  })
}

handleSubmit = (event) => {
  event.preventDefault();
}

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} class="mint__form__container">
                  <label><span class="mint__max">Amount:</span>
                    <input 
                      class="mint__input__container"
                      type="number"
                      name="amount"
                      onChange={this.onChange}
                      placeholder="1-20"
                      NumericInput min={1} max={20}
                      required
                    />                 
                  <button class="mint__button" type="submit">Mint Poppy</button>
                  </label>
                </form> 
            </div>
        );
    }
}