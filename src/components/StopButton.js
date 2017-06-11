import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StopButton extends Component {
    stopGame(e) {
        e.preventDefault();
        this.props.stopGame();
    }

    render() {
        return <button onClick={::this.stopGame}>Stop</button>;
    }
}

StopButton.propTypes = {
    stopGame: PropTypes.func.isRequired
};

export default StopButton;
