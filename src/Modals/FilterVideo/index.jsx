/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Modal, Button, Checkbox, Input, Dropdown, Icon, Grid, Form } from "semantic-ui-react";
// import Input from "@Components/Input";
import PropTypes from "prop-types";
import { get, isEmpty, includes, map, filter, isNumber } from "lodash";

// Redux
import Text from "@Components/Text";
// import { searchScheduleHistory } from "../../redux/actions/chatSchedule";
import optionSearch from "../staticData";

// Components
// Modals

// Lodash
// Styles
import styles from "./styles.module.css";

// Constant

const FilterVideo = ({
	dispatch,
	contactList,
	user,
	data,
	history,
	channels,
	closeModalFilter,
	agentArray,
	filteredData,
}) => {
	const [platformfilters, setPlatformfilters] = useState([]);
	const [platformfiltersData, setPlatformfiltersData] = useState([]);
	const [groupsfilters, setGroupsfilters] = useState([]);
	const [groupsfiltersData, setGroupsfiltersData] = useState([]);

	const [startDate, setStartDate] = useState(0);
	const [endDate, setEndDate] = useState(0);
	const [agents, setAgents] = useState();
	const [agentsData, setAgentsData] = useState([]);
	const [timeSheduleData, setTimeSheduleData] = useState([]);
	const [timeShedule, setTimeShedule] = useState("Todos");
	const [options, setOptions] = useState("Local");
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		const platoformsMapped = map([], (item, index) => {
			return { key: index, text: item.name, value: item.channelId, icon: item.name.toLowerCase() };
		});

		const groupsMapped = get(user, "groups.currentCompany", []).map((item) => {
			return { id: item.groupId, label: item.name, selected: false };
		});

		const agentsMapped = map([], (item, index) => {
			return {
				id: index,
				text: get(item, "user.fullName", ""),
				content: (
					<div className={styles.row}>
						<Text className={styles.dropdown}>{`${get(item, "user.fullName", "")} /`}</Text>
						<Text>{String(item.user.phone)}</Text>
					</div>
				),
				value: get(item, "item.userId", ""),
			};
		});

		const contactsMapped = map([], (item, index) => {
			return {
				id: index,
				text: `${get(item, "name", "")} / ${String(get(item, "phone", ""))}`,
				value: get(item, "contactId", ""),
			};
		});

		setTimeSheduleData([
			{ key: 1, text: "Todos", value: "Todos" },
			{ key: 2, text: "Pendientes", value: "Pendiente" },
			{ key: 3, text: "Vencida", value: "Vencida" },
		]);

		setPlatformfiltersData(platoformsMapped);
		// setGroupsfiltersData(
		// 	"dropdownFormat"(get(user, "currentCompany.groups", []), "name", "groupId")
		// );
		setAgentsData(agentsMapped);
		setContacts(contactsMapped);
	}, [channels, agentArray, contactList, user]);

	// filters
	const onFilterHistory = async () => {
		const contactId = isNumber(contacts.contactId) ? contacts.contactId : null;
		const agenteId = isNumber(agents) ? agents : null;
		const startDateTS = !isEmpty(startDate) ? new Date(startDate).getTime() : null;
		const endDateTS = !isEmpty(endDate) ? new Date(endDate).getTime() : null;

		const groupsSeleted = !isEmpty(groupsfilters) ? groupsfilters : null;
		const platformsSelected = !isEmpty(platformfilters) ? platformfilters : null;

		await dispatch(
			"genericAction"("post", "chat/searchSchedule", {
				agent: agenteId,
				contact: contactId,
				platforms: platformsSelected,
				groups: groupsSeleted,

				startDate: startDateTS,
				endDate: endDateTS,
			})
		);

		closeModalFilter();
	};

	const onFilterLocal = () => {
		let dataFilter = data;
		if (timeShedule !== "Todos") {
			/* empty */
		}
		if (!isEmpty(startDate)) {
			const filterCreatedDate = filter(dataFilter, (item) => {
				if (new Date(startDate) <= new Date(item.createdDate)) {
					return true;
				}
				return false;
			});
			dataFilter = filterCreatedDate;
		}
		if (!isEmpty(endDate)) {
			const filterCloseDate = filter(dataFilter, (item) => {
				if (new Date(endDate) <= new Date(item.closeDate)) {
					return false;
				}
				return true;
			});
			dataFilter = filterCloseDate;
		}
		if (!isEmpty(platformfilters)) {
			const filterGroupId = filter(dataFilter, (item) => {
				if (includes(groupsfilters, item.GroupId)) {
					return true;
				}
				return false;
			});

			dataFilter = filterGroupId;
		}
		if (!isEmpty(groupsfilters)) {
			const filterChannel = filter(dataFilter, (item) => {
				if (includes(platformfilters, item.channelId)) {
					return true;
				}
				return false;
			});

			dataFilter = filterChannel;
		}
		if (isNumber(agents)) {
			const filterAgent = filter(dataFilter, { userId: agents });

			dataFilter = filterAgent;
		}

		if (isNumber(contacts.contactId)) {
			const filterUserId = filter(dataFilter, { contactId: contacts.contactId });
			dataFilter = filterUserId;
		}

		filteredData(dataFilter);
	};
	// handlerInput
	const checkAll = (name) => {
		switch (name) {
			case "platformfilters":
				if (platformfilters.length !== platformfiltersData.length) {
					const plataformArray = map(platformfiltersData, (item) => {
						return item.value;
					});

					setPlatformfilters(plataformArray);
				} else {
					setPlatformfilters([]);
				}
				break;
			case "groupsfilters":
				if (groupsfilters.length !== groupsfiltersData.length) {
					const groupsfiltersArray = map(groupsfiltersData, (item) => {
						return item.value;
					});

					setGroupsfilters(groupsfiltersArray);
				} else {
					setGroupsfilters([]);
				}
				break;
			default:
				break;
		}
	};
	const renderLabelPlatforms = (label) => {
		return {
			color: "blue",
			content: `${label.text}`,
			icon: label.icon,
		};
	};

	const renderLabelDepartments = (item) => {
		return {
			color: "blue",
			content: `${item.text} `,
			icon: "building outline",
		};
	};

	return (
		<Modal open size="small" dimmer="blurring" closeIcon onClose={closeModalFilter}>
			<Modal.Header className={styles.container}>
				<div className={styles.header}>
					<Icon name="tv" className={styles.icon} />
					Filtrar Lista
				</div>
				<div>
					<Dropdown
						className={styles.dropDawnOptions}
						placeholder="Elegir"
						fluid
						value={options}
						name="timeShedule"
						selection
						search
						onChange={(e, { value }) => {
							return setOptions(value);
						}}
						options={optionSearch}
					/>
				</div>
				{history && <Text className={styles.titleTextHistory}>Histórico</Text>}
			</Modal.Header>
			<Modal.Content className={styles.contentModal}>
				<div className={styles.sectionTitle}>
					<Text className={styles.sectionTitleText}>Estado</Text>
				</div>

				<div className={styles.sectionContent}>
					<Dropdown
						placeholder="Elegir"
						fluid
						value={timeShedule}
						name="timeShedule"
						selection
						search
						onChange={(e, { value }) => {
							return setTimeShedule(value);
						}}
						options={timeSheduleData}
					/>
				</div>

				<div className={styles.sectionTitle}>
					<Text className={styles.sectionTitleText}>Rango Fecha</Text>
				</div>

				<Form className={styles.dateContent}>
					<div>
						<Text className={styles.lookUpLabel}>Desde:</Text>
						<Input
							type="datetime-local"
							min="1999-1-1"
							max="2019-12-31"
							icon="calendar minus"
							iconPosition="left"
							placeholder="Inicio"
							fluid
							size="mini"
							// action={{ onClick: () => visiblePassword(), icon: "edit" }}
							name="startDate"
							onChange={(e) => {
								return setStartDate(e.target.value);
							}}
							value={startDate}
							className={styles.dateInput}
						/>
					</div>
					<div>
						<Text className={styles.lookUpLabel}>Hasta:</Text>
						<Input
							type="datetime-local"
							icon="calendar plus"
							iconPosition="left"
							placeholder="Final"
							fluid
							name="endDate"
							value={endDate}
							size="mini"
							// action={{ onClick: () => visiblePassword(), icon: "edit" }}
							onChange={(e) => {
								return setEndDate(e.target.value);
							}}
							className={styles.dateInput}
						/>
					</div>
				</Form>

				<div className={styles.section}>
					<div className={styles.sectionTitle}>
						<Checkbox
							className={styles.checkBox}
							name="platformsAll"
							checked={platformfilters.length === platformfiltersData.length}
							disabled={isEmpty(platformfiltersData)}
							onChange={() => {
								return checkAll("platformfilters");
							}}
						/>
						<Text className={styles.sectionTitleText}>Plataformas</Text>
					</div>

					<div className={styles.sectionContent}>
						<Dropdown
							fluid
							onChange={(e, { value }) => {
								return setPlatformfilters(value);
							}}
							value={platformfilters}
							placeholder="Plataformas"
							multiple
							search
							options={platformfiltersData}
							renderLabel={renderLabelPlatforms}
						/>
					</div>
				</div>

				{!isEmpty(groupsfiltersData) && (
					<div className={styles.section}>
						<div className={styles.sectionTitle}>
							<Checkbox
								name="groupsAll"
								className={styles.checkBox}
								checked={groupsfilters.length === groupsfiltersData.length}
								disabled={isEmpty(groupsfiltersData)}
								onChange={() => {
									return checkAll("groupsfilters");
								}}
							/>
							<Text className={styles.sectionTitleText}>Grupos</Text>
						</div>

						<div className={styles.sectionContent}>
							<Dropdown
								fluid
								onChange={(e, { value }) => {
									return setGroupsfilters(value);
								}}
								placeholder="Grupos"
								multiple
								search
								value={groupsfilters}
								options={groupsfiltersData}
								renderLabel={renderLabelDepartments}
							/>
						</div>
					</div>
				)}

				<div className={styles.sectionTitle}>
					<Text className={styles.sectionTitleText}>Otros</Text>
				</div>
				<div>
					<div className={styles.lookUpLabel}>Usuario:</div>
					<Dropdown
						placeholder="Elegir Agente"
						fluid
						clearable
						value={agents}
						name="agents"
						selection
						search
						onChange={(e, { value }) => {
							return setAgents(value);
						}}
						options={agentsData}
					/>

					<div className={styles.lookUpLabelClient}>Cliente:</div>

					<Input
						fluid
						selectedContact={(value) => {
							return setContacts(value);
						}}
					/>
				</div>
			</Modal.Content>
			<Modal.Actions className={styles.containerFooter}>
				<Button className={styles.negativeButton} onClick={closeModalFilter}>
					Cancelar
				</Button>

				<Button className={styles.positiveButton} color="blue" onClick={onFilterLocal}>
					Filtrar
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

FilterVideo.propTypes = {
	contactList: PropTypes.array,
	user: PropTypes.object,
	data: PropTypes.array,
	history: PropTypes.bool,
	channels: PropTypes.array,
	closeModalFilter: PropTypes.func,
	agentArray: PropTypes.array,
	filteredData: PropTypes.func,
	dispatch: PropTypes.func,
};
export default FilterVideo;
