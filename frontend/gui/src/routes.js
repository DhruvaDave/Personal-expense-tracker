import React from 'react';
import { Route } from 'react-router-dom';

import UserIncome from './containers/UserIncomeListView';
// import UserExpenses from './containers/AddUserExpensesView';
import UserIncomeDetail from './containers/UserIncomeDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={UserIncome} />
        <Route exact path='/:userIncomeID' component={UserIncomeDetail} />
        {/* <Route path="/add-user-expenses" component={UserExpenses} /> */}
    </div>
);

export default BaseRouter;