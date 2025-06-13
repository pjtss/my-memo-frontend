import { useEffect, useState } from 'react';
import './css/Join.css';
import { join } from './api/AuthApiService.jsx';

const Join = () => {

    // 유저 입력 정보
    const [userInfo, setUserInfo] = useState([{
        username: '',
        password: '',
        passwordCheck: ''
    }]);

    // 회원가입 요청
    const doJoin = async (event) => {
        event.preventDefault();
        console.log(`회원가입 요청 전송`);

        try {
            const result = await (join(userInfo));
            console.log(`회원가입 성공 : ${result}`);
        } catch (error) {
            console.error(`회원가입 실패 : ${error}`);
        }
    }

    const handleUserInfoChange = (e) => {
        const { id, value } = e.target;
        setUserInfo(prev => ({ ...prev, [id]: value }));
    }

    return (
        <div className='join-container' >
            <div>
                <h1> 회원가입 페이지 </h1>
            </div>
            <form onSubmit={doJoin} >
                <table>
                    <tbody>
                        <tr>
                            <td> <label htmlFor="username"> 유저네임 </label> </td>
                            <td> <input type="text" id='username' placeholder='유저네임을 입력 해주세요' value={userInfo.username} onChange={handleUserInfoChange} /> </td>
                        </tr>
                        <tr>
                            <td> <label htmlFor="password"> 비밀번호 </label> </td>
                            <td> <input type="password" id='password' placeholder='비밀번호를 입력 해주세요' value={userInfo.password} onChange={handleUserInfoChange} /> </td>
                        </tr>
                        <tr>
                            <td> <label htmlFor="passwordCheck"> 비밀번호 확인 </label> </td>
                            <td> <input type="password" id='passwordCheck' placeholder='비밀번호를 재입력 해주세요' value={userInfo.passwordCheck} onChange={handleUserInfoChange} /> </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="button-cell">
                                <button type="submit">가입하기</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Join

// colspan="2" style="text-align: center;"