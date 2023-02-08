import React from "react";
// import { Card } from "semantic-ui-react";
// Components
// import input from "@Components/Input";

import styles from "./styles.module.css";

const ViewVideo = () => {
	return (
		<div className={styles.videoCont}>
			{/* <Card className={styles.card}> */}
			<iframe
				className={styles.video}
				src="https://www.youtube.com/embed/p42ZnQ8UmxE"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
			/>
			{/* </Card> */}
		</div>
	);
};

export default ViewVideo;
