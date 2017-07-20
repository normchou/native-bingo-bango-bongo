import React from 'react';
import { Item, Input, Label } from 'native-base';

export default function PlayerNameTextField(props) {
	return (
		<Item floatingLabel>
			<Label>{props.name}</Label>
			<Input />
		</Item>
	)
}