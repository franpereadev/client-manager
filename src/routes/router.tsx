import { Route, Routes } from "react-router-dom";
import pageData from "../routes/pagesData";

const Router = () => {
	const pageRoutes = pageData.map((route: any) => (
		<Route key={route.key} path={route.path} element={route.component}>
			{route?.children?.map((childRoute: any) => (
				<Route
					key={childRoute.key}
					path={childRoute.path}
					element={childRoute.component}
				></Route>
			))}
		</Route>
	));
	return <Routes>{pageRoutes}</Routes>;
};

export default Router;
