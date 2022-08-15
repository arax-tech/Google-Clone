import { useEffect, useState } from "react";

const CONTEXT_KEY = "017576662512468239146";
const API_KEY = "AIzaSyAadc5WAiWZRxYDLVKUXfiJaKIih_hUhcQ";
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}:omuauf_lfve&q=${term}`)
            .then (response => response.json())
            .then (result => {
                setData(result)
            })
        }
        fetchData();
    }, [term])

    return { data };

}

export default useGoogleSearch
