const endpoints  = {

    SAVE_USER_DETAILS : (userId) => `http://localhost:17454/user/${userId}`,
    LOGIN : "http://localhost:17454/auth/login",
    SIGNUP : "http://localhost:17454/auth/signup",
};

export default endpoints
