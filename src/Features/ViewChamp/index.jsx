import React from "react";
import Navbar from "@Components/Navbar";
import { Grid, Card, Image } from "semantic-ui-react";
// Components
// import input from "@Components/Input";

import optChampion from "./assets/otpchampion2.png";
import styles from "./styles.module.css";

const ViewChamp = () => {
	return (
		<div>
			<Navbar logo={optChampion} activeName="Inicio" />

			<Grid>
				<Grid.Column width={4}>
					<Card className={styles.card}>
						<Card.Content>
							<Image
								floated="left"
								className={styles.image}
								src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
							/>
							<Card.Header>Urgot</Card.Header>

							<Card.Description>
								<div>8/5/23</div>
								<div>165</div>
								<div>1:12:03</div>
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div className="ui two buttons">
								<div color="green">Approve</div>
							</div>
						</Card.Content>
					</Card>
				</Grid.Column>
				<Grid.Column width={8}>
					<div>center</div>
				</Grid.Column>
				<Grid.Column width={4}>
					<div>right</div>
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default ViewChamp;
