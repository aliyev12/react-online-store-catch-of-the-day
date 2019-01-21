import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class AddFishForm extends Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
        addFish: PropTypes.func.isRequired
    };

    createFish = e => {
        e.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        this.props.addFish(fish);
        e.currentTarget.reset();
    }
  render () {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" ref={this.nameRef} placeholder="Name" />
        <input type="number" name="price" ref={this.priceRef} placeholder="Price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Description" />
        <input type="text" name="image" ref={this.imageRef} placeholder="Image" />
        <button type="submit">+ ADD FISH</button>
      </form>
    );
  }
}

export default AddFishForm;
