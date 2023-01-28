import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Breadcrumb from "../../../shared/components/Breadcrumb";
import Modal from "../../../shared/components/Modal";
import ClientForm from "./ClientForm";
import ClientTable from "./ClientTable";

function Clients() {
	// The `state` arg is correctly typed as `RootState` already
	const count = useAppSelector((state) => state.clients.value);
	const dispatch = useAppDispatch();
	return (
		<>
			<div className="rounded bg-white m-5 px-10 py-10">
				<Breadcrumb />
				<ClientTable />
			</div>
		</>
	);
}

export default Clients;
