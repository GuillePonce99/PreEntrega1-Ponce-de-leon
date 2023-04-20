import { useState, useEffect } from 'react'


const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        
        setLoading(true);
        
        fetch(url)
        .then((response) => {
            setResponse(response);
            return response.json();
            
        })
        .then((infoJson)=> {
            setData(infoJson);
            setLoading(false);
        });
    }, [url]);
    
    return { loading, data, response }
    
};

export default useFetch