import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd';

import CustomForm from '../components/Form';

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const userIncomeID = this.props.match.params.userIncomeID;
        axios.get(`http://127.0.0.1:8000/api/${userIncomeID}`)
            .then(res => {
                this.setState({
                    article: res.data
                });
            })
    }

    handleDelete = (event) => {
        const userIncomeID = this.props.match.params.userIncomeID;
        axios.delete(`http://127.0.0.1:8000/api/${userIncomeID}`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <CustomForm
                    requestType="put"
                    userIncomeID={this.props.match.params.userIncomeID}
                    btnText="Update" />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        )
    }
}

export default ArticleDetail;