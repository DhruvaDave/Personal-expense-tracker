import UserExpensesList from "./containers/UserExpensesListView";
import UserIncomeList from "./containers/UserIncomeListView";
import UserIncomeDetail from "./containers/UserIncomeDetailView";
import UserExpensesDetail from "./containers/UserExpensesDetailView";
import HomePage from "./containers/HomePageView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

const Routes = [
	{
		path: "/user-income/:userIncomeID/",
		component: UserIncomeDetail,
	},
	{
		path: "/login/",
		component: Login,
	},
	{
		path: "/signup/",
		component: Signup,
	},
	{
		path: "/user-income/",
		component: UserIncomeList,
	},
	{
		path: "/user-expenses/",
		component: UserExpensesList,
	},
	{
		path: "/user-expenses/:userExpenseID/",
		component: UserExpensesDetail,
	},
	{
		path: "",
		component: HomePage,
	},
];

export default Routes;
