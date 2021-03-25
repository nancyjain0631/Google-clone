import { useState , useEffect } from 'react';
import API_KEY from "./keys";
const CONTEXT_KEY = "298fc13b0c3ce4335";

// this is a custom hook
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData=async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result=>{
                setData(result)
            })
        }
        fetchData();
    }, [term])
    // term is a data layer variable. whenever the term changes, we want this hook to be called
    return {data}
};

export default useGoogleSearch
