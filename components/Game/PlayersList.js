import React from 'react';
import { Container, Content, List, ListItem, Right, Body, Text } from 'native-base';

export default class PlayersList extends React.Component {
	render() {
		return (
			<Content>
				<List>
					<ListItem>
						<Body>
							<Text>Norman</Text>
						</Body>
						<Right>	
							<Text>5 Pts</Text>
						</Right>
					</ListItem>
					<ListItem>
						<Body>
							<Text>Bob</Text>
						</Body>
						<Right>	
							<Text>4 Pts</Text>
						</Right>
					</ListItem>
					<ListItem>
						<Body>
							<Text>Tom</Text>
						</Body>
						<Right>	
							<Text>3 Pts</Text>
						</Right>
					</ListItem>
					<ListItem>
						<Body>
							<Text>Greg</Text>
						</Body>
						<Right>	
							<Text>2 Pts</Text>
						</Right>
					</ListItem>
				</List>
			</Content>
		)
	}
}