import bcrypt from 'bcryptjs';

export const createPasswordHash = async (password) => {
    return bcrypt.hash(`secret${password}`, 8);
}

export const checkPassword = (user, password) => {
    return bcrypt.compareSync(`secret${password}`, user.password);
}