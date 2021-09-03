export const BASE_URL =
process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'mongodb://127.0.0.1:27017/inspireDataBase'