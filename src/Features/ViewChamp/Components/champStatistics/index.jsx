import React from "react";
import { Card, Image } from "semantic-ui-react";
// Components
// import input from "@Components/Input";

import styles from "./styles.module.css";
import yorick from "../../assets/yorick.jpg";

const ChampStatistics = () => {
	return (
		<div>
			<Card className={styles.card}>
				<Card.Content>
					<Card.Header className={styles.cardHeader}>
						<div className={styles.contCenterImg}>
							<Image floated="left" className={styles.image} src={yorick} />
							Urgot
						</div>
					</Card.Header>

					<Card.Description>
						<div className={styles.contCenter}>
							<div className={styles.titleText}>KDA</div>
						</div>
						<div className={styles.contCenter}>
							<div className={styles.subTitleText}>8/5/23</div>
						</div>
						<div className={styles.contCenter}>
							<div className={styles.titleText}>Farmeo</div>
						</div>
						<div className={styles.contCenter}>
							<div className={styles.subTitleText}>165</div>
						</div>
						<div className={styles.contCenter}>
							<div className={styles.titleText}>Tiempo de partida</div>
						</div>
						<div className={styles.contCenter}>
							<div className={styles.subTitleText}>1:12:03</div>
						</div>
					</Card.Description>
				</Card.Content>
			</Card>

			<Card className={styles.card}>
				<Card.Content>
					<Card.Header className={styles.cardHeader}>
						<div className={styles.contCenterImg}>Build</div>
					</Card.Header>

					<div>
						<Image.Group>
							<Image className={styles.imgItems} src={yorick} />
							<Image className={styles.imgItems} src={yorick} />
							<Image className={styles.imgItems} src={yorick} />
							<Image className={styles.imgItems} src={yorick} />
							<Image className={styles.imgItems} src={yorick} />

							<Image className={styles.imgItems} src={yorick} />
						</Image.Group>
					</div>
				</Card.Content>
			</Card>
		</div>
	);
};

export default ChampStatistics;
