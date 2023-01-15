import React, { useEffect } from "react";
import { Image, Menu } from "semantic-ui-react";
import { animateScroll as scroll } from "react-scroll";
import PropTypes from "prop-types";
// Components
import Input from "@Components/Input";

// Styles
import { useNavigate } from "react-router-dom";
// import { isEmpty, get } from "lodash";
import styles from "./styles.module.css";

// const Scroll = require("react-scroll");

// const useScreenWidth = () => {
// 	const [windowWidth, setWindowWidth] = useState(null);
// 	const isWindow = typeof window !== "undefined";
// 	const getWidth = () => {
// 		return isWindow ? window.innerWidth : windowWidth;
// 	};
// 	const resize = () => {
// 		return setWindowWidth(getWidth());
// 	};

// 	useEffect(() => {
// 		return () => {
// 			if (isWindow) {
// 				setWindowWidth(getWidth());

// 				window.addEventListener("resize", resize);

// 				window.removeEventListener("resize", resize);
// 			}
// 		};
// 	}, [isWindow]);

// 	return windowWidth;
// };

const Navbar = ({ logo, activeName }) => {
	// const { scroller } = Scroll;
	const navigate = useNavigate();
	// const [activeNameBar, setActiveNameBar] = useState("Inicio");
	// const [visible, setVisible] = useState(false);

	useEffect(() => {
		scroll.scrollToTop();
	}, []);
	// const handlerMenuItemBar = (string, offset) => {
	// 	if (string === "begin" || string === "desc") {
	// 		scroll.scrollToTop();
	// 	} else {
	// 		scroller.scrollTo(string, {
	// 			smooth: true,
	// 			spy: true,
	// 			offset, // Scrolls to element + 50 pixels down the page
	// 		});
	// 	}
	// 	setActiveNameBar(string);
	// };

	// const handleSecondNavbar = () => {
	// 	let data = [];
	// 	switch (activeName) {
	// 		case "Inicio":
	// 			data = [
	// 				{ text: "Nosotros", value: "we", offset: -280 },
	// 				{ text: "Productos", value: "product", offset: -140 },
	// 				{ text: "Contáctanos ", value: "contact", offset: -140 },
	// 			];
	// 			break;
	// 		case "Konteo":
	// 			data = [
	// 				{ text: "¿Qué es?", value: "desc" },
	// 				{
	// 					text: "¿Cómo funciona?",
	// 					value: "how",
	// 					offset: -140,
	// 				},
	// 				{ text: "Características", value: "features", offset: -260 },
	// 				{ text: "Precios", value: "price", offset: -140 },
	// 			];
	// 			break;
	// 		case "Rastreo":
	// 			data = [
	// 				{ text: "¿Qué es?", value: "desc" },

	// 				{ text: "Características", value: "features", offset: -140 },
	// 				{ text: "Cotizar", value: "price", offset: -60 },
	// 			];
	// 			break;
	// 		case "Max Monitor":
	// 			data = [
	// 				{ text: "¿Qué es?", value: "desc" },

	// 				{ text: "Características", value: "features", offset: -140 },
	// 				{ text: "Cotizar", value: "price", offset: -60 },
	// 			];
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// 	if (isEmpty(activeName)) {
	// 		const CardChanel = null;
	// 		return CardChanel;
	// 	}
	// 	const CardChanel = data.map((item, index) => {
	// 		return (
	// 			<Menu.Item
	// 				keys={index}
	// 				onClick={() => {
	// 					return handlerMenuItemBar(item.value, get(item, "offset", null));
	// 				}}
	// 				className={styles.menuSubItem}
	// 				active={activeNameBar === item.value}>
	// 				{item.text}
	// 			</Menu.Item>
	// 		);
	// 	});
	// 	return CardChanel;
	// };

	// const widthSize = useScreenWidth();

	// const tableWidth = 768;

	return (
		<div className={styles.constNavbar}>
			<Menu color="black" className={styles.constMenu} fixed="top">
				{/* {widthSize < tableWidth && (
						<Menu.Item className={styles.menuItemSiderbar} active={visible}>
							{!visible && (
								<Icon
									className={styles.barIcon}
									onClick={() => {
										return setVisible(true);
									}}
									name="arrow right"
								/>
							)}{" "}
							{visible && (
								<Icon
									className={styles.barIcon}
									onClick={() => {
										return setVisible(true);
									}}
									name="arrow left"
								/>
							)}{" "}
							{widthSize < tableWidth && (
								<Sidebar
									as={Menu}
									animation="overlay"
									icon="labeled"
									className={styles.sidebar}
									inverted
									onHide={() => {
										return setVisible(false);
									}}
									vertical
									visible={visible}
									width="thin">
									{handleSecondNavbar()}
								</Sidebar>
							)}
						</Menu.Item>
					)} */}

				<Menu.Item
					onClick={() => {
						navigate("/");
					}}
					className={styles.menuItemImage}
					position="left">
					<Image className={styles.imageLogo} src={logo} style={{ marginRight: "1.5em" }} />
				</Menu.Item>

				{/* {widthSize > tableWidth && (
						<Menu.Item
							onClick={() => {
								navigate("/");
							}}
							className={styles.menuItem}
							active={activeName === "Inicio"}>
							Inicio
						</Menu.Item>
					)}
					{widthSize > tableWidth && (
						<Menu.Item
							onClick={() => {
								navigate("/konteo");
							}}
							className={styles.menuItem}
							active={activeName === "Konteo"}>
							Konteo
						</Menu.Item>
					)}
					{widthSize > tableWidth && (
						<Menu.Item
							onClick={() => {
								navigate("/rastreo");
							}}
							className={styles.menuItem}
							active={activeName === "Rastreo"}>
							Rastreo
						</Menu.Item>
					)}
					{widthSize > tableWidth && (
						<Menu.Item
							onClick={() => {
								navigate("/maxmonitor");
							}}
							className={styles.menuItem}
							active={activeName === "Max Monitor"}>
							Max Monitor
						</Menu.Item>
					)} */}
				{/* {widthSize < tableWidth && ( */}
				<Menu.Item className={styles.menuItem} active={activeName === "Inicio"}>
					{/* <Dropdown direction="left" icon="sidebar">
							<Dropdown.Menu>
								<Dropdown.Item
									onClick={() => {
										navigate("/");
									}}
									className={styles.dropdownText}
									text="Inicio"
								/>
								<Dropdown.Item
									onClick={() => {
										navigate("/konteo");
									}}
									className={styles.dropdownText}
									text="Konteo"
								/>

								<Dropdown.Item
									onClick={() => {
										navigate("/rastreo");
									}}
									className={styles.dropdownText}
									text="Rastreo"
								/>

								<Dropdown.Item
									onClick={() => {
										navigate("/maxmonitor");
									}}
									className={styles.dropdownText}
									text="Max Monitor"
								/>
							</Dropdown.Menu>
						</Dropdown> */}

					<Input
						icon="barcode"
						// label="Nombre:"
						name="hotkey"
						fluid
						rounded
						className={styles.input}
						value="name"
						// onChange={(e) => {
						// 	return setName(e.target.value);
						// }}
					/>
				</Menu.Item>
				{/* )} */}
			</Menu>
			{/* {widthSize > tableWidth && (
				<Menu color="black" className={styles.constMenuBar} fixed="top">
					<Container className={styles.constItem}>{handleSecondNavbar()}</Container>
				</Menu>
			)} */}
		</div>
	);
};

Navbar.propTypes = {
	logo: PropTypes.string,
	activeName: PropTypes.string,
};
export default Navbar;
