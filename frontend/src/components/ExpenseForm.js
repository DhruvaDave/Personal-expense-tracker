import React from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";
import moment from "moment";
import {serverUrl} from "../backend_route";


import axios from "axios";

const FormItem = Form.Item;
const { Option } = Select;

class ExpenseCustomForm extends React.Component {
	state = {
		fromDate: "",
		typeofExpense: "debit",
		all_users: [],
		all_user_income: [],
		selected_user: "",
		selected_user_income: "",
	};

	componentDidMount() {
		axios.get(`${serverUrl}/all-users/`).then((res) => {
			console.log("-------res.data--1111----", res.data);
			this.setState({
				all_users: res.data,
			});
		});
		axios.get(`${serverUrl}/user-income/`).then((res) => {
			console.log("-------res.data--user_income----", res.data);
			this.setState({
				all_user_income: res.data,
			});
		});
	}

	handleFormSubmit = (event, requestType, userExpensesID) => {
		console.log("--------herer-----------");
		console.log("fromDate----", this.state.fromDate);
		console.log("toDate----");

		const amount = event.target.elements.amount.value;
		const from_date = this.state.fromDate;
		const type_of_expense = this.state.typeofExpense;
		const user_id = this.state.selected_user;
		const user_income_id = this.state.selected_user_income;

		console.log("-----event--target---", event.target);
		console.log("---userExpensesID----------", userExpensesID);
		console.log("----requestType-----", requestType);

		switch (requestType) {
			case "post":
				// console.log("-------all_expenses-----------------",this.state);
				// for (var i=0;i<(this.state.user_income.length);i++){
				//     var isAfter = moment(from_date).isAfter(this.state.user_income[i].from_date);
				//     console.log("isAfter--------",isAfter);
				// }
				return axios
					.post(`${serverUrl}/user-expenses/`, {
						from_date: from_date,
						type_of_expense: type_of_expense,
						amount: amount,
						user_id: user_id,
						user_income_id: user_income_id,
					})
					.then((res) => console.log("res-------", res))
					.catch((error) => console.err(error));
			case "put":
				return axios
					.put(`${serverUrl}/user-expenses/${userExpensesID}/`, {
						from_date: from_date,
						type_of_expense: type_of_expense,
						amount: amount,
					})
					.then((res) => console.log("----res----", res))
					.catch((error) => console.err(error));
		}
	};

	onChangeFromDate = (date, dateString) => {
		console.log(date, dateString);
		this.setState({
			fromDate: (date, dateString),
		});
	};

	onChangeTypeOfExpense = (expense) => {
		console.log(expense);
		this.setState({
			typeofExpense: expense,
		});
	};

	onChangeUser = (user) => {
		console.log("---------select---user", user);
		this.setState({
			selected_user: user,
		});
	};

	onChangeUserIncome = (income, income_obj) => {
		console.log("---------select---income", income);
		console.log("---------select---income---props", income_obj);
		this.setState({
			selected_user_income: income,
			selected_user_income_date:
				income_obj.props.children[0] + "/" + income_obj.props.children[2],
		});
	};

	render() {
		return (
			<div>
				{/* HTMLFormControlsCollection(4) [input.ant-calendar-picker-input.ant-input, 
            input.ant-calendar-picker-input.ant-input, input.ant-input, 
            button.ant-btn.ant-btn-primary.ant-btn-clicked, 
            credit: input.ant-input] */}
				<Form
					onSubmit={(event) =>
						this.handleFormSubmit(
							event,
							this.props.requestType,
							this.props.userExpenseID,
						)
					}
				>
					<FormItem label="From Date">
						<Input.Group compact>
							<DatePicker
								name="from_date"
								onChange={this.onChangeFromDate}
								style={{ width: "30%" }}
							/>
						</Input.Group>
					</FormItem>
					<FormItem label="Type of Expense">
						<Input.Group compact>
							<Select
								name="type_of_expense"
								defaultValue="Debit"
								onChange={this.onChangeTypeOfExpense}
								style={{ width: "30%" }}
							>
								<Option value="debit">Debit</Option>
								<Option value="cedit">Cedit</Option>
							</Select>
						</Input.Group>
					</FormItem>

					<FormItem label="User">
						<Input.Group compact>
							<Select
								name="user_id"
								defaultValue=""
								onChange={this.onChangeUser}
								style={{ width: "30%" }}
							>
								{this.state.all_users.map((user) => (
									<Option value={user.id}>{user.username}</Option>
								))}
							</Select>
						</Input.Group>
					</FormItem>

					<FormItem label="User Income">
						<Input.Group compact>
							<Select
								name="user_income_id"
								defaultValue=""
								onChange={this.onChangeUserIncome}
								style={{ width: "30%" }}
							>
								{this.state.all_user_income.map((income) => (
									<Option value={income.id}>
										{income.from_date} - {income.to_date}
									</Option>
								))}
							</Select>
						</Input.Group>
					</FormItem>

					<FormItem label="Amount">
						<Input
							name="amount"
							placeholder="Enter some Amount ..."
							style={{ width: "30%" }}
						/>
					</FormItem>
					<FormItem>
						<Button type="primary" htmlType="submit">
							{this.props.btnText}
						</Button>
					</FormItem>
				</Form>
			</div>
		);
	}
}

export default ExpenseCustomForm;
