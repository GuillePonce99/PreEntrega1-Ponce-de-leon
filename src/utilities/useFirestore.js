import { useState, useEffect } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

const initialState = {
    loading: true,
    response:{},
    data:[],
};

const useFirestore = (nameCollection, documentId) => {
    const [state, setState] = useState(initialState);
    
    useEffect(() => {
        const db = getFirestore();
        if (nameCollection && documentId) {
            getDoc(doc(db, nameCollection, documentId)).then((snapshot)=> {
                if (snapshot.exists()) {
                    const _data = snapshot.data();
                    setState({...state,data: _data, loading: false});
                }
            });
        } else if (nameCollection){
            getDocs(collection(db, nameCollection)).then((snapshot)=>{
                const _data = snapshot.docs.map((doc)=> {
                    const item = doc.data();
                    item ["id"] = doc.id;
                    return item;
                    console.log(snapshot);
                });
                setState({...state,data: _data, loading: false})
            });

        }
    }, [nameCollection, documentId]);
    
    return [ state.data, state.loading, state.response ]
    

};

export default useFirestore