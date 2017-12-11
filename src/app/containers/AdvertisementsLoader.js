import React, { Component } from "react";
import { connect } from "react-redux";
import { AdvertisementsList } from "../components/AdvertisementsList";
import PropTypes from "prop-types";
import { fetchAdvertsFromAPI } from "../actions";

class AdvertisementsLoader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoadAdverts();
  }

  render() {
    if (this.props.adverts) {
      let firstTenAdverts = this.props.adverts.data.slice(0, 10);
      return (
        <div className="adverts-container">
          <AdvertisementsList advertsList={firstTenAdverts} />
        </div>
      );
    } else {
      return <div>Loading Advertisements List ...</div>;
    }
  }
}

AdvertisementsLoader.propTypes = {
  adverts: PropTypes.object,
  onLoadAdverts: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadAdverts: () => dispatch(fetchAdvertsFromAPI())
  };
};

const mapStateToProps = state => {
  const adverts = state.advertsReducer.data;
  return {
    adverts: adverts
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AdvertisementsLoader
);
