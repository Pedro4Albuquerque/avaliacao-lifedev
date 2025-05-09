import { useState, useEffect, useReducer } from "react"
import { db } from "../firebase/config"
import { doc, updateDoc } from "firebase/firestore"

export const useUpdateDocument = (docCollection) => {
    const [response, setResponse] = useState({ success: false, error: null})
    const updateDocument = async (id , data) => {
        try{
            const docRef = doc(db,docCollection,id)
            await updateDoc(docRef,data)
            setResponse({ success: true , error:null})
        }catch(error){
            setResponse({success: false, error:error.message})
        }
    }
    return { updateDocument, response}
}