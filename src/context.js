import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter(c => c.id !== action.payload),
			};

		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		contacts: [
			{
				id: 1,
				name: 'John Doe',
				email: 'jdoe@test.com',
				phone: '555-555-5555',
			},
			{
				id: 2,
				name: 'Karen Williams',
				email: 'kwil@test.com',
				phone: '666-666-6666',
			},
			{
				id: 3,
				name: 'Henry Johnson',
				email: 'hjoh@test.com',
				phone: '777-777-7777',
			},
		],
		dispatch: action => {
			this.setState(state => reducer(state, action));
		},
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
