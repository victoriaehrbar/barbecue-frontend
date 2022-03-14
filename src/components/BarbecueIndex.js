import React from "react";
import { connect } from "react-redux";
import { getBarbecues } from "../redux/actions/barbecueActions";
import BarbecueListItem from "./BarbecueListItem";

class BarbecueIndex extends React.Component {
    //class method to take advantage of asynchronous, componentDidMount
  componentDidMount() {
    this.props.getBarbecues();
  }
  render() {
    return (
      <div>
        <h1>Barbecue Restaurants</h1>
        {this.props.barbecues.map((barbecue) => (
          <BarbecueListItem barbecue={barbecue} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ barbecues }) => {
  return {
    barbecues: barbecues.all,
  };
};

export default connect(mapStateToProps, { getBarbecues })(BarbecueIndex);