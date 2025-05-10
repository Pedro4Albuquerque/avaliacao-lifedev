import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import styles from './PostDetails.module.css'

const PostDetail =()=>{
    const {id} = useParams();
    const {document: post,loading} = useFetchDocument("posts",id)
    return (
        <div className={styles.postostDetail}>
            {loading && <p className={styles.loading}>Carregando post...</p>}
            {post && (
                <>
                <h2 className={styles.title}>{post.title}</h2>
                
                <p className={styles.content}>{post.content}</p>
                </>
            )}
            {!loading&&!post&&<p className={styles.notFound}>Post não encontrado.</p>}
        </div>
    )
}

export default PostDetail;