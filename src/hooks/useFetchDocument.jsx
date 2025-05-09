import { useState, useEffect } from "react"
import { db } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore"

export const useFetchDocument = (docCollection, id) => {
    const [document, setDocument] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadDocument = async () => {
            try {
                const docRef = doc(db, docCollection, id)
                const snapshot = await getDoc(docRef)

                if (snapshot.exists()) {
                    setDocument({ id: snapshot.id, ...snapshot.data() })
                } else {
                    setDocument(null)
                }
            } catch (err) {
                setDocument(null)
            } finally {
                setLoading(false)
            }
        }
        loadDocument();
    }, [docCollection, id])

    return { document, loading }
}