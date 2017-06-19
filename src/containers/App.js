import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Greet from '../components/Greet';
import Tile from '../components/Tile';
import ControlButton from '../components/ControlButton';
import tilesActions from '../actions/tiles';
import gameActions from '../actions/game';
import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.triggerStartGame = this.triggerStartGame.bind(this);
		this.triggerStopGame = this.triggerStopGame.bind(this);
	}

	triggerStartGame() {
		const { startGame } = this.props.gameActions;
		startGame();
	}

	triggerStopGame() {
		const { stopGame } = this.props.gameActions;
		stopGame();
	}

	render() {
		const { tiles, scores } = this.props;
		const { toggleTile } = this.props.tilesActions;
		const tilesElements = tiles.map(item => <Tile
			toggleTile={toggleTile}
			mole={item.mole}
			id={item.id}
			key={item.id} />);

		return (
			<div >
				<div className='wrapper'>
					<Greet />
					<div className='game-container'>
						<div>{tilesElements}</div>
					</div>
					<ControlButton controlAction={this.triggerStartGame} actionName="Start"/>
					<ControlButton controlAction={this.triggerStopGame} actionName="Stop"/>
					<div>Player score: {scores.player}</div>
					<div>Mole score: {scores.mole}</div>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	tiles: PropTypes.array.isRequired,
	isGameInProgress: PropTypes.bool.isRequired,
	tilesActions: PropTypes.object.isRequired,
	gameActions: PropTypes.object.isRequired,
	scores: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
		tiles: state.tiles,
		isGameInProgress: state.game.isGameInProgress,
		scores: state.scores
	});

const mapDispatchToProps = dispatch => ({
		tilesActions: bindActionCreators(tilesActions, dispatch),
		gameActions: bindActionCreators(gameActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

