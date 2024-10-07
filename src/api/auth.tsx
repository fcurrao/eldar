import axios from 'axios';  
import { generateToken } from '../utils/utils';
import { User } from '../Interfaces/User';
import { Post } from '../Interfaces/Post'; 

let postIdCounter = 100; 

const handleError = (error: any, defaultMessage: string) => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            const status = error.response.status;
            const messageMap: Record<number, string> = {
                400: 'Solicitud inválida. Verifica los datos enviados.',
                401: 'No autorizado. Debes iniciar sesión.',
                403: 'Acceso denegado. No tienes permisos.',
                404: 'Recurso no encontrado.',
                500: 'Error interno del servidor. Inténtalo más tarde.',
            };
            throw new Error(messageMap[status] || `Error inesperado: ${error.response.statusText}`);
        } else if (error.request) {
            throw new Error('No se pudo obtener una respuesta del servidor. Verifica tu conexión.');
        }
    }
    console.error(defaultMessage, error);
    throw new Error(defaultMessage);
};

export const loginUser = async (username: string, password: string): Promise<User> => {
    if (
        (username === import.meta.env.VITE_ADMIN_USERNAME && password === import.meta.env.VITE_ADMIN_PASSWORD) ||
        (username === import.meta.env.VITE_USER_USERNAME && password === import.meta.env.VITE_USER_PASSWORD)
    ) {
        const role = username === import.meta.env.VITE_ADMIN_USERNAME ? 'admin' : 'user';
        const token = generateToken(username, role); // Generar el token simulado sin firma.

        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        return { token, role };
    } else {
        throw new Error('Invalid credentials');
    }
};

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
        return response.data;
    } catch (error) {
        handleError(error, 'Fallo al obtener los posts. Por favor, intenta más tarde.');
    }
};

export const createPost = async (data: Post) => {
    try { 
        postIdCounter += 1; 
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/posts`, data);
        const newPostData = { ...response.data, id: postIdCounter };
        return newPostData; 
    } catch (error) {
        postIdCounter -= 1; 
        handleError(error, 'Fallo al crear el post. Por favor, intenta más tarde.');
    }
};

export const deletePost = async (id: number) => {
    try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/posts/${id}`);
    } catch (error) {
        handleError(error, `Fallo al eliminar el post con ID ${id}. Por favor, intenta más tarde.`);
    }
};

export const editPost = async (id: number, data: Post) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/posts/${id}`, data);
        return response.data;
    } catch (error) {
        handleError(error, `Fallo al actualizar el post con ID ${id}. Por favor, intenta más tarde.`);
    }
};
