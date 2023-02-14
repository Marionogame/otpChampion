/* eslint-disable consistent-return */
import { useEffect, useRef } from "react";
import { isEqual } from "lodash";

const useDeepEffect = (effectCallback, deps) => {
	const isFirst = useRef(true);
	const prevDeps = useRef(deps);

	useEffect(() => {
		const isFirstEffect = isFirst.current;
		const isSame = prevDeps.current.every((obj, index) => {
			return isEqual(obj, deps[index]);
		});

		isFirst.current = false;
		prevDeps.current = deps;

		if (isFirstEffect || !isSame) {
			return effectCallback();
		}
	}, deps);
};

export default useDeepEffect;
