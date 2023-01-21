import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Dashboard() {
	return (
		<>
			<div>dashboard nigga</div>
			<div style={{ backgroundColor: "red" }}>
				<Outlet />
			</div>
		</>
	);
}

export default Dashboard;
