import { useState , useEffect } from 'react';
import API_KEY from "./keys";
const CONTEXT_KEY = "298fc13b0c3ce4335";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    // this is a hook
    useEffect(() => {
        const fetchData=async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
        }
    }, [term])
    // term is a data layer variable. whenever the term changes, we want this hook to be called
    return {data}
};

export default useGoogleSearch
