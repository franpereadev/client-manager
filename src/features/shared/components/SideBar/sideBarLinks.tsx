export interface ISideBarLink {
	icon: string;
	name: string;
	link: string;
}
const sideBarLinks: ISideBarLink[] = [
	{
		icon: "test",
		name: "Clients",
		link: "/clients",
	},
];

export default sideBarLinks;
