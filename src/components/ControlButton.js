import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ControlButton extends Component {
    controlAction(e) {
        e.preventDefault();
        this.props.controlAction();
    }

    render() {
        return <button onClick={::this.controlAction}>{this.props.actionName}</button>;
    }
}

ControlButton.propTypes = {
    controlAction: PropTypes.func.isRequired,
    actionName: PropTypes.string.isRequired
};

export default ControlButton;
