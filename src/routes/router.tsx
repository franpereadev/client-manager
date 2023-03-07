import { Navigate, Route, Routes } from "react-router-dom";
import pageData from "../routes/pagesData";

const Router = () => {
	const pageRoutes = pageData.map((route: any) => (
		<Route key={route.key} path={route.path} element={route.component}>
			{route?.children?.map((childRoute: any) => (
				<Route
					index={childRoute.index}
					key={childRoute.key}
					path={childRoute.path}
					element={childRoute.component}
				></Route>
			))}
		</Route>
	));
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/clients" replace />} />;
			<Route path="*" element={<Navigate to="/clients" replace />} />;
			{pageRoutes}
		</Routes>
	);
};

export default Router;
