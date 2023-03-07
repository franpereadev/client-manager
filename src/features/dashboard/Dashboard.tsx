import { Outlet } from "react-router-dom";
import SideBar from "../shared/components/SideBar";
import sideBarLinks from "../shared/components/SideBar/sideBarLinks";

function Dashboard() {
	return (
		<>
			<div className="bg-main-body min-h-screen w-full">
				<SideBar>
					<Outlet />
				</SideBar>
			</div>
		</>
	);
}

export default Dashboard;
