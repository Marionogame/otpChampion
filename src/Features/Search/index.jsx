import React, { useState } from "react";
import Navbar from "@Components/Navbar";
import { Grid, Image, Divider, /* Icon, */ Header } from "semantic-ui-react";
// Components
import Input from "@Components/Input";
import Target from "@Components/target";
import optionSearch from "./staticData";
import optChampion from "./assets/otpchampion2.png";
import lolSearch from "./assets/lolSearch.png";
import vidioBg from "./assets/video.mp4";
import styles from "./styles.module.css";

const Search = () => {
	const [field, setField] = useState("LAN");
	const [search, setSearch] = useState("");

	return (
		<div className={styles.containerHome}>
			<Navbar logo={optChampion} activeName="Inicio" />
			<div className={styles.videoBackground}>
				<video width="110%" height="110%" src={vidioBg} autoPlay loop muted>
					<track kind="captions" />
				</video>
			</div>
			<div className={styles.hero2} />
			<div className={styles.hero}>
				<div className={styles.contSearch}>
					<Image src={lolSearch} rounded className={styles.imageSize} />
				</div>
				<div className={styles.inputContainer}>
					<div className={styles.contInput}>
						<Input
							className={styles.input}
							big
							name="searchString"
							placeholder="Buscar"
							value={search}
							dropdown={{
								className: styles.dropdown,
								options: optionSearch,
								onChange: (e, data) => {
									return setField(data.value);
								},
								value: field,
							}}
							onChange={(e) => {
								return setSearch(e.target.value);
							}}
						/>
					</div>
				</div>
			</div>

			<Grid className={styles.grid}>
				<Grid.Column className={styles.column}>
					<div className={styles.contRow}>
						<div className={styles.listDigLeft} />
						<Divider horizontal>
							<Header as="h4">
								<div className={styles.rowContainer}>
									<div className={styles.row}>
										{/* 	<Icon name="trophy" /> */}
										<span color="blue" className={styles.titleLabel}>
											CAMPEONES
										</span>
										{/* 					<Icon name="trophy" color="blue" /> */}
									</div>
								</div>
							</Header>
						</Divider>
						<div className={styles.listDigRight} />
					</div>
				</Grid.Column>
			</Grid>

			<Grid className={styles.grid2}>
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
					/>
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default Search;
