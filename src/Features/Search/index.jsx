import React, { useState } from "react";
import Navbar from "@Components/Navbar";
import { Dropdown, Grid, Image, Input, Divider, Icon, Header } from "semantic-ui-react";
// Components
// import input from "@Components/Input";
import Target from "@Components/target";
import optionSearch from "./staticData";
import optChampion from "./assets/otpchampion2.png";
import lolSearch from "./assets/lolSearch.png";
import styles from "./styles.module.css";

const Search = () => {
	const [field, setField] = useState("LAN");
	const [search, setSearch] = useState("");

	return (
		<div>
			<Navbar logo={optChampion} activeName="Inicio" />
			<div className={styles.contSearch}>
				<Image src={lolSearch} rounded className={styles.imageSize} />
			</div>
			<div className={styles.contSearch}>
				<div className={styles.contInput}>
					<Input
						size="massive"
						value={search}
						label={
							<Dropdown
								defaultValue=".com"
								className={styles.dropdown}
								onChange={(e, data) => {
									return setField(data.value);
								}}
								value={field}
								options={optionSearch}
							/>
						}
						// labelPosition="right"
						placeholder="Campeon"
						onChange={(e) => {
							return setSearch(e.target.value);
						}}
					/>
					<Icon name="search" circular className={styles.icon} size="big" />
				</div>
			</div>
			<Grid>
				<Grid.Column width={16}>
					<Divider horizontal>
						<Header as="h4">
							<div className={styles.row}>
								<Icon name="trophy" />
								Campeones
								<Icon name="trophy" />
							</div>
						</Header>
					</Divider>
					<div className={styles.contRow}>
						<div className={styles.listDigLeft} />
						<div className={styles.listDigRight} />
					</div>
				</Grid.Column>
				<Grid.Column width={16}>
					<Target
						data={[
							{ name: "yorick", views: "456" },
							{ name: "yorick", views: "456" },
							{ name: "yorick", views: "456" },

							{ name: "yorick", views: "456" },

							{ name: "yorick", views: "456" },

							{ name: "yorick", views: "456" },
							{ name: "yorick", views: "456" },
							{ name: "yorick", views: "456" },
							{ name: "yorick", views: "456" },

							{ name: "yorick", views: "456" },

							{ name: "yorick", views: "456" },

							{ name: "yorick", views: "456" },
						]}
					/>{" "}
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default Search;
