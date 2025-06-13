// api.js
import axios from 'axios';

// 1. 기본 설정된 Axios 인스턴스 생성
const API_ROOT = 'http://localhost:8080';  // 필요에 따라 변경
const api = axios.create({
  baseURL: API_ROOT,
  withCredentials: true,              // 항상 쿠키 전송
  headers: {
    'Content-Type': 'application/json'
  },
  // timeout: 5000,                   // 필요 시 타임아웃도 추가
});

// 2. HTTP 메서드별 헬퍼 함수
export const get = (url, params = {}) =>
  api.get(url, { params });

export const post = (url, data = {}) =>
  api.post(url, data);

export const update = (url, data = {}) =>
  api.put(url, data);

export const patch = (url, data = {}) =>
  api.patch(url, data);

export const del = (url) =>
  api.delete(url);
