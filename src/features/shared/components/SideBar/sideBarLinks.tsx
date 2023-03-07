import {
	FireIcon,
	FlagIcon,
	HomeIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";

export interface ISideBarLink {
	icon: any;
	name: string;
	url: string;
	current: boolean;
}
const sideBarLinks: ISideBarLink[] = [
	{
		icon: UsersIcon,
		name: "Clientes",
		url: "/clients",
		current: true,
	},
	{
		icon: FireIcon,
		name: "Tareas",
		url: "/tasks",
		current: false,
	},
	{
		icon: FlagIcon,
		name: "Planes",
		url: "/plans",
		current: false,
	},
];

export default sideBarLinks;
