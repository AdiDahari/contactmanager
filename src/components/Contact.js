import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

class Contact extends Component {
	state = {
		showInfo: false,
	};

	onDeleteClick = (id, dispatch) => {
		dispatch({ type: 'DELETE_CONTACT', payload: id });
	};

	render() {
		const { id, name, email, phone } = this.props.contact;
		const { showInfo } = this.state;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className="card card-body mb-3">
							<h4>
								{name}{' '}
								<i
									onClick={() =>
										this.setState({ showInfo: !this.state.showInfo })
									}
									className="fas fa-sort-down"
									style={{ cursor: 'pointer' }}
								></i>
								<i
									onClick={this.onDeleteClick.bind(this, id, dispatch)}
									className="fas fa-remove"
									style={{ cursor: 'pointer', float: 'right', color: 'red' }}
								></i>
							</h4>
							{showInfo && (
								<ul className="list-group">
									<li className="list-group-item">Email: {email}</li>
									<li className="list-group-item">Phone: {phone}</li>
								</ul>
							)}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default Contact;
