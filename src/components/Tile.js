import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tile extends Component {
	changeStatus() {
		this.props.toggleTile(this.props.id);
	}

	render() {
		const moleClass = this.props.mole ? 'active' : 'disabled';
		return (
			<div onClick={::this.changeStatus} className={`hole ${moleClass}`}>
				{this.props.mole}
			</div>
		);
	}
}

Tile.propTypes = {
	mole: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired,
	toggleTile: PropTypes.func.isRequired
};

export default Tile;
