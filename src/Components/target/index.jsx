import React from "react";
import { Image, Button, Icon, Label } from "semantic-ui-react";
import PropTypes from "prop-types";

import { map, isEmpty, get } from "lodash";
// Styles
import yorick from "./assets/yorick.jpg";
import styles from "./styles.module.css";

const Target = ({ data }) => {
	const renderAnswer = (array) => {
		if (!isEmpty(array)) {
			const targets = map(array, (item) => {
				return (
					<div className={styles.contImage}>
						<Image src={yorick} rounded className={styles.imageSize} />
						<div>
							<Button as="div" className={styles.buttonCont} labelPosition="right">
								<Button className={styles.buttonPurple}>
									<Icon name="sitemap" className={styles.iconTarget} />
									{get(item, "name", "")}
								</Button>
								<Label as="a" className={styles.buttonWhite} basic pointing="left">
									<Icon name="file video outline" />
									<span className={styles.views}>{get(item, "views", "")}</span>
								</Label>
							</Button>
						</div>
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
