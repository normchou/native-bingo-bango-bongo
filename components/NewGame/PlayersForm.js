import React from 'react';
import { Content, Button, Text, Form } from 'native-base';
import PlayerNameTextField from './PlayerNameTextField.js';
import GolfForm from './GolfForm.js';

const BUTTONS = ['1', '2', '3', '4', 'Cancel']
const CANCEL_INDEX = 4

export default class PlayersForm extends React.Component {
	constructor(props) {
		super(props);

		this.renderPlayerNameTextField = this.renderPlayerNameTextField.bind(this);
	}

	renderPlayerNameTextField() {
		let items = [];

		for (let i = 0; i < 4; i++) {
			let placeholder = `Player ${i+1} Name`
			items.push(<PlayerNameTextField name={placeholder} key={i} />);
		}

		return items;
	}

	render() {
		const { navigate } = this.props.navigation;
		
		return (
			<Content>
      			<Form>
					{this.renderPlayerNameTextField()}
					<GolfForm />
					<Button
						block 
						style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}
						onPress={() => navigate('Game')}>
						<Text>Start Game</Text>
					</Button>
				</Form>
          	</Content>
		)
	}
}