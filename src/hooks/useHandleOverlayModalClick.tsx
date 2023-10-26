import { useRef } from "react";

// This hook is designed to simplify the process of handling clicks on an overlay to close a modal and not conflict with the modal card, without this hook clicking anywhere in the modal card would cause it to toggle off.It returns an object with two properties the reference to the modalCard for the condition below and the function below to trigger the toggle:

export default function useHandleOverlayModalClick(onToggle: () => void) {
    const modalRef = useRef(null);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget)
            // Click OUTSIDE the modal card to close the modal
            return onToggle();
    };
    return [modalRef, handleOverlayClick];
}
