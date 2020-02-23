import axios from 'axios';
const API_URL = 'http://localhost:3001/apiv1';

//  Para crear nuevo usuario
const setNewUser = async (user) => {
    try {
        return await axios.post(`${API_URL}/register`, user).then((res) => {
            if (!res.data.success) {
                return res.data.success;
            } else if (res.data.success) {
                return res.data.success;
            }
        });
    }catch (e) {
        throw new Error(e.message);
    }
};

// Recupera sesión de usuario
const getSession = async (user) => {
    try {
        return await axios.post(`${API_URL}/login`, user).then(res => {
            return res.data;
        });
    }catch (e) {
        throw new Error(e.message);
    }
};

// Actualiza datos de usuario
const updateUser = async (id, user) => {
    try {
        return await axios.put(`${API_URL}/register/${id}`, user).then(res => {
            return res.data.result;
        });
    }catch (e) {
        throw new Error(e.message);
    }
};

// Borra datos de usuario
const deleteUser = async (id) => {
    try {
        return await axios.delete(`${API_URL}/register/${id}`).then(res => {
            return res.data;
        });
    }catch (e) {
        throw new Error(e.message);
    }
};

// Para recuperar password
const resetPass = async (email) => {
    try {
        return await axios.post(`${API_URL}/resetpass`, email).then(res => {
            return res.data.result;
        });
    }catch (e) {
        throw new Error(e.message);
    }
};

// Generar un nuevo password
const newPass = async (pass, email, token) => {
    try {
        return await axios.put(`${API_URL}/reset/${token}`, {password: pass, email: email}, {
            headers: { authorization: token },
        }).then(res => {
            return res.data.result;
        });
    }catch (e) {
        throw new Error(e.message);
    }
};

// Para obtener listado de anuncios
const getAds = async () => {
    try {
        return await axios.get(`${API_URL}/anuncios`).then(res => {
            return res.data.result;
        });
    }catch (e) {
        throw new Error(e.message);
    }
};

// Obtiene un anuncio
const getAd = async (id) => {
    try {
        return await axios.get(`${API_URL}/anuncios/${id}`).then(res => res.data.result);
    }catch (e) {
        throw new Error(e.message);
    }
};

// Actualiza un anuncio
const updateAd = async (id, ad, token) => {
    try {
        return await axios.put(`${API_URL}/anuncios/update/${id}`, ad, {
            headers: { authorization: token },
        }).then(res => {
            return res.data.result;
        });
    }catch (e) {
        throw new Error(e.message);
    }
};

// Borra un anuncio
const deleteAd = async (id, token) => {
    try {
        return await axios.delete(`${API_URL}/anuncios/delete/${id}`, {
            headers: { authorization: token },
        }).then(res => {
            return res.data;
        });
    }catch (e) {
        throw new Error(e.message);
    }
};

// Filtro de anuncios
const filterAds = async (filters) => {
    try {
        if (filters.tag && !filters.venta && !filters.price && !filters.name) {

            return await axios.get(`${API_URL}/anuncios?tag=${filters.tag}`).then(res => res.data.result);

        } else if (filters.tipo.value === true || filters.tipo.value === false) {

            return await axios.get(`${API_URL}/anuncios?tag=${filters.tag}&precio=${filters.precios.value}&venta=${filters.tipo.value}&nombre=${filters.name}`)

                .then(res => res.data.result);

        } else if (filters.usuario) {

            return await axios.get(`${API_URL}/anuncios?usuario=${filters.usuario}`)

                .then(res => res.data.result);

        } else {

            return await axios.get(`${API_URL}/anuncios?tag=${filters.tag}&precio=${filters.precios.value}&nombre=${filters.name}`)

                .then(res => res.data.result);
        }

    }catch (e) {
        throw new Error(e.message);
    }
};

// Crear nuevo anuncio
const newAd = async (token, ad) => {
    try {
        await axios.post(`${API_URL}/anuncios`, ad,{
            headers: { authorization: token },
        }).then(res => res.data.result);
    }catch (e) {
        throw new Error(e.message);
    }
};

// Añade un favorito
const adFavorite = async (id, ad, token) => {
    try {
        return await axios.put(`${API_URL}/register/favorite/${id}`, ad, {
            headers: { authorization: token },
        }).then(res => {
            return res.data.favorites.favoritos;
        });
    }catch (e) {
        throw new Error(e.message);
    }
};

// Obtiene favoritos
const getFavs = async (id, token) => {
    try {
        return await axios.get(`${API_URL}/register/favorites/${id}`, {
            headers: { authorization: token },
        }).then(res => {
            return res.data.favorites.favoritos;
        });
    }catch (e) {
        throw new Error(e.message);
    }
};

// Borra favoritos
const deleteFav = async (id, ad, token) => {
    try {
        return await axios.put(`${API_URL}/register/delete/${id}`, ad, {
            headers: { authorization: token },
        }).then(res => {
            return res.data.favorites.favoritos;
        });
    }catch (e) {
        throw new Error(e.message);
    }
};

// Obtiene Tags
const getTags = async () => {
    try {
        return await axios.get(`${API_URL}/anuncios/tags`).then(res => {
           return res.data.result;
        });
    }catch (e) {
        throw new Error(e.message);
    }
};

export {
    setNewUser,
    getAds,
    getTags,
    filterAds,
    getSession,
    getAd,
    deleteUser,
    updateUser,
    newAd,
    deleteAd,
    updateAd,
    adFavorite,
    getFavs,
    deleteFav,
    resetPass,
    newPass
}