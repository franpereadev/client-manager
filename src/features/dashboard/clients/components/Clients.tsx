import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import ClientForm from "./ClientForm";
import ClientTable from "./ClientTable";

function Clients() {
	  // The `state` arg is correctly typed as `RootState` already
	  const count = useAppSelector((state) => state.clients.value)
	  const dispatch = useAppDispatch()
	return (
		<>
			<ClientTable />
			<ClientForm />
		</>
	);
}

export default Clients;
