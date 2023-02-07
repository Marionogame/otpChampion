import React from "react";
import { Card, Segment, List, Icon } from "semantic-ui-react";
// Components
// import input from "@Components/Input";

import styles from "./styles.module.css";

const ListVideos = () => {
	return (
		<div>
			<Card className={styles.card}>
				<Card.Content>
					<Card.Header className={styles.cardHeader}>
						<List divided verticalAlign="middle">
							<List.Item>
								<Segment color="purple">
									<Icon circular className={styles.icon} name="users" />{" "}
									<div href="#" className={styles.tag}>
										Fanatic
									</div>
									<Icon circular name="chess rook" />{" "}
									<div href="#" className={styles.tagLeft}>
										Fanatic
									</div>
									<Icon circular className={styles.icon} name="users" />{" "}
								</Segment>
							</List.Item>
							<List.Item>
								<Segment color="purple">
									<Icon circular className={styles.icon} name="users" />{" "}
									<div href="#" className={styles.tag}>
										Fanatic
									</div>
									<Icon circular name="chess rook" />{" "}
									<div href="#" className={styles.tagLeft}>
										Fanatic
									</div>
									<Icon circular className={styles.icon} name="users" />{" "}
								</Segment>
							</List.Item>
							<List.Item>
								<Segment color="purple">
									<Icon circular className={styles.icon} name="users" />{" "}
									<div href="#" className={styles.tag}>
										Fanatic
									</div>
									<Icon circular name="chess rook" />{" "}
									<div href="#" className={styles.tagLeft}>
										Fanatic
									</div>
									<Icon circular className={styles.icon} name="users" />{" "}
								</Segment>
							</List.Item>
							<List.Item>
								<Segment color="purple">
									<Icon circular className={styles.icon} name="users" />{" "}
									<div href="#" className={styles.tag}>
										Fanatic
									</div>
									<Icon circular name="chess rook" />{" "}
									<div href="#" className={styles.tagLeft}>
										Fanatic
									</div>
									<Icon circular className={styles.icon} name="users" />{" "}
								</Segment>
							</List.Item>
							<List.Item>
								<Segment color="purple">
									<Icon circular className={styles.icon} name="users" />{" "}
									<div href="#" className={styles.tag}>
										Fanatic
									</div>
									<Icon circular name="chess rook" />{" "}
									<div href="#" className={styles.tagLeft}>
										Fanatic
									</div>
									<Icon circular className={styles.icon} name="users" />{" "}
								</Segment>
							</List.Item>
						</List>
					</Card.Header>
				</Card.Content>
			</Card>
		</div>
	);
};

export default ListVideos;
