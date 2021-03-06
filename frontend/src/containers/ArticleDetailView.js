import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {serverUrl} from "../backend_route";


import { Button, Card } from "antd";

import CustomForm from "../components/Form";

class ArticleDetail extends React.Component {
	state = {
		article: {},
	};

	componentDidMount() {
        const articleID = this.props.match.params.articleID;
		axios.get(`${serverUrl}/api/${articleID}`).then((res) => {
			this.setState({
				article: res.data,
			});
		});
	}

	handleDelete = (event) => {
		const articleID = this.props.match.params.articleID;
		axios.delete(`${serverUrl}/api/${articleID}`);
		this.props.history.push("/");
		this.forceUpdate();
	};

	render() {
		// if (!this.props.isAuthenticated) {
		//     this.props.history.push('/auth');
		// }

		return (
			<div>
				<Card title={this.state.article.title}>
					<p>{this.state.article.content}</p>
				</Card>
				<CustomForm
					requestType="put"
					articleID={this.props.match.params.articleID}
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

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.isAuthenticated,
	};
};

export default connect(mapStateToProps)(ArticleDetail);
