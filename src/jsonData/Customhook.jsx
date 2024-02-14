import { useState, useCallback, useMemo } from "react";


const useToggle = () => {
    const [status, setStatus] = useState(false);

    const togglestatus = useCallback(() => {
        setStatus((prevStatus) => !prevStatus);
    }, []);


const value = useMemo(
    () => ({
        status,
        togglestatus
    }), [status, togglestatus]
);
return value
}


export default useToggle;