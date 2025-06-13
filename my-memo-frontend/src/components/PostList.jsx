import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { getPosts } from './api/PostApiService.jsx'
import './css/PostList.css';

const PostList = () => {

    const [posts, setPosts] = useState([]);

    // 게시글 불러오기
    const getRequestToGetPosts = async () => {
        try {
            // 게시글 목록 호출 및 결과 출력
            const result = await getPosts()
            // 결과 저장
            setPosts(result.data);
            console.log(`게시글 불러오기 성공`);
        } catch (error) {
            console.error(`게시글 불러오기 실패 : ${error}`);
        }
    }

    // 컴포넌트 마운트 시 한 번 실행
    useEffect(() => {
        getRequestToGetPosts();
    }, []);

    return (
        <div className='post-list'>
            <div>
                <h1> 게시글 목록 페이지 </h1>
            </div>
            <div>
                <ul>
                    {posts.length === 0 && <li>게시글 불러오는 중...</li>}
                    {posts.map(post => (
                        <li key={post.id}>
                            {/* Link 로 감싸고 to 에 상세 경로 지정 */}
                            <Link to={`/post-detail/${post.id}`} className="post-link">
                                <h2>{post.title}</h2>
                                <p>{post.content}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PostList