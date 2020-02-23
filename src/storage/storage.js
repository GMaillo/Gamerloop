export const saveUser = session => {
    localStorage.setItem('data', JSON.stringify(session));
};

export const getUser = () => {
    const session = localStorage.getItem('data');
    return JSON.parse(session);
};

export const deleteStorage = () => {
    localStorage.clear();
};