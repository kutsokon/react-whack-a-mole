import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StartButton extends Component {
    startGame(e) {
        e.preventDefault();
        this.props.startGame();
    }

    render() {
        return <button onClick={::this.startGame}>Start</button>;
    }
}

StartButton.propTypes = {
    startGame: PropTypes.func.isRequired
};

export default StartButton;
