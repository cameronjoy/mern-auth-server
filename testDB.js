require('dotenv').config()

const db = require('./models')

db.connect() // test db connection

const dbTest = async () => {
    try{
        //CREATE
        // const newUser = new db.User({
        //     name: 'oliver peters',
        //     email: 'op@gmail.com',
        //     password: 'oliver'
        // })

        // await newUser.save()
        // console.log('new user:', newUser)

        //READ -- at login
        const foundUser = await db.User.findOne({
            name: 'oliver peters'
        })

        console.log('found user:', foundUser)

    } catch (err) {
        console.log(err)
    }
}

dbTest()
