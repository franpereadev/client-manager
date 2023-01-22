export interface ISideBarLink {
	icon: any;
	name: string;
	url: string;
}
const sideBarLinks: ISideBarLink[] = [
	{
		icon: "house",
		name: "Dashboard",
		url: "/",
	},
	{
		icon: "user-group",
		name: "Clients",
		url: "/clients",
	},
	{
		icon: "dumbbell",
		name: "Tasks",
		url: "/tasks",
	},
];

export default sideBarLinks;
