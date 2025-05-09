import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument"
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import styles from './CreatePost.module.css'

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const { insertDocument, response } = useInsertDocument("posts");
    const navigate = useNavigate();

    const { user } = useAuthValue();

    const handlesubmit = async (e) => {
        e.preventDefault();

        console.log ("usuario atual",user)

        if (!title || !content || !user?.uid){
            alert("Preencha todos os campos e garante que ta logado")
            return;
        } 

        await insertDocument({ title, content, uid: user.uid });
        navigate("/dashboard")
    }

    return (
        <div className={styles.container}>
            <h2>Criar Nova Postagem</h2>
            <form onSubmit={handlesubmit}>
                <label>
                    Titulo:
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
                    ></textarea>
                </label>
                <br />
                <button type="submit" disabled={response.loading}>{response.loading ? "Salvando..." : "Salvar "}</button>
                {response.error && <p className={styles.error}>{response.error}</p>}
            </form>
           
        </div>
    )
}

export default CreatePost;