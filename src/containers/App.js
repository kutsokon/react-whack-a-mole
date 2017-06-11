import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Greet from '../components/Greet';
import Tile from '../components/Tile';
import StartButton from '../components/StartButton';
import StopButton from '../components/StopButton';
import tileActions from '../actions/tileActions';
import gameActions from '../actions/gameActions';
import { INITIAL_SPEED } from '../constants/speed';
import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.startInitialGame = this.startInitialGame.bind(this);
		this.generateNextStep = this.generateNextStep.bind(this);
		this.stopInitialGame = this.stopInitialGame.bind(this);
	}

	generateNextStep() {
		const { activeRandomTile, clearTiles } = this.props.tileActions;
		this.interval = setInterval(() => {
			clearTiles();
			activeRandomTile();
		}, INITIAL_SPEED);
	}

	startInitialGame() {
		const { startGame } = this.props.gameActions;
		startGame();
		this.generateNextStep();
	}

	stopInitialGame() {
		clearInterval(this.interval);
	}

	render() {
		const { tiles } = this.props;
		const { toggleTile } = this.props.tileActions;
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
					<StartButton startGame={this.startInitialGame} />
					<StopButton stopGame={this.stopInitialGame} />
				</div>
			</div>
		);
	}
}

App.propTypes = {
	tiles: PropTypes.array.isRequired,
	isGameInProgress: PropTypes.bool.isRequired,
	tileActions: PropTypes.object.isRequired,
	gameActions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
		tiles: state.tiles,
		isGameInProgress: state.game.isGameInProgress
	});

const mapDispatchToProps = dispatch => ({
		tileActions: bindActionCreators(tileActions, dispatch),
		gameActions: bindActionCreators(gameActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

