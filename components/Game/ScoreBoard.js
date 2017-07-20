import React from 'react';
import { Card, CardItem, Text, Left, Right } from 'native-base';
import PlayersList from './PlayersList.js';

export default class ScoreBoard extends React.Component { 
	render() {
		return (
			<Card style={{ marginLeft: 10, marginRight: 10 }}>
				<CardItem header>
					<Left>
						<Text>ScoreBoard</Text>
					</Left>
					<Right>
						<Text>Game ID 7723</Text>
					</Right>
				</CardItem>
				<PlayersList />
			</Card>
		)
	}
}