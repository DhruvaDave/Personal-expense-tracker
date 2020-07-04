import UserIncomeList from './containers/UserIncomeListView';
import UserIncomeDetail from './containers/UserIncomeDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const Routes = [
    {
        path: "/:userIncomeID/",
        component: UserIncomeDetail
    },
    {
        path: "/login/",
        component: Login
    },
    {
        path: "/signup/",
        component: Signup
    },
    {
        path: "/",
        component: UserIncomeList
    },
    {
        path: "/",
        component: UserIncomeList
    }
];

export default Routes;
