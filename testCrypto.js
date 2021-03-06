const bcrypt = require('bcryptjs')

const cryptoTest = async () => {
    try{
        // test password
        const password = 'hello'

        // specify the salt rounds (more rounds more hashed)
        const salt = 12 // 12 is industy standard

        //hash the password
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log(hashedPassword)

        // when checking user login
        const match = await bcrypt.compare('hello', hashedPassword)

        console.log('match:', match)

    }catch(err) {
        console.log(err)
    }
  
}

cryptoTest()