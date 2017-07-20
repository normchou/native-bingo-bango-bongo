import React from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';

export default function HomeFooter(props) {
	return (
		<Footer>
			<FooterTab>
				<Button 
					full
					onPress={props.onNavigateToNewGame} 
					style={{backgroundColor: '#107a0e'}}>
					<Text style={{color: 'white'}}>Start New Game</Text>
				</Button>
				<Button
					full 
					onPress={props.onNavigateToJoinGame}
					style={{backgroundColor: '#19a316'}}>
					<Text style={{color: 'white'}}>Join Existing Game</Text>
				</Button>
			</FooterTab>
		</Footer>
	)
}