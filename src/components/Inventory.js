import React, {Component} from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import {fishPropType} from './prop-types/propTypes';
import Login from './Login';
import base, { firebaseApp } from '../base';

export class Inventory extends Component {
  static propTypes = {
    addFish: PropTypes.func.isRequired,
    loadSampleFishes: PropTypes.func,
    fishes: PropTypes.objectOf (PropTypes.shape (fishPropType)),
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
  };

  state = {
      uid: null,
      owner: null
  }

  componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
          if(user) {
              this.authHandler({user});
          }
      })
  }

  authHandler = async authData => {
      // 1. Loop up the current store in the firebase database
      const store = await base.fetch(this.props.storeId, { context: this });
      // 2. Claim it if there is no owner
      if(!store.owner) {
          // Save it as our own
          await base.post(`${this.props.storeId}/owner`, {
              data: authData.user.uid
          });
      }
      // 3. Set the state of the inventory component to reflect the current user
      this.setState({
          uid: authData.user.uid,
          owner: store.owner || authData.user.uid
      });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider)
    .then(this.authHandler)
    .catch(err => {
        console.log(err);
        alert('Something went wrong');
    });
  };

  logout = async () => {
      console.log('Logging out');
      await firebase.auth().signOut();
      this.setState({ uid: null });
  };

  render () {
    const {fishes, addFish, loadSampleFishes} = this.props;
    const logout = <button onClick={this.logout}>Log out</button>;

    // 1. Check if user is not logged in
    if(!this.state.uid) {
        return <Login authenticate={this.authenticate} />
    }

    // 2. Check if logged in user is not the owner of the store
    if(this.state.uid !== this.state.owner) {
        return <div>
            <p>Sorry, you are not the owner of this store</p>
            {logout}
        </div>
    }

    // 3. User must be the owner, so render the inventory
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys (fishes).map (key => (
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
