// React
import React from "react";

// Libraries
import PropTypes from "prop-types";
import { Menu, Icon, Popup } from "semantic-ui-react";
import { isEmpty, map } from "lodash";

// Components
import Text from "@Components/Text";

// Styles
import styles from "./styles.module.css";

const SideBarMenu = ({
	isExtended = false,
	name = "",
	icon = "",
	path = "",
	type = "",
	subMenu = [],
	isActive = false,
	allowNavigation = false,
	onClick,
}) => {
	const handleClick = (refPath, refType) => {
		if (allowNavigation) {
			onClick(refPath, refType);
		} else {
			onClick();
		}
	};

	const renderSubMenu = (array) => {
		if (isEmpty(array)) return null;
		const items = map(array, (item, index) => {
			const currentWindow = window.location.pathname;
			const current = currentWindow === item.path;
			if (isExtended) {
				return (
					<Menu.Item
						key={index}
						className={current ? styles.activeMenuItem : styles.menuItem}
						onClick={() => {
							return handleClick(item.path, type);
						}}>
						<Icon className={styles.subIcon} name={item.icon} />
						<Text className={styles.subText}>{item.name}</Text>
					</Menu.Item>
				);
			}
			return (
				<Menu.Item
					key={index}
					className={current ? styles.activeMenuItem : styles.menuItem}
					onClick={() => {
						return handleClick(item.path, type);
					}}>
					<Text className={styles.subText}>{item.name}</Text>
				</Menu.Item>
			);
		});
		return items;
	};

	const subPath = isEmpty(subMenu) ? path : subMenu[0].path;
	if (isExtended) {
		if (isActive) {
			return (
				<div className={styles.itemSelectMultiple}>
					<Menu.Item
						className={styles.itemMultiple}
						onClick={() => {
							return handleClick(subPath, type);
						}}>
						<div className={styles.activeItem}>
							<Icon className={styles.icon} name={icon} />
							<Text className={styles.text}>{name}</Text>
						</div>
					</Menu.Item>
					{renderSubMenu(subMenu)}
				</div>
			);
		}
		return (
			<Menu.Item
				className={styles.item}
				onClick={() => {
					return handleClick(subPath, type);
				}}>
				<div className={styles.activeItem}>
					<Icon className={styles.icon} name={icon} />
					<Text className={styles.text}>{name}</Text>
				</div>
			</Menu.Item>
		);
	}

	return (
		<Popup
			className={styles.menu}
			on="hover"
			hoverable
			position="right center"
			pinned
			basic
			trigger={
				<Menu.Item
					className={isActive ? styles.itemSelect : styles.item}
					onClick={() => {
						return handleClick(subPath, type);
					}}>
					<div className={styles.activeItem}>
						<Icon className={styles.icon} name={icon} />
					</div>
				</Menu.Item>
			}>
			<Popup.Content>
				<Menu vertical>
					<Menu.Item
						className={!isEmpty(subMenu) ? styles.titleMenuItem : styles.menuItem}
						onClick={() => {
							return handleClick(subPath, type);
						}}>
						<Text className={styles.titleText}>{name}</Text>
					</Menu.Item>
					{!isEmpty(subMenu) && renderSubMenu(subMenu)}
				</Menu>
			</Popup.Content>
		</Popup>
	);
};

SideBarMenu.propTypes = {
	isExtended: PropTypes.bool,
	name: PropTypes.string,
	icon: PropTypes.string,
	path: PropTypes.string,
	type: PropTypes.string,
	subMenu: PropTypes.array,
	isActive: PropTypes.bool,
	allowNavigation: PropTypes.bool,
	onClick: PropTypes.func,
};

export default SideBarMenu;
