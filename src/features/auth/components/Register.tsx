import { LockClosedIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function Register() {
	return (
		<>
			{/*
			This example requires updating your template:
	
			```vk
			<html class="h-full bg-gray-50">
			<body class="h-full">
			```
		  */}
			<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="w-full max-w-md space-y-8">
					<div>
						<img
							className="mx-auto h-12 w-auto"
							src={require("../../../assets/logo-vigade-2.png")}
							alt="Your Company"
						/>
						<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
							Registro
						</h2>

						<p className="mt-2 text-center text-sm text-gray-600">
							¿Ya tienes una cuenta?{" "}
							<NavLink to="/login">
								<a
									href="#"
									className="font-medium text-primary-button hover:text-indigo-500"
								>
									Inicia sesión aquí
								</a>
							</NavLink>
						</p>
					</div>
					<form className="mt-8 space-y-6" action="#" method="POST">
						<input type="hidden" name="remember" defaultValue="true" />
						<div className="-space-y-px rounded-md shadow-sm">
							<div>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										placeholder="Email"
										required
										className="block w-full appearance-none rounded-md border border-gray-300 px-5 py-4 placeholder-gray-400 placeholder:font-bold shadow-sm focus:border-indigo-500 focus:outline-none bg-indigo-50 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary-button py-4 px-5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								<span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
								Siguiente
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Register;
