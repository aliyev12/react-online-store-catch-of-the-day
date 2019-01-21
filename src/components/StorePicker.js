import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    static propTypes = {
        history: PropTypes.object
    };

    myInput = React.createRef();

    goToStore = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get the text from that input
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/whatevet-they-entered
        this.props.history.push(`/store/${storeName}`);
    };

    render() {
        return (
            <>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter A Store</h2>

                    <input ref={this.myInput} type="text" placeholder="Store Name" defaultValue={getFunName()} required />
                    <button type="submit">Visit Store -></button>
                </form>
            </>
        );
    }
}

export default StorePicker;
