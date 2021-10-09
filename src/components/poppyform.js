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
                    <input 
                      class="mint__input__container"
                      type="text"
                      name="amount"
                      onChange={this.onChange}
                      placeholder="1-20"
                      pattern="[0-9]"
                      required
                    />                 
                  <button class="mint__button" type="submit">Mint Poppy</button>
                </form> 
            </div>
        );
    }
}