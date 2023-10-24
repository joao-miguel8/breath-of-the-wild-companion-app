import { useState } from "react";
export function useToggle(initVal = false) {
    const [on, setOn] = useState(initVal);
    const onToggle = () => {
        setOn(!on);
    };
    return [on, onToggle];
}
