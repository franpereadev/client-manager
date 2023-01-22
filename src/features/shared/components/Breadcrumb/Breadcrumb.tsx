import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Breadcrumb() {
	return (
		<>
			<div className="flex items-center text-sm text-sidebar-100 bg-gray-100 rounded p-2 mb-5">
				<NavLink to="/" className="">
					Dashboard
				</NavLink>
				<FontAwesomeIcon
					icon={["fas", "chevron-right"]}
					className="px-2 text-xs"
				/>
			</div>
		</>
	);
}

export default Breadcrumb;
