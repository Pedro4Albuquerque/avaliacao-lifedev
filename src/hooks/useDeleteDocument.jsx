import { useState, useEffect } from "react"
import { db } from "../firebase/config"
import { doc, deleteDoc } from "firebase/firestore"

export const useDeleteDocument = (docCollection) => {
    const [response, setResponse] = useState({ success: false, error: null });
    const [cancelled, setCancelled] = useState(false)

    const checkCancelBeforeUpdate = (callback) => {
        if (!cancelled) callback();
    }
    const deleteDocument = async (id) => {
        try {
            const docRef = doc(db, docCollection, id);
            await deleteDoc(docRef);
            checkCancelBeforeUpdate(() => {
                setResponse({ success: true, error: null })
            })
        } catch (error) {
            checkCancelBeforeUpdate(() => {
            setResponse({ success: false, error: error.message })
            })
        }
    }
    useEffect(() => {
        return () => setCancelled(true)
    },[])
    return { deleteDocument, response }
}