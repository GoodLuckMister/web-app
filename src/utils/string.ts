export const isValidEmail = (email: string) =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
