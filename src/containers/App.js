import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Greet from '../components/Greet';
import Tile from '../components/Tile';
import tileActions from '../actions/tileActions';
import './app.css';

class App extends Component {
	render() {
		const { tiles } = this.props;
		const { toggleTile } = this.props.tileActions;
		const tilesElements = tiles.map((item, index) => {
			return <Tile toggleTile={toggleTile} mole={item.mole} id={item.id} key={item.id}/>
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

const mapStateToProps = (state) => {
	return {
		tiles: state.tiles
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		tileActions: bindActionCreators(tileActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

