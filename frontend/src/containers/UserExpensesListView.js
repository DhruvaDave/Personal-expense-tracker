import React from "react";
import axios from "axios";

// import Articles from '../components/Article';
import UserExpenses from "../components/UserExpenses";
import ExpenseCustomForm from "../components/ExpenseForm";

class UserExpensesList extends React.Component {
	state = {
		user_expenses: [],
	};

	componentDidMount() {
		axios.get("http://127.0.0.1:8000/user-expenses/").then((res) => {
			console.log("-------res.data--1111----", res.data);
			this.setState({
				user_expenses: res.data,
			});
		});
	}

	render() {
		return (
			<div>
				<UserExpenses data={this.state.user_expenses} />
				<br />
				<h2>Set Your Expeses-----------</h2>
				<ExpenseCustomForm
					requestType="post"
					userIncomeID={null}
					btnText="Create"
				/>
			</div>
		);
	}
}

export default UserExpensesList;
