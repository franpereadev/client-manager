import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { ISideBarLink } from "./sideBarLinks";

export interface ISideBarProps {
	links: ISideBarLink[];
}

function SideBar({ links }: ISideBarProps) {
	const linkClassNames: string =
		"hover:bg-sidebar-700 mx-3 rounded text-sidebar-100 group flex items-center px-3 py-3 text-sm font-medium";
	const activeClassName: string = linkClassNames + " bg-sidebar-700 text-white";
	return (
		<>
			<div className="overflow-y-auto bg-sidebar-900 pt-5 pb-4  md:w-52  flex-none sticky top-0 md:h-screen">
				<div className="flex flex-shrink-0 items-end space-y-5 pl-4 text-sidebar-100">
					<img
						className="h-16 w-auto"
						src={require("../../../../assets/logo-vigade-2.png")}
						alt="Your Company"
					/>
				</div>
				<div className="mt-5 flex flex-grow flex-col">
					<nav className="flex-1 space-y-3 bg-sidebar-900" aria-label="Sidebar">
						{links.map((link) => {
							return (
								<NavLink
									key={link.url}
									to={link.url}
									className={({ isActive }) =>
										isActive ? activeClassName : linkClassNames
									}
								>
									<FontAwesomeIcon
										className="mr-3 flex-shrink-0 h-5 w-5"
										icon={["fas", link.icon]}
									/>
									<p className="text-xs">{link.name}</p>
								</NavLink>
							);
						})}
					</nav>
				</div>
			</div>
		</>
	);
}

export default SideBar;
