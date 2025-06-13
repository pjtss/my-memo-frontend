import {get, post, put, patch, del} from './BaseApi.jsx';

export const join = (payload) => post('/users/join', payload);

export const login = (payload) => post('/users/login', payload);