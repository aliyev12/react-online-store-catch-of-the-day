import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fishPropType} from './prop-types/propTypes';

export class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape (fishPropType).isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired,
  };

  handleChange = e => {
    // 1. Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.name === 'price' ? parseFloat(e.currentTarget.value) : e.currentTarget.value
    };
    this.props.updateFish (this.props.index, updatedFish);
  };

  render () {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="number"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish (this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
