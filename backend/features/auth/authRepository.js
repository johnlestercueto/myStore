const BaseRepository = require('../../utils/BaseRepository')
const userModel = require('../auth/authModel')

class authRepository extends BaseRepository {
    constructor() {
        super(userModel);
    }

    

}

module.exports = new authRepository();
