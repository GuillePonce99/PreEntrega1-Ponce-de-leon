import React, { useEffect, useState } from 'react'

import { collection, doc, getDoc, getDocs, getFirestore, where, limit, query } from "firebase/firestore";
import MisComprasComponent from '../components/MisComprasComponent/MisComprasComponent';
import useFirestore from '../utilities/useFirestore';
import { NavLink } from 'react-router-dom';
const nameCollection = "ordenes"

const MisComprasView = () => {
    const [data, loading] = useFirestore({ nameCollection })
    console.log(data);
    return (
        <div className='misComprasContainer'>{
            loading ? ("") : (
                data.map((orden) => {
                    return (
                        <MisComprasComponent orden={orden} loading={loading} />
                    )
                }))
        }

        </div>
    )
}


export default MisComprasView

/*
const [data, setData] = useState([])

useEffect(() => {
    const db = getFirestore();
    getDocs(collection(db, nameCollection)).then((snapshot) => {
        const _data = snapshot.docs.map((doc) => {
            const order = doc.data();
            order["orderId"] = doc.id
            return order
        });
        setData(_data)

    })
}, [nameCollection]);
*/