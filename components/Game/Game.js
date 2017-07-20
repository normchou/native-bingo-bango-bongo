import React from 'react';
import { Root, Container, Button, Footer, FooterTab } from 'native-base';
import ScoreBoard from './ScoreBoard.js';
import GameBoard from './GameBoard.js';
import ListOfHoles from './ListOfHoles.js';

export default class Game extends React.Component {
	static navigationOptions = {
		title: 'Hole #10'
	}

	render() {
		return (
			<Root>
				<Container>
					<ScoreBoard />
					<GameBoard />
					<Footer>
						<FooterTab>
							<Button>
								<ListOfHoles />
							</Button>
						</FooterTab>
					</Footer>
				</Container>
			</Root>
		)
	}
}