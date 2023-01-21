import Dashboard from "../layout/dashboard";
import Clients from "../pages/clients";

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
		],
	},
];
export default pageData;
