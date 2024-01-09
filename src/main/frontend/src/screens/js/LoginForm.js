import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setIsLogin }) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId || !userPw) {
      alert('아이디와 비밀번호를 입력하세요.');
      return;
    }

    try {
      const response = await axios({
        method: 'post',
        url: '/dog/user/login',
        data: { user_id: userId, user_pw: userPw },
        headers: {
          'content-type': 'application/json'
        },
        maxRedirects: 0
      });
      localStorage.setItem("jwt", response.data);
      if (response.status === 302 || response.status === 200) {
        alert('로그인 성공');
        navigate('/');
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      alert('로그인 요청 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'user_id') {
      setUserId(value);
    } else if (name === 'user_pw') {
      setUserPw(value);
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-user"></i></span>
            <input type="text" name="user_id" className="form-control" placeholder="ID" aria-label="UserID" aria-describedby="addon-wrapping" onChange={handleChange} />
          </div>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-key"></i></span>
            <input type="password" name="user_pw" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} />
          </div>
          <i className="fa-solid fa-eye"></i>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">로그인 유지하기</label>
        </div>
        <input type="submit" value="로그인" className="btn btn-primary" />
      </form>
      <div>
        <button className="btn btn-google btn-user btn-block"
          onClick={() => window.location.href = "/oauth2/authorization/google"}>
          <i className="fab fa-google fa-fw"></i> 구글 로그인
        </button>
        <button className="btn btn-google btn-user btn-block"
          onClick={() => window.location.href = "/oauth2/authorization/naver"}>
          <i className="fab fa-google fa-fw"></i> 네이버 로그인
        </button>
        <button className="btn btn-google btn-user btn-block"
          onClick={() => window.location.href = "/oauth2/authorization/kakao"}>
          <i className="fab fa-google fa-fw"></i> 카카오 로그인
        </button>
      </div>
    </div>
  );
}

export default LoginForm;