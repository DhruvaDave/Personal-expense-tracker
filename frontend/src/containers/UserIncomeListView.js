import React from "react";
import axios from "axios";
import {serverUrl} from "../backend_route";

// import Articles from '../components/Article';
import UserIncomes from "../components/UserIncome";
import CustomForm from "../components/Form";

class UserIncomeList extends React.Component {
	state = {
		user_incomes: [],
	};

	componentDidMount() {
		axios.get(`${serverUrl}/user-income/`).then((res) => {
			console.log("-------res.data------", res.data);
			console.log("------localStorage---------______", localStorage);
			this.setState({
				user_incomes: res.data,
			});
		});
	}

	render() {
		return (
			<div>
				<UserIncomes data={this.state.user_incomes} />
				<br />
				<h2>Set Your Income</h2>
				<CustomForm requestType="post" userIncomeID={null} btnText="Create" />
			</div>
		);
	}
}

export default UserIncomeList;
