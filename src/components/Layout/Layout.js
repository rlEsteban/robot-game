import { Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => (
	<div className="Layout">
		<Outlet />
	</div>
);
