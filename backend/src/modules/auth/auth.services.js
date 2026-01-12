const User = require('./auth.model');

// register user service
const createUser = async (data) => {
    const {email}= data;
    
    const existingUser = await User.findOne({email});
    if (existingUser) {
        throw new Error('User already exists');
    }

    const user = await User.create(data);
    return {user};
}

// login user service
const loginUser = async (data) => {
    const {email, password} = data;
    
    const user = await User.findOne({email});
    if (!user) {
        throw new Error('User does not exist');
    }       
    
    const isPasswordMatch = await user.matchPassword(password);
    if (!isPasswordMatch) {
        throw new Error('Invalid credentials');
    } 

    return {user};
}

module.exports = {
    createUser,
    loginUser
}