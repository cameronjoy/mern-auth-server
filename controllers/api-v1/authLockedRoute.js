const jwt = require('jsonwebtoken')
const db = require('../../models')

const authLockedRoute = async (req, res, next) => {
    try {
        //get the jwt from the authorization headers
        const authHeaders = req.headers.authorization

        //verify jwt -- if jwt not valid, throw catch
        const decoded = jwt.verify(authHeaders, process.env.JWT_SECRET)

        //find the user from the db
        const foundUser = await db.User.findById(decoded.id)

        //mount the user on the res.locals
        res.locals.user = foundUser
        next()


    } catch (err) {
        console.log(err)
        res.status(401).json({ msg: 'you arent allowed to be here!' })
    }
}

module.exports = authLockedRoute