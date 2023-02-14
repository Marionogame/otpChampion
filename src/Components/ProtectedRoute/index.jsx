// React
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Libraries
import PropTypes from "prop-types";

const ProtectedRoute = ({ isLoggedIn = false }) => {
	if (!isLoggedIn) {
		return <Navigate to="/login" replace />;
	}
	return <Outlet />;
};

ProtectedRoute.propTypes = {
	isLoggedIn: PropTypes.bool,
};

export default ProtectedRoute;
