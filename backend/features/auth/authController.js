const authService = require('../auth/authService')

exports.register = async (req, res) => {
    //console.log('req : ', req.body)
    try {
        const user = await authService.register(req.body)
        //console.log('res : ', user )

        res.status(201).json({
            message: 'register user sucessfully',
            user
        })

    } catch (error) {
        //console.log('register error : ', error)
        res.status(500).json({ message: error.message });
    }
}

exports.login = async (req, res) => {
    //console.log('req : ', req.body)
    try {
        const {user, token } = await authService.login(req.body)
        //console.log('res :', token, user)

        res.status(200).json({
            message: 'log in user sucessfully',
            token,
            user
        })

    } catch (error) {
        //console.log('log in error : ', error)
        res.status(500).json({ message: error.message });
    }
}

exports.getAllUser = async (req, res) => {
    
    try {
         const  user = await authService.getAllUser()
        //console.log('res :', user)

        res.status(200).json(user)

    } catch (error) {
        console.log('log in error : ', error)
        res.status(500).json({ message: error.message });
    }
}