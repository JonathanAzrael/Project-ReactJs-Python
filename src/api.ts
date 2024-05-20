import axios from 'axios';
import { Usuario, ApiResponse } from './types';

const API = axios.create({
  baseURL: 'http://127.0.0.1:5000',
});

// API sendo consumido via AXIOS

export const registerUser = async (username: string, password: string) => {
  return API.post('/register', { username, password });
};

export const loginUser = async (username: string, password: string) => {
  return API.post('/login', { username, password });
};

export const criarUsuario = async (id: string, nome: string, email: string): Promise<ApiResponse> => {
  const response = await API.post<ApiResponse>(`/usuarios`, { id, nome, email });
  return response.data;
};

export const listarUsuarios = async (): Promise<Record<string, Usuario>> => {
  const response = await API.get<Record<string, Usuario>>(`/usuarios`);
  return response.data;
};

export const atualizarUsuario = async (id: string, nome: string, email: string): Promise<ApiResponse> => {
  const response = await API.put<ApiResponse>(`/usuarios/${id}`, { nome, email });
  return response.data;
};

export const excluirUsuario = async (id: string): Promise<ApiResponse> => {
  const response = await API.delete<ApiResponse>(`/usuarios/${id}`);
  return response.data;
};
