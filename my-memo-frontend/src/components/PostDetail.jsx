import { useParams } from 'react-router-dom';
import { getPost } from './api/PostApiService.jsx'
import { useEffect, useState } from 'react';


const PostDetail = () => {

    // 1) URL에서 :id 가져오기
    const { id } = useParams();

    const [post, setPost] = useState(null);

    // 게시글 불러오기
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await getPost(id);
                setPost(res.data);
            } catch (e) {
                console.error('게시글 불러오기 실패:', e);
            }
        };
        fetchPost();
    }, [id]);

    // 4) 로딩 상태 처리
    if (!post) {
        return <p>게시글을 불러오는 중…</p>;
    }


    return (
        <div className="post-detail">
            <h1>게시글 상세 페이지</h1>
            <h2> 식별자 : {post.id}</h2>
            <h3> 제목 : {post.title}</h3>
            <p> 내용 : {post.content}</p>
        </div>
    );
}

export default PostDetail