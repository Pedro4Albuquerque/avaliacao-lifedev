import styles from './Home.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Home = () => {

  const { documents: posts, loading } = useFetchDocuments("posts")
  const [search, setSearch]= useState("")
  const filteredPosts = posts?.filter((post)=>
    post.title.toLowerCase().includes(search.toLowerCase())
  )
    
    return (
     <div className={styles.home}>
      <h1>Veja as postagem mais recentes </h1>
      <form className={styles.search_form} onSubmit={(e)=> e.preventDefault()}>
      <input 
        type='text'
        placeholder='Busque por título'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-dark">Pesquisar</button>
      </form>

      <div className={styles.post_list}>
        {loading && <p>Carregando Postagem...</p>}
        {!loading && filteredPosts && filteredPosts.length === 0 && (
          <p>Nenhuma postagem encontrada</p>
        )}
        {!loading && filteredPosts && filteredPosts.map((post)=>(
          <div key={post.id} className={styles.post_card}>
            <div className={styles.post_into}>
            <h3>{post.title}</h3>
            <p>{post.content.slice(0, 100)}...</p>
            </div>
            <Link to={`/post/${post.id}`} className="btn ${styles.btn}">
              Ver Postagem
            </Link>
          </div>
        ))}
      </div>
     </div>
    )
  }

export default Home