import { useRef, useEffect } from "react";

// This hook is designed to simplify the process of disabling the scroll on the body element typically used in conjunction with modals. This hook utilizes a useRef for the body element and a useEffect to apply overflow styling upon the first render. It then returns a cleanup arrow function within the useEffect to remove the scroll lock when needed.

export default function useDisableBodyScroll() {
	const bodyEle = document.body;
	const bodyRef = useRef(bodyEle);

	useEffect(() => {
		// Fixed scroll when modal is open
		bodyRef.current.style.position = "fixed";
		bodyRef.current.style.width = "100%";
		// remove overflow-hidden when modal closed
		return () => {
			bodyRef.current.style.position = "static";
		};
	}, [bodyRef]);
}
