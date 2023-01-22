import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../shared/components/SideBar";
import sideBarLinks from "../shared/components/SideBar/sideBarLinks";


function Dashboard() {
	return (
		<>
			<div className="flex">
				<SideBar links={sideBarLinks} />
				DASH
				<div style={{ backgroundColor: "red" }}>
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default Dashboard;
