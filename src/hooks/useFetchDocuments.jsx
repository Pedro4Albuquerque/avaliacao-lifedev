import { useState, useEffect } from "react"
import { db } from "../firebase/config"
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    where,    
    doc
} from "firebase/firestore"

export const useFetchDocuments = (docCollection) => {
    const [ documents, setDocuments] = useState ([])
    const [ loading, setLoading] = useState(true)

    useEffect(()=>{
        const q = query(collection(db,docCollection), orderBy("createdAt","desc"))
        const unsubscribe = onSnapshot(q,(snapshot)=>{
            const results = [];
            snapshot.forEach((doc)=>
            results.push({id: doc.id, ...doc.data()}))
        
            setDocuments(results);
            setLoading(false)
        })

        return () => unsubscribe();
    },[docCollection])

    return { documents, loading}
}