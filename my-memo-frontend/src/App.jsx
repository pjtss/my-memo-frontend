import { Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main.jsx';
import Join from './components/Join.jsx';
import Login from './components/Login.jsx';
import CreatePost from './components/CreatePost.jsx';
import UpdatePost from './components/UpdatePost.jsx';
import PostList from './components/PostList.jsx';
import PostDetail from './components/PostDetail.jsx';


function App() {

  return (

    <div>
      <nav>
        <Link to={"/"} > 메인 </Link>
        <br />
        <Link to={"/join"} > 회원가입 </Link>
        <br />
        <Link to={"/login"} > 로그인 </Link>
        <br />
        <Link to={"/create-post"} > 게시글 작성 </Link>
        <br />
        <Link to={"/update-post"} > 게시글 수정 </Link>
        <br />
        <Link to={"/post-list"} > 게시글 목록 </Link>
        <br />
        <Link to={"/post-detail"} > 게시글 상세 </Link>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/join' element={<Join />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post' element={<UpdatePost />} />
          <Route path='/post-list' element={<PostList />} />
          <Route path='/post-detail/:id' element={<PostDetail />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
