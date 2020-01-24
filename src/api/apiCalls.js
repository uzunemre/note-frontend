import axios from 'axios';

export const signup = (user) => {
    return axios.post('/api/1.0/users', user);
};

export const login = (user) => {
    return axios.post('/api/1.0/login', user);
};

export const listNotes = (userId) => {
    const path = `/api/1.0/users/${userId}/notes`;
    return axios.get(path);
};

export const addNote = (note) => {
    return axios.post('/api/1.0/notes', note);
};

export const editNote = (id, note) => {
    const path = `/api/1.0/notes/${id}/`;
    return axios.put(path, {note: note});
};

export const deleteNote = (id) => {
    const path = `/api/1.0/notes/${id}/`;
    return axios.delete(path);
};

export const setAuthorizationHeader = () => {
    let data = localStorage.getItem('note-auth');
    if (data) {
        const persistedState = JSON.parse(data);
        const token = persistedState.token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};
