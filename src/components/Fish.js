import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fishPropType} from './prop-types/propTypes';
import {formatPrice} from '../helpers';

export class Fish extends Component {
  static propTypes = {
    details: PropTypes.shape (fishPropType).isRequired,
    addToOrder: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired,
  };

  render () {
    const {image, name, price, desc, status} = this.props.details;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={this.props.details.name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice (price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          onClick={() => this.props.addToOrder (this.props.index)}
          disabled={!isAvailable}
        >
          {isAvailable ? 'Add To Cart' : 'Sold Out'}
        </button>
      </li>
    );
  }
}

export default Fish;
