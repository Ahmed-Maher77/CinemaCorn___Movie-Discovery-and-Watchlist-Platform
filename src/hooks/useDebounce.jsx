import { useEffect, useRef, useState } from "react";

const useDebounce = (value, delay = 300) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        if (debouncedValue === value) return;
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timerId);
    }, [value, delay])

    return debouncedValue;
}


export default useDebounce;