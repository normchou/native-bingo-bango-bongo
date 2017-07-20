import React from 'react';
import { Picker, Item, Content } from 'native-base';

export default class ListOfHoles extends React.Component {
	constructor(props) {
		super(props)
	
		this.onValueChange = this.onValueChange.bind(this)
	}

	onValueChange(value) {
		this.setState({
			hole: value
		})
	}

	renderHoles() {
		let items = [];

		for (let i = 1; i <= 18; i++) {
			items.push(<Item label={`Hole #${i}`} key={i} value={i} />)
		}

		return items;
	}

	render() {
		return (
			<Picker
				placeholder="Select Hole"
				mode="dropdown"
				onValueChange={this.onValueChange}>
				{this.renderHoles()}
			</Picker>
		)
	}
}