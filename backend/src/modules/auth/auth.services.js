const User = require('./auth.model');

const createUser = async (data) => {
    const {email}= data;
    
    const existingUser = await User.findOne({email});
    if (existingUser) {
        throw new Error('User already exists');
    }

    const user = await User.create(data);
    return {user};
}

module.exports = {
    createUser
}