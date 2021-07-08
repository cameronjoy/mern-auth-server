const jwt = require('jsonwebtoken')

const jwtTest = () => {
    try {
        // create the data payload
        const payload = {
            name: 'cameron',
            id: 5
        }

        // signing the jwt
        const token = jwt.sign(payload, 'This is my secret', {expiresIn: 60 * 60})
        console.log(token)

        // request to the server:

        //decode the incoming jwt
        const decoded = jwt.verify(token, 'This is my secret')
        console.log(decoded)
        
    } catch(err) {
        console.log(err)
    }
}

jwtTest()