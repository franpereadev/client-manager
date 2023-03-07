import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
	ArrowLeftOnRectangleIcon,
	Bars3Icon,
	ChevronDownIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import sideBarLinks from "./sideBarLinks";

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function Sidebar(props: any) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
			<div>
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog
						as="div"
						className="relative z-40 md:hidden"
						onClose={setSidebarOpen}
					>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
						</Transition.Child>

						<div className="fixed inset-0 z-40 flex">
							<Transition.Child
								as={Fragment}
								enter="transition ease-in-out duration-300 transform"
								enterFrom="-translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="-translate-x-full"
							>
								<Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-100">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-300"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 right-0 -mr-12 pt-2">
											<button
												type="button"
												className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
												onClick={() => setSidebarOpen(false)}
											>
												<span className="sr-only">Close sidebar</span>
												<XMarkIcon
													className="h-6 w-6 text-white"
													aria-hidden="true"
												/>
											</button>
										</div>
									</Transition.Child>
									<div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
										<div className="flex flex-shrink-0 items-center px-4">
											<img
												className="h-8 w-auto"
												src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
												alt="Your Company"
											/>
										</div>
										<nav className="mt-5 space-y-1 px-4">
											<div className="flex items-center px-2 py-2 rounded-md bg-white mb-5 ">
												<div className="h-10 w-10 flex-shrink-0">
													<img
														className="h-10 w-10 rounded-full"
														src={require("../../../../assets/profile.png")}
														alt=""
													/>
												</div>
												<div className="ml-3 inline-block min-w-0  mr-auto">
													<p className="text-sm font-semibold text-gray-600">
														Francisco Perea
													</p>
													<p className="text-xs font-medium text-gray-400 group-hover:text-white truncate block">
														franciscoperea@gmail.com
													</p>
												</div>

												<Menu as="div" className="items-center flex ">
													<div>
														<Menu.Button className="flex items-center justify-end">
															<ChevronDownIcon
																className="h-5 w-5 mr-1 text-gray-400"
																aria-hidden="true"
															/>
														</Menu.Button>
													</div>

													<Transition
														as={Fragment}
														enter="transition ease-out duration-100"
														enterFrom="transform opacity-0 scale-95"
														enterTo="transform opacity-100 scale-100"
														leave="transition ease-in duration-75"
														leaveFrom="transform opacity-100 scale-100"
														leaveTo="transform opacity-0 scale-95"
													>
														<Menu.Items className="absolute right-0 z-10 mt-20 mr-4 w-46 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
															<div>
																<Menu.Item>
																	{({ active }) => (
																		<a
																			href="#"
																			className={classNames(
																				active
																					? "bg-gray-100 text-gray-900"
																					: "text-gray-700",
																				"group flex items-center px-4 py-2 text-sm text-red-400"
																			)}
																		>
																			<ArrowLeftOnRectangleIcon
																				className="mr-2 h-5 w-5 text-red-400 group-hover:text-red-400"
																				aria-hidden="true"
																			/>
																			Cerrar sesión
																		</a>
																	)}
																</Menu.Item>
															</div>
														</Menu.Items>
													</Transition>
												</Menu>
											</div>
											{sideBarLinks.map((item) => (
												<NavLink
													key={item.name}
													to={item.url}
													className={({ isActive }) =>
														classNames(
															isActive
																? "bg-indigo-100 text-black font-semibold"
																: "text-gray-500 hover:bg-indigo-100 hover:bg-opacity-75",
															"group flex items-center px-2 py-2 text-sm font-medium rounded-md"
														)
													}
												>
													{({ isActive }) => (
														<>
															<item.icon
																className={classNames(
																	isActive
																		? "bg-indigo-100 text-primary-button font-extrabold"
																		: "text-gray-500 hover:bg-indigo-100 hover:bg-opacity-75",
																	"mr-3 h-6 w-6 flex-shrink-0"
																)}
																aria-hidden="true"
															/>
															{item.name}
														</>
													)}
												</NavLink>
											))}
										</nav>
									</div>
								</Dialog.Panel>
							</Transition.Child>
							<div className="w-14 flex-shrink-0" aria-hidden="true">
								{/* Force sidebar to shrink to fit close icon */}
							</div>
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex min-h-0 flex-1 flex-col bg-gray-100">
						<div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
							<div className="flex flex-shrink-0 items-center px-4">
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
									alt="Your Company"
								/>
							</div>
							<nav className="mt-5 flex-1 space-y-1 px-4">
								<div className="flex items-center px-2 py-2 rounded-md bg-white mb-5">
									<div className="h-10 w-10 flex-shrink-0">
										<img
											className="h-10 w-10 rounded-full"
											src={require("../../../../assets/profile.png")}
											alt=""
										/>
									</div>
									<div className="ml-3 inline-block min-w-0 mr-auto">
										<p className="text-sm font-semibold text-gray-600">
											Francisco Perea
										</p>
										<p className="text-xs font-medium text-gray-400 group-hover:text-white truncate block">
											franciscoperea@gmail.com
										</p>
									</div>

									<Menu as="div" className="items-center justify-self-end">
										<div>
											<Menu.Button className="flex items-center">
												<ChevronDownIcon
													className="h-5 w-5 mr-1 text-gray-400"
													aria-hidden="true"
												/>
											</Menu.Button>
										</div>

										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="absolute right-0 z-10 mt-2 mr-4 w-46 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												<div className="py-1">
													<Menu.Item>
														{({ active }) => (
															<a
																href="#"
																className={classNames(
																	active
																		? "bg-gray-100 text-gray-900"
																		: "text-gray-700",
																	"group flex items-center px-4 py-2 text-sm text-red-400"
																)}
															>
																<ArrowLeftOnRectangleIcon
																	className="mr-2 h-5 w-5 text-red-400 group-hover:text-red-400"
																	aria-hidden="true"
																/>
																Cerrar sesión
															</a>
														)}
													</Menu.Item>
												</div>
											</Menu.Items>
										</Transition>
									</Menu>
								</div>

								{sideBarLinks.map((item) => (
									<NavLink
										key={item.name}
										to={item.url}
										className={({ isActive }) =>
											classNames(
												isActive
													? "bg-indigo-100 text-black font-semibold"
													: "text-gray-500 hover:bg-indigo-100 hover:bg-opacity-75",
												"group flex items-center px-2 py-2 text-sm font-medium rounded-md"
											)
										}
									>
										{({ isActive }) => (
											<>
												<item.icon
													className={classNames(
														isActive
															? "bg-indigo-100 text-primary-button font-extrabold"
															: "text-gray-500 hover:bg-indigo-100 hover:bg-opacity-75",
														"mr-3 h-6 w-6 flex-shrink-0"
													)}
													aria-hidden="true"
												/>
												{item.name}
											</>
										)}
									</NavLink>
								))}
							</nav>
						</div>
					</div>
				</div>
				<div className="flex flex-1 flex-col md:pl-64 w-full">
					<div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
						<button
							type="button"
							className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							onClick={() => setSidebarOpen(true)}
						>
							<span className="sr-only">Open sidebar</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<main className="flex-1">
						<div className="py-6 w-full">
							<div className="mx-auto px-4 sm:px-6 md:px-8"></div>
							<div className="mx-auto px-4 sm:px-6 md:px-8">
								{/* Replace with your content */}
								{props.children}
								{/* /End replace */}
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}
