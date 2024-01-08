import { useRef, useState, useEffect } from "react";

export default function useMouseOverDetection() {
	const [globalCordXY, setGlobalCordXY] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);
	const chosenEle = useRef<HTMLElement>(null);

	const elementBoundaries = (x: number, left: number, right: number, y: number, top: number, bottom: number) => {
		setIsHovered(x >= left && x <= right && y >= top && y <= bottom);
	};

	function handleGlobalMouseCords() {
		if (chosenEle.current === null) {
			return;
		}
		const elementChosen = chosenEle.current.getBoundingClientRect();
		elementBoundaries(elementChosen.x, elementChosen.left, elementChosen.right, elementChosen.y, elementChosen.top, elementChosen.bottom);
	}
	useEffect(() => {
		const updateCords = (e: MouseEvent) => {
			setGlobalCordXY({ x: e.x, y: e.y });
		};
		handleGlobalMouseCords();
		window.addEventListener("mousemove", updateCords);

		return () => {
			window.removeEventListener("mousemove", updateCords);
		};
	}, [globalCordXY]);

	return {
		chosenEle,
		isHovered,
		setIsHovered,
		globalCordXY: globalCordXY,
	};
}
