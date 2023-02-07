import React from "react";
import Navbar from "@Components/Navbar";
import { Grid } from "semantic-ui-react";
// Components
// import input from "@Components/Input";
import ChampStatistics from "./Components/champStatistics";
import ListVideos from "./Components/ListVideos";

import ViewVideo from "./Components/ViewVideo";
import optChampion from "./assets/otpchampion2.png";
// import styles from "./styles.module.css";

const ViewChamp = () => {
	return (
		<div>
			<Navbar logo={optChampion} activeName="Inicio" />

			<Grid>
				<Grid.Column width={3}>
					<ChampStatistics />
				</Grid.Column>
				<Grid.Column width={9}>
					<ViewVideo />
				</Grid.Column>
				<Grid.Column width={4}>
					<ListVideos />
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default ViewChamp;
