import React, { useState } from "react";
import { Card, List, Button, Image } from "semantic-ui-react";

import FilterVideo from "@Modals/FilterVideo";

import Input from "@Components/Input";

import equipo1 from "../../assets/equipo1.png";
import equipo2 from "../../assets/equipo2.png";
import vs from "../../assets/vs.png";
import optionSearch from "../../staticData";
// Components
// import input from "@Components/Input";

import styles from "./styles.module.css";

const ListVideos = () => {
	const [search, setSearch] = useState("");
	const [field, setField] = useState("LAN");
	const [visibleFilter, setVisibleFilter] = useState(false);

	return (
		<Card className={styles.card}>
			<Card.Description>
				<div className={styles.inputContent}>
					<Input
						size="mini"
						name="searchString"
						placeholder="Buscar"
						value={search}
						action={{
							color: "teal",
							labelPosition: "right",
							icon: "copy",
							content: "Copy",
						}}
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
					<Button
						icon="filter"
						color="teal"
						onClick={() => {
							setVisibleFilter(true);
						}}
						className={styles.buttonFilter}
					/>
				</div>
			</Card.Description>
			<Card.Content className={styles.carContainer}>
				<List divided verticalAlign="middle">
					<List.Item>
						<Button className={styles.contSeg}>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo1} avatar />
							</div>
							<div className={styles.widthCenter}>
								<div className={styles.rowWidth}>
									<div href="#" className={styles.tag}>
										NA
									</div>
									<Image src={vs} avatar />
									<div href="#" className={styles.tagLeft}>
										<div className={styles.textTagLeft}>LAN</div>
									</div>
								</div>
								<div className={styles.center}>
									<div> 03/12/2023 02:34:01</div>
								</div>
							</div>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo2} avatar />
							</div>
						</Button>
					</List.Item>
					<List.Item>
						<Button className={styles.contSeg}>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo1} avatar />
							</div>
							<div className={styles.widthCenter}>
								<div className={styles.rowWidth}>
									<div href="#" className={styles.tag}>
										NA
									</div>
									<Image src={vs} avatar />
									<div href="#" className={styles.tagLeft}>
										<div className={styles.textTagLeft}>LAN</div>
									</div>
								</div>
								<div className={styles.center}>
									<div> 03/12/2023 02:34:01</div>
								</div>
							</div>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo2} avatar />
							</div>
						</Button>
					</List.Item>
					<List.Item>
						<Button className={styles.contSeg}>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo1} avatar />
							</div>
							<div className={styles.widthCenter}>
								<div className={styles.rowWidth}>
									<div href="#" className={styles.tag}>
										NA
									</div>
									<Image src={vs} avatar />
									<div href="#" className={styles.tagLeft}>
										<div className={styles.textTagLeft}>LAN</div>
									</div>
								</div>
								<div className={styles.center}>
									<div> 03/12/2023 02:34:01</div>
								</div>
							</div>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo2} avatar />
							</div>
						</Button>
					</List.Item>
					<List.Item>
						<Button className={styles.contSeg}>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo1} avatar />
							</div>
							<div className={styles.widthCenter}>
								<div className={styles.rowWidth}>
									<div href="#" className={styles.tag}>
										NA
									</div>
									<Image src={vs} avatar />
									<div href="#" className={styles.tagLeft}>
										<div className={styles.textTagLeft}>LAN</div>
									</div>
								</div>
								<div className={styles.center}>
									<div> 03/12/2023 02:34:01</div>
								</div>
							</div>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo2} avatar />
							</div>
						</Button>
					</List.Item>
					<List.Item>
						<Button className={styles.contSeg}>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo1} avatar />
							</div>
							<div className={styles.widthCenter}>
								<div className={styles.rowWidth}>
									<div href="#" className={styles.tag}>
										NA
									</div>
									<Image src={vs} avatar />
									<div href="#" className={styles.tagLeft}>
										<div className={styles.textTagLeft}>LAN</div>
									</div>
								</div>
								<div className={styles.center}>
									<div> 03/12/2023 02:34:01</div>
								</div>
							</div>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo2} avatar />
							</div>
						</Button>
					</List.Item>
					<List.Item>
						<Button className={styles.contSeg}>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo1} avatar />
							</div>
							<div className={styles.widthCenter}>
								<div className={styles.rowWidth}>
									<div href="#" className={styles.tag}>
										NA
									</div>
									<Image src={vs} avatar />
									<div href="#" className={styles.tagLeft}>
										<div className={styles.textTagLeft}>LAN</div>
									</div>
								</div>
								<div className={styles.center}>
									<div> 03/12/2023 02:34:01</div>
								</div>
							</div>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo2} avatar />
							</div>
						</Button>
					</List.Item>
					<List.Item>
						<Button className={styles.contSeg}>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo1} avatar />
							</div>
							<div className={styles.widthCenter}>
								<div className={styles.rowWidth}>
									<div href="#" className={styles.tag}>
										NA
									</div>
									<Image src={vs} avatar />
									<div href="#" className={styles.tagLeft}>
										<div className={styles.textTagLeft}>LAN</div>
									</div>
								</div>
								<div className={styles.center}>
									<div> 03/12/2023 02:34:01</div>
								</div>
							</div>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo2} avatar />
							</div>
						</Button>
					</List.Item>
					<List.Item>
						<Button className={styles.contSeg}>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo1} avatar />
							</div>
							<div className={styles.widthCenter}>
								<div className={styles.rowWidth}>
									<div href="#" className={styles.tag}>
										NA
									</div>
									<Image src={vs} avatar />
									<div href="#" className={styles.tagLeft}>
										<div className={styles.textTagLeft}>LAN</div>
									</div>
								</div>
								<div className={styles.center}>
									<div> 03/12/2023 02:34:01</div>
								</div>
							</div>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo2} avatar />
							</div>
						</Button>
					</List.Item>
					<List.Item>
						<Button className={styles.contSeg}>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo1} avatar />
							</div>
							<div className={styles.widthCenter}>
								<div className={styles.rowWidth}>
									<div href="#" className={styles.tag}>
										NA
									</div>
									<Image src={vs} avatar />
									<div href="#" className={styles.tagLeft}>
										<div className={styles.textTagLeft}>LAN</div>
									</div>
								</div>
								<div className={styles.center}>
									<div> 03/12/2023 02:34:01</div>
								</div>
							</div>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo2} avatar />
							</div>
						</Button>
					</List.Item>
					<List.Item>
						<Button className={styles.contSeg}>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo1} avatar />
							</div>
							<div className={styles.widthCenter}>
								<div className={styles.rowWidth}>
									<div href="#" className={styles.tag}>
										NA
									</div>
									<Image src={vs} avatar />
									<div href="#" className={styles.tagLeft}>
										<div className={styles.textTagLeft}>LAN</div>
									</div>
								</div>
								<div className={styles.center}>
									<div> 03/12/2023 02:34:01</div>
								</div>
							</div>
							<div className={styles.widthLeft}>
								<Image className={styles.imgSize} src={equipo2} avatar />
							</div>
						</Button>
					</List.Item>
				</List>
			</Card.Content>
			{visibleFilter && (
				<FilterVideo
					data={[]}
					filteredData={() => {
						setVisibleFilter(false);
					}}
					history={false}
					closeModalFilter={() => {
						return setVisibleFilter(false);
					}}
				/>
			)}
		</Card>
	);
};

export default ListVideos;
