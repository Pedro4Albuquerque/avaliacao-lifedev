import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase/config"
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuthValue } from "../../context/AuthContext";

const EditPost = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { user } = useAuthValue()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const loadPost = async () => {
            try {
                const docRef = doc(db, "posts", id);
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    const post = docSnap.data();
                    if (post.uid !== user?.uid) {
                        setError("Você não tem permição para editar esta Postagem")
                        return;
                    }
                    setTitle(post.title || "")
                    setContent(post.content || "")
                } else {
                    setError("Postagem não encontrada")
                }
            } catch (err) {
                setError("Erro ao carregar a Postagem")
            } finally {
                setLoading(false)
            }
        }

        loadPost()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = doc(db, "posts", id)
            await updateDoc(docRef, {
                title,
                content,
            })
            navigate("/dashboard")
        } catch (err) {
            setError("Erro ao atualizar a Postagem")
        }
    }

    return (
        <div>
            <h2>Editar Postagem</h2>
            {loading && <p>Carregando dados...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Título:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Conteúdo:
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Salvar Altereções</button>
                </form>
            )}
        </div>
    )
}

export default EditPost