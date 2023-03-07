import Login from "../features/auth/components/Login";
import Register from "../features/auth/components/Register";
import Clients from "../features/dashboard/clients/components/Clients";
import Dashboard from "../features/dashboard/Dashboard";
import Feature from "../features/dashboard/example-feature/components/Feature";

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
				key: "feature",
				component: <Feature />,
				path: "feature",
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
