import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useDeleteDocument } from "../../hooks/useDeleteDocument"
import styles  from './Dashboard.module.css'
const Dashboard = () => {
    const { user } = useAuthValue()
    const { documents: posts, loading } = useFetchDocuments("posts");
    const { deleteDocument } = useDeleteDocument("posts")
    const userPosts = user && posts ? posts.filter((p) => p.uid === user.uid) : []

     const handleDelete =(id)=>{
        deleteDocument(id)
     }

    console.log(posts)
    return (
        <div className={styles.dashboard}>
            <h2 className={styles.title}>Dashboard</h2>
            {loading && <p className={styles.loading}>Carregando postagem...</p>}
            {!loading && userPosts.length === 0 && <p className={styles.empty}>Nenhuma postagem encontrado.</p>}
            {!loading && userPosts.map((post) => (
                <div key={post.id} className={styles.postContainer}>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postContent}>{post.content}</p>
                    <div className={styles.postActions}>
                        <p><Link to={`/post/${post.id}`}>Ver Postagem</Link></p>
                        {user?.uid === post.uid && (
                        <p>
                            <Link to={`/post/edit/${post.id}`} style={{ marginRight: '10px ' }} >Editar</Link>
                            <button onClick={() => handleDelete(post.id)} style={{ color: " red" }}>Excluir</button>
                        </p>
                        )}
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Dashboard;