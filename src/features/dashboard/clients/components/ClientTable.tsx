import { useAppSelector } from "../../../../app/hooks";


function ClientTable() {
	console.log("ClientTable");
	const clientState = useAppSelector((state) => state.clients);
	console.log(clientState);
	return <div>ClientTable</div>;
}

export default ClientTable;
