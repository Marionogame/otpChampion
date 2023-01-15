/* eslint-disable react/jsx-props-no-spreading */
// React
import React, { useEffect, useRef, forwardRef, useState } from "react";

// Libraries
import PropTypes from "prop-types";
import { Form, Button, Icon, Select } from "semantic-ui-react";
import { isEmpty, omit } from "lodash";

// Styles
import styles from "./styles.module.css";

const Input = forwardRef((props, ref) => {
	const {
		isPassword = false,
		name,
		value,
		className,
		icon,
		disabled,
		rounded,
		onChange,
		onKeyPress,
		dropdown,
		fluid = true,
	} = props;
	const input = useRef(null);
	const [type, setType] = useState(isPassword ? "password" : "text");
	const [passwordIcon, setPasswordIcon] = useState("eye slash");

	useEffect(() => {
		if (rounded && isEmpty(value)) {
			(ref || input).current.style.removeProperty("border-top-left-radius");
			(ref || input).current.style.removeProperty("border-bottom-left-radius");
			(ref || input).current.style.removeProperty("border-top-right-radius");
			(ref || input).current.style.removeProperty("border-bottom-right-radius");
			(ref || input).current.style.removeProperty("border-right");
			(ref || input).current.style.setProperty("border-radius", "1rem", "important");
		}
		if (rounded && !isEmpty(value)) {
			(ref || input).current.style.removeProperty("border-radius");
			(ref || input).current.style.setProperty("border-top-left-radius", "1rem", "important");
			(ref || input).current.style.setProperty("border-bottom-left-radius", "1rem", "important");
			(ref || input).current.style.setProperty("border-top-right-radius", "0", "important");
			(ref || input).current.style.setProperty("border-bottom-right-radius", "0", "important");
			(ref || input).current.style.setProperty("border-right", "0", "important");
		}
		if (!isEmpty(dropdown)) {
			(ref || input).current.style.setProperty("border-top-left-radius", "0", "important");
			(ref || input).current.style.setProperty("border-bottom-left-radius", "0", "important");
			(ref || input).current.style.setProperty("border-left-color", "transparent", "important");
		}
	}, [rounded, value, dropdown, ref]);

	const handleEnter = (e) => {
		const { key } = e;
		if (key === "Enter") {
			e.preventDefault();
		}
	};

	const handleToggle = () => {
		const toggle = type === "password";
		const typeVal = toggle ? "text" : "password";
		const iconVal = toggle ? "eye" : "eye slash";
		setType(typeVal);
		setPasswordIcon(iconVal);
	};

	const clearInput = (e) => {
		const data = { name, value: "" };
		onChange({ ...e, target: data }, data);
	};

	const validProps = omit(props, [
		"ref",
		"icon",
		"children",
		"onKeyPress",
		"name",
		"value",
		"onChange",
		"disabled",
		"className",
		"rounded",
		"isPassword",
	]);

	return (
		<Form.Input
			{...validProps}
			className={`${styles.input} ${className}`}
			disabled={disabled}
			onChange={onChange}
			name={name}
			value={value}
			type={type}
			{...(isEmpty(dropdown) ? { iconPosition: "left" } : {})}
			autoComplete="off"
			fluid={fluid}
			onKeyPress={onKeyPress || handleEnter}
			action>
			{!isEmpty(dropdown) && <Select labeled {...dropdown} />}
			{isEmpty(dropdown) && (!isEmpty(icon) || isPassword) && (
				<Icon name={isPassword ? "lock" : icon} />
			)}
			<input ref={ref || input} />
			{!isEmpty(value) && !disabled && (
				<Button
					className={rounded ? styles.clearRoundedIconLast : styles.clearIconLast}
					icon="cancel"
					onClick={clearInput}
				/>
			)}
			{isPassword && (
				<Button className={styles.clearIconLast} icon={passwordIcon} onClick={handleToggle} />
			)}
		</Form.Input>
	);
});

Input.propTypes = {
	onChange: PropTypes.func,
	onKeyPress: PropTypes.func,
	name: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	children: PropTypes.node,
	rounded: PropTypes.bool,
	dropdown: PropTypes.object,
	fluid: PropTypes.bool,
	isPassword: PropTypes.bool,
};

export default Input;
