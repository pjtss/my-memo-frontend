import {get, post, put, patch, del } from './BaseApi';

export const getPosts = () => get('/posts');

export const createPost = (payload) => post('/posts', payload);

export const updatePost = (postId, payload) => put(`/posts/${postId}`, payload);

export const patchPost = (postId, payload) => patch(`/posts/${postId}`, payload);

export const deletePost = (postId) => del(`/posts/${postId}`);

