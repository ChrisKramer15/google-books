import React, { Component } from "react";
import Header from "../components/Header";

class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      desc: "",
      image: "",
      link: "",
    };
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
export default Saved;
