const { Users } = require("../models");
const bcrypt = require('bcrypt')

// login user
const loginUser = async (req, res) => {
    const { emailId, password } = req.body
    try{
        const findUser = await Users.findOne({where : {emailId: emailId}})
        if(!findUser){
            throw Error('Login Failed: Invalid credentials')

        }
        const match = await bcrypt.compare(password, findUser.password);
        if(!match){
            throw Error('Incorrect Password')
        }
        res.status(200).json({Username: findUser.Username})
    }catch(error){
        res.status(400).json({error: error.message})
    }
};

// sign-up user
const signupUser = async (req, res) => {
    const { Username, emailID, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const createdUser = await Users.create({ Username, emailID, password:hash });
        res.status(200).json({ Username });
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            res.status(400).json({ error: "User already exists try with different email" });
        } else {
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = { loginUser, signupUser };
