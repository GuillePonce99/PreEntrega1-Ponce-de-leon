import { useState, useEffect } from 'react'

const initialState = {
    loading: true,
    response:{},
    data:[],
};

const useFetch = (url) => {
    const [state, setState] = useState(initialState);
    
    useEffect(() => {

        fetch(url)
        .then((response) => {
            // setState({...state, response});
            return response.json();
            
        })
        .then((infoJson)=> {
            setState({...state,data:infoJson,loading:false});
        });
    }, [url]);
    
    return [ state.data, state.loading, state.response ]
    

};

export default useFetch