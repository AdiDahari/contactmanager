import React, { Component, Fragment } from 'react';

import { Consumer } from '../context';
import Contact from './Contact';

class Contacts extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { contacts } = value;
					return (
						<Fragment>
							{contacts.map(contact => (
								<Contact key={contact.id} contact={contact} />
							))}
						</Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Contacts;
