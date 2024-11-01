export const getToken = (): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
};

export const setToken = (token: string) => {
    console.log("NEW TOKEN GOOTTEN", token)
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
    }
};