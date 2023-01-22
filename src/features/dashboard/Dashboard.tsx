import { Outlet } from "react-router-dom";
import SideBar from "../shared/components/SideBar";
import sideBarLinks from "../shared/components/SideBar/sideBarLinks";

function Dashboard() {
	return (
		<>
			<div className="flex bg-main-body font-[Poppins] min-h-screen">
				<SideBar links={sideBarLinks} />
				<div className="flex-1 min-w-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default Dashboard;
