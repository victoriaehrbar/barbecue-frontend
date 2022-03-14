import React, { Component } from "react";
import { createBarbecue } from "../redux/actions/barbecueActions";
import { connect } from "react-redux";

class BarbecueForm extends Component {
  state = {
    name: "",
    rating: "",
    review: "",
  };

  submit = (e) => {
    e.preventDefault();
    this.props.createBarbecue(this.state);
    this.setState({
      name: "",
      rating: "",
      review: "",
    });
    this.props.history.push("/barbecues");
  };
  render() {
    return (
      <div>
        <h1>Add a Barbecue restaurant</h1>
        <form onSubmit={this.submit}>
          Name:{" "}
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            type="text"
            value={this.state.name}
          />
          Rating:{" "}
          <input
            onChange={(e) => this.setState({ rating: e.target.value })}
            type="number"
            value={this.state.rating}
          />
          Review:{" "}
          <input
            type="text"
            onChange={(e) => this.setState({ review: e.target.value })}
            value={this.state.review}
          />
          <input type="submit" value="Submit a new Barbecue Restaurant" />
        </form>
      </div>
    );
  }
}

export default connect(null, { createBarbecue })(BarbecueForm);