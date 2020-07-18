import React from "react";
import axios from "axios";

import { Button, Card } from "antd";

import ExpenseCustomForm from "../components/ExpenseForm";

class UserExpensesDetail extends React.Component {
	state = {
		expense: {},
	};

	componentDidMount() {
		const userExpenseID = this.props.match.params.userExpenseID;
		axios
			.get(`http://127.0.0.1:8000/user-expenses/${userExpenseID}`)
			.then((res) => {
				this.setState({
					expense: res.data,
				});
			});
	}

	handleDelete = (event) => {
		const userExpenseID = this.props.match.params.userExpenseID;
		axios.delete(`http://127.0.0.1:8000/user-expenses/${userExpenseID}`);
		this.props.history.push("/");
		this.forceUpdate();
	};

	render() {
		return (
			<div>
				<Card title={this.state.expense.title}>
					<p>{this.state.expense.content}</p>
				</Card>
				<ExpenseCustomForm
					requestType="put"
					userExpenseID={this.props.match.params.userExpenseID}
					btnText="Update"
				/>
				<form onSubmit={this.handleDelete}>
					<Button type="danger" htmlType="submit">
						Delete
					</Button>
				</form>
			</div>
		);
	}
}

export default UserExpensesDetail;
