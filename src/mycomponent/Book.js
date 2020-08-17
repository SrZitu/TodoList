import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "john",
      showInfo: false,
    };
  }
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, img, title, author } = this.props.info;
    const checkinfo = (info) => {
      if (info === true) {
        return (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, suscipit?
          </p>
        );
      } else {
        return null;
      }
    };
    // console.log(this.props);
    return (
      <div className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>Title:{title}</h4>
          <h6>Author:{author}</h6>
          <button type="button" onClick={this.handleInfo}>
            Toggle Info
          </button>
          {checkinfo(this.state.showInfo)}
          {/* teranary operator
          {this.state.showInfo ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quod!
            </p>
          ) : null}*/}

          {/* this is one method 
          {this.state.showInfo && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, ullam.
            </p>
          )}*/}
        </div>
      </div>
    );
  }
}
