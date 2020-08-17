import React, { Component } from "react";
import form from "./form.css";
export default class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: [],
  };
  handleChange = (event) => {
    /*console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);

    if (event.target.name === "firstName") {
      const textValue = event.target.value;
      this.setState({
        firstName: textValue,
      });
    }
  };*/
    this.setState({
      [event.target.name]: event.target.value.toUpperCase(),
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const fstName = this.state.firstName;
    const lstName = this.state.lastName;
    //console.log(firstName, lastName);
    if (fstName.length > 0 && lstName.length > 0) {
      const person = `${fstName} ${lstName} `;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: "",
      });
    }
  };
  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="fname">FirstName</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <label htmlFor="lname">LastName</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <input type="Submit" name="Submit" />
          </form>
        </article>
        <article>
          <h1>People</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}
