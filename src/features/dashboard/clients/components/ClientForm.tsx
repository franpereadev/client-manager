import { useState } from "react";
import { useDispatch } from "react-redux";
import { createClient } from "../clientSlice";
const { v1: uuidv1 } = require("uuid");

interface IClientFormProps {
	onSubmitAction: Function;
	onCancelAction: any;
} //TODO: close form on submit
function ClientForm(props: IClientFormProps) {
	const dispatch = useDispatch();
	const [client, setClient] = useState({
		id: "",
		name: "",
		lastName: "",
		mobile: "",
		email: "",
		summary: "",
		show: false,
	});

	const handleChange = (e: any) => {
		setClient({
			...client,
			[e.target.name]:
				e.target.type == "checkbox" ? e.target.checked : e.target.value,
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		dispatch(createClient({ ...client, id: uuidv1() }));
		props.onSubmitAction();
	};
	return (
		<form className="space-y-6 w-full" onSubmit={handleSubmit}>
			<p className="mt-1 max-w-2xl text-sm text-gray-500">
				Fill the form below to create a new client
			</p>
			<div className="bg-white px-4 py-5 shadow sm:rounded-lg p-6">
				<div className="md:grid md:grid-cols md:gap-6">
					<div className=" md:col-span-2 md:mt-0">
						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 sm:col-span-3">
								<label
									htmlFor="firstName"
									className="block text-sm font-medium text-gray-700"
								>
									First name
								</label>
								<input
									type="text"
									name="firstName"
									placeholder="Jack"
									onChange={handleChange}
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label
									htmlFor="lastName"
									className="block text-sm font-medium text-gray-700"
								>
									Last name
								</label>
								<input
									type="text"
									name="lastName"
									placeholder="Harlow"
									onChange={handleChange}
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label
									htmlFor="mobile"
									className="block text-sm font-medium text-gray-700"
								>
									Mobile
								</label>
								<input
									type="text"
									name="mobile"
									placeholder="+34 656656656"
									onChange={handleChange}
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email
								</label>
								<input
									type="text"
									name="email"
									placeholder="youngharleezy@gmail.com"
									onChange={handleChange}
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
							<div className="col-span-6 sm:col-span-6">
								<label
									htmlFor="summary"
									className="block text-sm font-medium text-gray-700"
								>
									Summary
								</label>
								<div className="mt-1">
									<textarea
										rows={4}
										name="summary"
										placeholder="Summary..."
										onChange={handleChange}
										className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										defaultValue={""}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-end">
				<button
					type="button"
					className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					onClick={props.onCancelAction}
				>
					Cancel
				</button>
				<button
					type="submit"
					className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-primary-button py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					Save
				</button>
			</div>
		</form>
	);
}

export default ClientForm;
