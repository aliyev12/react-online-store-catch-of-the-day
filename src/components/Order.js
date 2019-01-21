import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../helpers';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {
  orderTransitionOptions,
  countTransitionOptions,
} from '../css/transition-options';
import {fishPropType} from './prop-types/propTypes';

export class Order extends Component {
  static propTypes = {
    fishes: PropTypes.objectOf (PropTypes.shape (fishPropType).isRequired),
    order: PropTypes.objectOf (PropTypes.number).isRequired,
    deleteFromOrder: PropTypes.func.isRequired,
  };

  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';

    // Make sure the fish is loaded before we continue
    if (!fish) return null;

    if (!isAvailable) {
      return (
        <CSSTransition {...orderTransitionOptions (key)}>
          <li key={key}>
            Sorry {fish ? fish.name : 'fish'} is no longer available
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...orderTransitionOptions (key)}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition {...countTransitionOptions (count)}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name} {formatPrice (count * fish.price)}
            <button onClick={() => this.props.deleteFromOrder (key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };
  render () {
    const orderIds = Object.keys (this.props.order);
    const total = orderIds.reduce ((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map (this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice (total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
