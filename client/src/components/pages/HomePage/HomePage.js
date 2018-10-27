import React, { Component } from "react";
import API from "../../../utils/API";
import PaginateBar from "./PaginateBar/PaginateBar";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    API.grabPosts().then(response => {
      const data = [...response.data];
      data.sort((a, b) => a.Payee.Name.localeCompare(b.Payee.Name));
      this.setState({ data: data });
    });
  }

  render() {
    return <PaginateBar data={this.state.data} />;
  }
}

export default HomePage;
