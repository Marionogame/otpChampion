import React from "react";
import { Card } from "semantic-ui-react";
// Components
// import input from "@Components/Input";

import styles from "./styles.module.css";

const ViewVideo = () => {
	return (
		<div>
			<Card className={styles.card}>
				<iframe
					width="100%"
					height="474px"
					src="https://www.youtube.com/embed/p42ZnQ8UmxE"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</Card>
		</div>
	);
};

export default ViewVideo;
