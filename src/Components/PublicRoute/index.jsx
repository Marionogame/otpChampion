// React
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Libraries
import PropTypes from "prop-types";

const PublicRoute = ({ isLoggedIn = false, hasCompany = false }) => {
	if (isLoggedIn) {
		if (hasCompany) {
			return <Navigate to="/monitor" replace />;
		}
		return <Navigate to="/chooseCompany" replace />;
	}
	return <Outlet />;
};

PublicRoute.propTypes = {
	isLoggedIn: PropTypes.bool,
	hasCompany: PropTypes.bool,
};

export default PublicRoute;
