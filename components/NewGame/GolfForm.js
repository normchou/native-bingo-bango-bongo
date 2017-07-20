import React from 'react';
import { Content, ListItem, CheckBox, Body, Text } from 'native-base';

export default class GolfForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: true
		}

		this.toggleCheckbox = this.toggleCheckbox.bind(this);
	}

	toggleCheckbox(e) {
		e.preventDefault();

		this.setState({
			selected: !this.state.selected
		})
	}

	render() {
		return (
			<Content style={{marginTop: 10}}>
				<ListItem style={{marginBottom: 10}}>
					<CheckBox onPress={this.toggleCheckbox} checked={this.state.selected} />
					<Body>
						<Text>9 Holes</Text>
					</Body>
				</ListItem>
				<ListItem>
					<CheckBox onPress={this.toggleCheckbox} checked={!this.state.selected} />
					<Body>
						<Text>18 Holes</Text>
					</Body>
				</ListItem>
			</Content>
		)
	}
}
