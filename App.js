import React from 'react';
import { Container, Footer, FooterTab, Button, Text } from 'native-base'
import { StackNavigator } from 'react-navigation';

import Home from './components/Home/Home.js';
import NewGame from './components/NewGame/NewGame.js';
import JoinGame from './components/JoinGame/JoinGame.js';
import Game from './components/Game/Game.js';

const BingoBangoBongo = StackNavigator({
	Main: {
		screen: Home
	},
	Game: {
		screen: Game
	},
	JoinGame: {
		screen: JoinGame
	},
	NewGame: {
		screen: NewGame
	},
});

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container>
				<BingoBangoBongo {...this.props} />
			</Container>
		)
	}
}
