import React from 'react';
import { Content, ActionSheet, Button, Text  } from 'native-base';

const NAMES = [
	'Norman', 'Greg', 'Al', 'Joe', 'Cancel'
]

const CANCEL_INDEX = NAMES.length - 1;

export default class GameBoard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bingoWinner: '',
			bangoWinner: '',
			bongoWinner: ''
		};

		this.renderBingoSheet = this.renderBingoSheet.bind(this)
		this.renderBangoSheet = this.renderBangoSheet.bind(this)
		this.renderBongoSheet = this.renderBongoSheet.bind(this)
	}

	renderBingoSheet() {
		ActionSheet.show(
                {
                  	options: NAMES,
                  	cancelButtonIndex: CANCEL_INDEX,
                  	title: "Select BINGO Winner"
                },
                buttonIndex => {
                	if (NAMES[buttonIndex] === 'Cancel') {
                		return null;
                	}

                  	this.setState({ bingoWinner: NAMES[buttonIndex] });
                }
              )
	}

	renderBangoSheet() {
		ActionSheet.show(
                {
                  	options: NAMES,
                  	cancelButtonIndex: CANCEL_INDEX,
                  	title: "Select BINGO Winner"
                },
                buttonIndex => {
                	if (NAMES[buttonIndex] === 'Cancel') {
                		return null;
                	}

                  	this.setState({ bangoWinner: NAMES[buttonIndex] });
                }
              )
	}

	renderBongoSheet() {
		ActionSheet.show(
                {
                  	options: NAMES,
                  	cancelButtonIndex: CANCEL_INDEX,
                  	title: "Select BINGO Winner"
                },
                buttonIndex => {
                	if (NAMES[buttonIndex] === 'Cancel') {
                		return null;
                	}

                	this.setState({ bongoWinner: NAMES[buttonIndex] });
                }
              )
	}

	render() {
		return (
			<Content style={{ marginTop: 10 }}>
				<Button block success onPress={this.renderBingoSheet} style={{marginBottom: 10, marginLeft: 10, marginRight: 10}}>
		        	<Text>BINGO Winner: {this.state.bingoWinner}</Text>
	          	</Button>
	          	<Button block success onPress={this.renderBangoSheet} style={{marginBottom: 10, marginLeft: 10, marginRight: 10}}>
		        	<Text>BANGO Winner: {this.state.bangoWinner}</Text>
	          	</Button>
	          	<Button block success onPress={this.renderBongoSheet} style={{marginBottom: 10, marginLeft: 10, marginRight: 10}}>
		        	<Text>BONGO Winner: {this.state.bongoWinner}</Text>
	          	</Button>
	          	<Button block bordered success style={{marginTop: 20, marginLeft: 10, marginRight: 10}}>
	          		<Text>Save & Go To Next Hole</Text>
	          	</Button>
			</Content>
		)
	}
}