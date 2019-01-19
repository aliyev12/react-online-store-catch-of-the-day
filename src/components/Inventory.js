import React, {Component} from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

export class Inventory extends Component {
  render () {
    const {fishes, addFish, loadSampleFishes} = this.props;
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(fishes).map(key => (
        <EditFishForm 
            key={key} 
            fish={fishes[key]} 
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
            index={key}
        />
        ))}
        <AddFishForm addFish={addFish} />
        <button onClick={loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
