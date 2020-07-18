import React from "react";
import axios from "axios";

import { Button, Card } from "antd";

import CustomForm from "../components/Form";

class UserIncomeDetail extends React.Component {
	state = {
		article: {},
	};

	componentDidMount() {
		const userIncomeID = this.props.match.params.userIncomeID;
		console.log("------localStorage---------______", localStorage);
		axios
			.get(`http://127.0.0.1:8000/user-income/${userIncomeID}`)
			.then((res) => {
				this.setState({
					article: res.data,
				});
			});
	}

	handleDelete = (event) => {
		const userIncomeID = this.props.match.params.userIncomeID;
		axios.delete(`http://127.0.0.1:8000/user-income/${userIncomeID}`);
		this.props.history.push("/");
		this.forceUpdate();
	};

	render() {
		return (
			<div>
				<Card title={this.state.article.title}>
					<p>{this.state.article.content}</p>
				</Card>
				<CustomForm
					requestType="put"
					userIncomeID={this.props.match.params.userIncomeID}
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

export default UserIncomeDetail;
