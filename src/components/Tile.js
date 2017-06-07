import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tile extends Component {
	changeStatus() {
		this.props.toggleTile(this.props.id);
	}

	render() {		
		return (
			<div onClick={::this.changeStatus} className={'hole ' + (this.props.mole ? 'active' : 'disabled')}>
				{this.props.mole}
			</div>
		);
	}
}

Tile.propTypes = {
	mole: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired
};

export default Tile;
