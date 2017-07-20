import React from 'react';
import { Root, Container, Content, Form, Item, Input, Button, Text } from 'native-base';

export default class JoinGame extends React.Component {
	static navigationOptions = {
		title: 'Join Existing Game'
	}

	render() {
		return (
			<Root>
				<Container>
					<Content padder style={{ marginTop: '50%' }}>
						<Form>
							<Item regular>
								<Input
									style={{textAlign: 'center', color: 'green'}}
									keyboardType='numeric'
									maxLength={5}
									placeholder='Enter 5 Digit Game ID' />
							</Item>
							<Button
								success
								style={{marginTop: 30}}
								full>
								<Text>Enter</Text>
							</Button>
						</Form>
					</Content>
				</Container>
			</Root>
		)
	}
}