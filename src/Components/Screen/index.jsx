// React
import React from "react";

// Libraries
import PropTypes from "prop-types";
import { Sidebar } from "semantic-ui-react";

// Redux
import { connect } from "react-redux";
import toggleSidebar from "@Actions/menu";

// Components
import Header from "@Components/Header";
import SideBar from "@Components/SideBar";

// Styles
import styles from "./styles.module.css";

const Screen = ({
	dispatch,
	children,
	hasHeader = false,
	hasSidebar = false,
	headerTitle = "",
	isExtended,
}) => {
	const handleToggle = () => {
		dispatch(toggleSidebar());
	};

	return (
		<div className={styles.screen}>
			{hasHeader && <Header headerTitle={headerTitle} />}
			<div className={hasHeader ? styles.bodyWithHeader : styles.body}>
				{hasSidebar && (
					<>
						<Sidebar.Pushable className={isExtended ? styles.extendedMenu : styles.collapsedMenu}>
							<SideBar toggleSidebar={handleToggle} isExtended={isExtended} />
						</Sidebar.Pushable>
						<Sidebar.Pusher className={isExtended ? styles.sideBarOpen : styles.sideBarClosed}>
							<div className={styles.content}>{children}</div>
						</Sidebar.Pusher>
					</>
				)}
				{!hasSidebar && children}
			</div>
		</div>
	);
};

Screen.propTypes = {
	dispatch: PropTypes.func,
	children: PropTypes.node,
	hasHeader: PropTypes.bool,
	hasSidebar: PropTypes.bool,
	headerTitle: PropTypes.string,
	isExtended: PropTypes.bool,
};

function mapStateToProps({ menu }) {
	return { isExtended: menu.isExtended };
}

export default connect(mapStateToProps)(Screen);
