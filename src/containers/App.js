import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Greet from '../components/Greet';
import './app.css';

class App extends Component {
	render() {
		const { tiles } = this.props;
		const tilesElements = tiles.map((item, index) => {
			return <div key={index} className='hole'>{item.status}</div>;
		})

		return (
			<div >
				<div className='wrapper'>
					<Greet />
					<div className='game-container'>
						<div>{tilesElements}</div>
					</div>
					<div>Start</div>
				</div>	
			</div>
		);
	}
}

App.propTypes = {
	tiles: PropTypes.array
}

const mapsStateToProps = (state) => {
	return {
		tiles: state.tiles
	}
}

export default connect(mapsStateToProps)(App);

