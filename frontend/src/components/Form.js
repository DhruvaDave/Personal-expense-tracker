import React from "react";
import { Form, Input, Button, DatePicker } from "antd";

import axios from "axios";

const FormItem = Form.Item;

class CustomForm extends React.Component {
	state = {
		fromDate: "",
		toDate: "",
	};

	handleFormSubmit = (event, requestType, userIncomeID) => {
		console.log("--------herer-----------");
		console.log("fromDate----", this.state.fromDate);
		console.log("toDate----", this.state.toDate);

		// const from_date = event.target.elements.from_date.value;
		// const to_date = event.target.elements.to_date.value;
		const credit = event.target.elements.credit.value;
		const from_date = this.state.fromDate;
		const to_date = this.state.toDate;
		// const from_date = '2020-02-02';
		// const to_date = '2020-01-01';
		// const credit = 123
		const user_id = 1;

		console.log("-----event--target---", event.target);
		console.log("---userIncomeID----------", userIncomeID);
		console.log("----requestType-----", requestType);

		switch (requestType) {
			case "post":
				return axios
					.post("http://127.0.0.1:8000/user-income/", {
						from_date: from_date,
						to_date: to_date,
						credit: credit,
						// user_id: user_id,
					})
					.then((res) => console.log("res-------", res))
					.catch((error) => console.err(error));
			case "put":
				return axios
					.put(`http://127.0.0.1:8000/user-income/${userIncomeID}/`, {
						from_date: from_date,
						to_date: to_date,
						credit: credit,
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

	onChangeToDate = (date, dateString) => {
		console.log("----todate", date, dateString);
		this.setState({
			toDate: (date, dateString),
		});
	};

	render() {
		return (
			<div>
				{/* HTMLFormControlsCollection(4) [input.ant-calendar-picker-input.ant-input, 
            input.ant-calendar-picker-input.ant-input, input.ant-input, 
            button.ant-btn.ant-btn-primary.ant-btn-clicked, 
            credit: input.ant-input] */}
				{/* <Input name="from_date" style={{ width: '50%' }} defaultValue="input content" /> */}
				{/* <Input name="to_date" style={{ width: '50%' }} defaultValue="input content" /> */}
				<Form
					onSubmit={(event) =>
						this.handleFormSubmit(
							event,
							this.props.requestType,
							this.props.userIncomeID,
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
					<FormItem label="To Date">
						<Input.Group compact>
							<DatePicker
								name="to_date"
								onChange={this.onChangeToDate}
								style={{ width: "30%" }}
							/>
						</Input.Group>
					</FormItem>
					<FormItem label="Credit Amount">
						<Input
							name="credit"
							placeholder="Enter some Credit Amount ..."
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

export default CustomForm;
