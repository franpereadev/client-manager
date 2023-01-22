import React from "react";
import { ISideBarLink } from "./sideBarLinks";

export interface ISideBarProps {
	links: ISideBarLink[];
}

function SideBar({ links }: ISideBarProps) {
	return (
		<>
			{links.map((link) => {
				return <div key="{link}">{link.name}</div>;
			})}
		</>
	);
}

export default SideBar;
