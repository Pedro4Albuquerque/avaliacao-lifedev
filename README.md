 # Mini DevBlog - Avaliação DW3

---
 
 projeto desenvolvido como parte da avaliação técnica da diciplina DW3, utilizando **React**, **Firebase Authentication** , **Firestore** e **Deploy Automatizado via Vercel**.

---
 
## Funcionalidades Entregues 

<table>
  <thead>
    <tr>
      <th>Rota</th>
      <th>Função</th>
      <th>Proteção</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/login</code></td>
      <td>Página de login com Google</td>
      <td>Público</td>
    </tr>
    <tr>
      <td><code>/dashboard</code></td>
      <td>Listagem dos posts do usuário</td>
      <td>Protegida</td>
    </tr>
    <tr>
      <td><code>/post/:id</code></td>
      <td>Visualização de post individual/td>
      <td>Protegida</td>
    </tr>
    <tr>
      <td><code>/post/new</code></td>
      <td>Criação de novas Postagens</td>
      <td>Protegida</td>
    </tr>
  </tbody>
</table>

---

## Estrutura de Páginas 
- `Login.jsx` : Login via Firebase com google
- `Dashboard.jsx` : Lista os posts do usuário logado
- `CreatePost.jsx` : Formulário para criar postagens
- `PostDetail.jsx` : Exibe detalhes do post
- `Navbar.jsx` : Menu dinâmico conforme login
- `Privateroute.jsx` : Proteção de rotas com `Outlet`

---

## Firebase

- Login com Google OAuth
- Firestore para armazanar postagens
- Regras:
  - Apenas o autor pode excluir seus próprios posts
  - Leitura liberada para todas as Postagens

---

  ## Deploy 

  - Vercel com integração automática via GitHub
  - Rewrites configurados (`vercel.json` para SPA (`/dashboard`,`/post/:id` etc.)

**Deploy público:**
[https://avaliacao-lifedev.vercel.app/](https://avaliacao-lifedev.vercel.app/)

**Repositório na branch de entrega:**
[https://github.com/Pedro4Albuquerque/avaliacao-lifedev/tree/avaliacaodw-Pedro4Albuquerque](https://github.com/Pedro4Albuquerque/avaliacao-lifedev/tree/avaliacaodw-Pedro4Albuquerque)

---

## Tecnologia Utilizadas 

- React + Vite
- React Router Dom
- Firevase Auth + Firestore
- CSS Modules
- Vercel (Deploy e CI)
- GitHub Actions : `CodeQL Analysis`

---

## Autor 

Autor: Pedro Henrique Albuquerque Souza 

GitHub: Pedro4Albuquerque
