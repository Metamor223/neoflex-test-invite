import { useState, useEffect } from "react";

export function useUpdateFunction(func){
    const [data, setData] = useState(func());
    useEffect(() => {
        const update = () => {
            setData(func());
        }
        window.addEventListener("cartUpdated", update);
        return () => {
            window.removeEventListener("cartUpdated", update);
        }
    }, []);
    return data;
}