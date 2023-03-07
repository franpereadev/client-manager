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
		name: "Clients",
		url: "/clients",
		current: true,
	},
	{
		icon: FireIcon,
		name: "Feature",
		url: "/feature",
		current: false,
	},
];

export default sideBarLinks;
