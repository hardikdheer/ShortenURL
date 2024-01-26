const jwt = require("jsonwebtoken")
const secret = "Hardik@123"

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, secret)
}

function getUser(token) {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        // Handle the error, e.g., log it or return null
        console.error("JWT Verification Error:", error.message);
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}