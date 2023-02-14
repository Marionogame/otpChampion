// React
import React from "react";

// Libraries
import { Routes, Route } from "react-router-dom";
import { Dimmer } from "semantic-ui-react";
import { ReactNotifications } from "react-notifications-component";

// Components

import PublicRoute from "@Components/PublicRoute";

// Features
import ViewChamp from "@Features/ViewChamp";

import Search from "@Features/Search";

const App = () => {
	return (
		<Dimmer.Dimmable>
			<ReactNotifications />
			<Routes>
				<Route element={<PublicRoute />}>
					<Route index element={<Search />} />
					<Route path="viewChamp" element={<ViewChamp />} />
				</Route>
				<Route path="*" element={<Search />} />
			</Routes>
		</Dimmer.Dimmable>
	);
};

export default App;
