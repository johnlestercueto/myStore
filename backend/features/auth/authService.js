const authRepository = require('../auth/authRepository')
const bcrypt = require('bcrypt');
const generateToken = require('../../utils/generateToken');

class authServices {


    async register(data) { 
        try {
            // Check kung existing na ang user
        const existing = await authRepository.findOne({ phonenumber: data.phonenumber })
        if(existing) throw new Error('Phone Number is already exists')

        // Hash ang password
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // Create 
        const user = await authRepository.create({
            username: data.username,
            phonenumber: data.phonenumber,
            password: hashedPassword,
            
            
        })

        // Convert to plain object at tanggalin ang password
            const userObj = user.toObject();
            delete userObj.password;

            //Return successful register response
            return {  user: userObj }

        } catch (error) {
            //console.log('auth services register - error :', error)
        }
    }

    async login(data) {
        try {
            //  Hanapin ang user sa database
        const user = await authRepository.findOne({ phonenumber: data.phonenumber })
        if(!user) throw new Error('user not found')
        
        // I-verify ang password
        const isMatch = await bcrypt.compare(data.password, user.password)
        if(!isMatch) throw new Error('invalid credentials')
        
         // token 
        const token = generateToken(user)

         // Convert to plain object at tanggalin ang password
            const userObj = user.toObject();
            delete userObj.password;

            //Return successful register response
            return { token, user: userObj }

        
        
        } catch (error) {
            //console.log('auth services - log in error :', error)
        }
        
    }
}

module.exports = new authServices();