import React from "react";
/* import { Image Button, Icon, Label } from "semantic-ui-react"; */
import PropTypes from "prop-types";

import { map, isEmpty /* get */ } from "lodash";
// Styles
import yorick from "./assets/Katarina.jpg";
import styles from "./styles.module.css";

const Target = ({ data }) => {
	const renderAnswer = (array) => {
		if (!isEmpty(array)) {
			const targets = map(array, () => {
				return (
					<div className={styles.card}>
						<img src={yorick} alt="" />
						<span>Akali</span>
					</div>
				);
			});
			return <div className={styles.contTarget}>{targets}</div>;
		}
		return <div className={styles.container}>No Hay Datos</div>;
	};

	return <div>{renderAnswer(data)}</div>;
};

Target.propTypes = {
	data: PropTypes.array,
};
export default Target;
