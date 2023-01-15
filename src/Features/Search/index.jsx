import React, { useState } from "react";
import Navbar from "@Components/Navbar";
import { Dropdown, Grid, Input, Divider, Header, Icon } from "semantic-ui-react";
// Components
// import input from "@Components/Input";
import Target from "@Components/target";
import optionSearch from "./staticData";
import optChampion from "./assets/otpchampion2.png";
import styles from "./styles.module.css";

// const options = [
// 	{ key: ".com", text: ".com", value: ".com" },
// 	{ key: ".net", text: ".net", value: ".net" },
// 	{ key: ".org", text: ".org", value: ".org" },
// ];

const Search = () => {
	const [field, setField] = useState("page");
	const [search, setSearch] = useState("page");

	return (
		<div>
			<Navbar logo={optChampion} activeName="Inicio" />
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
						placeholder="Find domain"
						onChange={(e) => {
							return setSearch(e.target.value);
						}}
					/>
				</div>
			</div>{" "}
			<Grid>
				<Grid.Column width={16}>
					{" "}
					<Divider horizontal>
						<Header as="h4">
							<Icon name="trophy" />
							Specifications
							<Icon name="trophy" />
						</Header>
					</Divider>
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
						]}
					/>{" "}
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default Search;
