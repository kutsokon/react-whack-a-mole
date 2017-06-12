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
					<StartButton startGame={this.triggerStartGame} />
					<StopButton stopGame={this.triggerStopGame} />
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

