import { useState } from "react";

//  A custom React hook for implementing a simple toggling logic in components, it simplifies the process of managing a toggle state and provides a function to toggle it.

export function useToggle(initVal = false) {
    const [on, setOn] = useState(initVal);
    const toggleFalse = () => {
        setOn(false);
    };
    const toggleTrue = () => {
        setOn(true);
    };
    const onToggle = () => {
        setOn(!on);
    };
    return { on, onToggle, toggleTrue, toggleFalse };
}
