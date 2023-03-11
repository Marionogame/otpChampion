import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
// Components
// import input from "@Components/Input";

import styles from "./styles.module.css";
import yorick from "../../assets/yorick.jpg";

const ChampStatistics = () => {
	return (
		<div className={styles.containerCard}>
			<Card className={styles.card}>
				<Card.Content className={styles.cardContent}>
					<Card.Header className={styles.cardHeader}>
						<div className={styles.contCenterImg}>Urgot</div>
					</Card.Header>

					<Card.Description className={styles.contDescription}>
						<Image floated="left" className={styles.image} src={yorick} />
						<div>
							<div className={styles.contCenter}>
								<div className={styles.titleText}>Tiempo:</div>
								<div className={styles.subTitleText}>{` 1:12:03`}</div>
								<Icon className={styles.subIcon} name="clock outline" />
							</div>
							<div className={styles.contCenter}>
								<div className={styles.titleText}>KDA:</div>
								<div className={styles.subTitleText}>{` 8/5/23`}</div>
								<Icon className={styles.subIcon} name="gratipay" />
							</div>
							<div className={styles.contCenterBottom}>
								<div className={styles.titleText}>Farmeo:</div>
								<div className={styles.subTitleText}>{` 165`}</div>
								<Icon className={styles.subIcon} name="money bill alternate outline" />
							</div>
						</div>
					</Card.Description>
				</Card.Content>
			</Card>

			<Card className={styles.card}>
				<Card.Content className={styles.cardContent}>
					<Card.Header className={styles.cardHeader}>
						<div className={styles.contCenterImg}>Build Usada</div>
					</Card.Header>

					<div>
						<Image.Group className={styles.imgGroup}>
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
