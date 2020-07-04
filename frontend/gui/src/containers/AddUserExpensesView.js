import React from 'react';
import axios from 'axios';

// import Articles from '../components/Article';
import UserExpenses from '../components/UserExpenses';
import CustomForm from '../components/Form';

class AddUserExpenses extends React.Component {

    state = {
        user_expenses: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/expenses')
        .then(res => {
            console.log("-------res.data--expenses----",res.data);
                this.setState({
                    user_expenses: res.data
                });
            })
    }

    render() {
        return (
            <div>
                <UserExpenses data={this.state.user_expenses} />
                <br />
                <h2>Add Expenses</h2>
                {/* <CustomForm 
                    requestType="post"
                    userIncomeID={null}
                    btnText="Create" /> */}
            </div>
        )
    }
}

export default AddUserExpenses;