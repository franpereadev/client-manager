import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import Modal from "../../../shared/components/Modal";
import ToggleButton from "../../../shared/components/ToggleButton";
import { Client } from "../client";
import { updateClientById } from "../clientSlice";
import ClientForm from "./ClientForm";
//TODO: open editing and creating by routes

//TODO: substitute the edit button for a 3 dots multiple options (delete & edit)
//TODO: try styling
function ClientTable() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const params = useParams();
	const clientState = useAppSelector((state) => state.clients);

	const [clientFormShow, setClientFormShow] = useState(false);

	function handleToggleStatusChange(value: boolean, id: string) {
		console.log(value, id);
		let currentClient = clientState.value.find((c) => c.id == id);
		dispatch(updateClientById({ ...currentClient, show: value, id: id }));
	}
	function handleToggleClientForm(val?: any) {
		setClientFormShow(!clientFormShow);
	}

	return (
		<>
			<div>
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900">Clients</h1>
						<p className="mt-2 text-sm text-gray-700">
							A list of all of your clients in your account including their
							name, title, email and role.
						</p>
					</div>
					<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
						<button
							type="button"
							className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-button px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
							onClick={() => setClientFormShow(!clientFormShow)}
						>
							Add client
						</button>
					</div>
				</div>
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
								<table className="min-w-full divide-y divide-gray-300">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
											>
												Name
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Phone
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Status
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Summary
											</th>
											<th
												scope="col"
												className="relative py-3.5 pl-3 pr-4 sm:pr-6"
											>
												<span className="sr-only">Edit</span>
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
										{clientState.value.map((client) => {
											console.log(client);
											return (
												<tr key={client.id}>
													<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
														<div className="flex items-center">
															<div className="h-10 w-10 flex-shrink-0">
																<img
																	className="h-10 w-10 rounded-full"
																	src={require("../../../../assets/profile.png")}
																	alt=""
																/>
															</div>
															<div className="ml-4">
																<div className="font-medium text-gray-900">
																	{client.name} {client.lastName}
																</div>
																<div className="text-gray-500">
																	{client.email}
																</div>
															</div>
														</div>
													</td>
													<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
														<div className="text-gray-900">{client.mobile}</div>
													</td>
													<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
														<ToggleButton
															defaultValue={client.show}
															onToggleChange={handleToggleStatusChange}
															targetId={client.id}
														/>
													</td>
													<td className="lpx-3 py-4 text-sm text-gray-500">
														{client.summary}
													</td>
													<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
														<a
															href="#"
															className="text-indigo-600 hover:text-indigo-900"
														>
															Edit
														</a>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal
				modalTitle="Create client"
				confirmText="Save"
				show={clientFormShow}
				onHide={handleToggleClientForm}
			>
				<ClientForm
					onSubmitAction={handleToggleClientForm}
					onCancelAction={handleToggleClientForm}
				/>
			</Modal>
		</>
	);
}

export default ClientTable;
