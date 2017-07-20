import React from 'react';
import { Container, Content, H1 } from 'native-base';
import HomeFooter from './HomeFooter.js';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.onNavigateToNewGame = this.onNavigateToNewGame.bind(this);
		this.onNavigateToJoinGame = this.onNavigateToJoinGame.bind(this);
	}

	onNavigateToNewGame() {
		const { navigate } = this.props.navigation;
		navigate('NewGame');
	}

	onNavigateToJoinGame() {
		const { navigate } = this.props.navigation;
		navigate('JoinGame');
	}

	render() {
		return (
			<Container style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
				<Content style={{ marginTop: '50%' }}>
					<H1 style={{ color: '#107a0e' }}>Bingo Bango Bongo</H1>
				</Content>
				<HomeFooter 
					onNavigateToNewGame={this.onNavigateToNewGame}
					onNavigateToJoinGame={this.onNavigateToJoinGame} />
			</Container>
		)
	}
}
