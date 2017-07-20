import React from 'react';
import { Root, Container, Content } from 'native-base';
import PlayersForm from './PlayersForm.js';

export default class NewGame extends React.Component {
	constructor(props) {
		super(props)
	}

	static navigationOptions = {
		title: 'Create New Game'
	}

	render() {
		return (
			<Root>
				<Container>
					<Content>
						<PlayersForm {...this.props} style={{ flex: 3 }}/>
					</Content>
				</Container>
			</Root>
		)
	}
}