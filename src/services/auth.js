import { ROLE } from '../contants';
import api from "./api";
export const isAuthenticated = () => localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN) !== null;
export const getToken = () => localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN);
export const getRole = () => localStorage.getItem(ROLE);

export const login = async (token) => {
    localStorage.setItem(process.env.REACT_APP_ACCESS_TOKEN, token);
    const roleRes = await api.get('http://localhost:9090/api/auth/role');
    localStorage.setItem(ROLE, roleRes.data[0].authority);
};
export const logout = () => {
    localStorage.removeItem(process.env.REACT_APP_ACCESS_TOKEN);
    localStorage.removeItem(ROLE);
};
