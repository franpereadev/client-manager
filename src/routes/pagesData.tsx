import Dashboard from "../features/dashboard/Dashboard";
import Clients from "../features/dashboard/clients/components/Clients";
import Register from "../features/auth/components/Register";
import Login from "../features/auth/components/Login";
import Tasks from "../features/dashboard/tasks/Tasks";
import Plans from "../features/dashboard/plans/Plans";

export interface IPageRoute {
	key: string;
	component: any;
	path: string;
	children?: IPageChildrenRoute[];
}
export interface IPageChildrenRoute {
	index?: boolean;
	exact: boolean;
	key: string;
	component: any;
	path: string;
	children?: IPageChildrenRoute[];
}
const pageData: IPageRoute[] = [
	{
		key: "dashboard",
		component: <Dashboard />,
		path: "/",
		children: [
			{
				index: true,
				exact: false,
				key: "clients",
				component: <Clients />,
				path: "clients",
			},
			{
				index: false,
				exact: false,
				key: "tasks",
				component: <Tasks />,
				path: "tasks",
			},
			{
				index: false,
				exact: false,
				key: "plans",
				component: <Plans />,
				path: "plans",
			},
		],
	},
	{
		key: "register",
		component: <Register />,
		path: "/register",
		children: [
			{
				index: true,
				exact: false,
				key: "step1",
				component: <Register />,
				path: "clients",
			},
		],
	},
	{
		key: "login",
		component: <Login />,
		path: "/login",
		children: [],
	},
];
export default pageData;
