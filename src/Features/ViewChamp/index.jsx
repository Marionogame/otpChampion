import React from "react";
import Navbar from "@Components/Navbar";
import { Grid } from "semantic-ui-react";
// Components
// import input from "@Components/Input";
import ChampStatistics from "./Components/champStatistics";
import ListVideos from "./Components/ListVideos";

import ViewVideo from "./Components/ViewVideo";
import optChampion from "./assets/otpchampion2.png";
import styles from "./styles.module.css";

const ViewChamp = () => {
	return (
		<div className={styles.container}>
			<Navbar logo={optChampion} activeName="Inicio" />
			<Grid className={styles.grid}>
				<Grid.Column className={styles.column} width={12}>
					<ViewVideo />
				</Grid.Column>
				<Grid.Column className={styles.column} width={4}>
					<div className={styles.contFist}>
						<ChampStatistics />
					</div>
					<div className={styles.contSecond}>
						<ListVideos />
					</div>
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default ViewChamp;
