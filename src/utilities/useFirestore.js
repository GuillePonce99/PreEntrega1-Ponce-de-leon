import { useState, useEffect, useMemo } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore, where, limit, query } from "firebase/firestore";


const initialState = {
    loading: true,
    response:{},
    data:[],
};

const filtersFuntions = {
    where,
    limit,
};

const useFirestore = ( {nameCollection="", documentId, filters} ) => {
    const [state, setState] = useState(initialState);
    
    const listFilters = useMemo(()=>{
        return Object.keys(filters || {}).map((key) => {
            const _filter = filtersFuntions[key];
            const [field, operator, value] = filters[key];
            return _filter(field,operator,value);
        });
    },[filters]);
    
    useEffect(() => {
        const db = getFirestore();
        if (nameCollection && documentId) {
            getDoc(doc(db, nameCollection, documentId)).then((snapshot)=> {
                if (snapshot.exists()) {
                    const _data = snapshot.data();
                    _data["id"] = documentId;
                    setState({...state,data: _data, loading: false});
                }
            });
        } else if (nameCollection){
            const _query = query(collection(db, nameCollection), ...listFilters);
            getDocs(_query).then((snapshot)=>{
                const _data = snapshot.docs.map((doc)=> {
                    const item = doc.data();
                    item["id"] = doc.id;
                    return item;
                });
                setState({...state,data: _data, loading: false});
            });
        }     
    }, [nameCollection, documentId, listFilters]);

    return [ state.data, state.loading, state.response ]
    


};

export default useFirestore