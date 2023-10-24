import { useRef, useEffect } from "react";

export default function useDisableBodyScroll() {
    const bodyEle = document.body;
    const bodyRef = useRef(bodyEle);

    useEffect(() => {
        // disable scroll when modal is open
        bodyRef.current.style.overflow = "hidden";
        // remove overflow-hidden when modal closed
        return () => {
            bodyRef.current.style.overflow = "scroll";
        };
    }, []);
}
