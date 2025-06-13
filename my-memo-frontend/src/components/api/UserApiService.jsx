import {get, post, put, patch, del} from './BaseApi.jsx';

export const getUserInfo = (userId) => get(`/users/${userId}`);

export const updateUserInfo = (userId, payload) => put(`/users/${userId}`, payload); 

export const deleteUser = (userId) => del(`/users/${userId}`);