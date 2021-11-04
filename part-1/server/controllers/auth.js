/*

const users = []
const bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        users.push(req.body)
        res.status(200).send(req.body)
    encrypt = password => {
        bcrypt.genSalt(12).then(salt => {
        bcrypt.hash(password, salt).then(hash => hash)
  })
    verify = password => {
        bcrypt.genSalt(12).then(salt => {
        bcrypt.hash(password, salt).then(hash => {
        bcrypt.compare(password, hash).then(result => result)
    })
  })
}

}
    }
}


*/


const bcrypt = require('bcryptjs')
const users = [] //we sill have {username, pass: test'} now we're going take this login and see if that still exists 

module.exports = {
    login: (req, res) => {
      const { username, password } = req.body//we are using request body destructing for login and only taking in 2 values. 
      
      for (let i = 0; i < users.length; i++) { //loop through users array
        if (users[i].username === username) { //check index to match username in request.
          const authenticated = bcrypt.compareSync(password, users[i].passwordHash) //bcrypt compares
          if (authenticated) {
            let userToReturn = {...users[i]} //setting the found authenticated 
            delete userToReturn.passwordHash//delete hash to send info back to us
            res.status(200).send(userToReturn)
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        const { username, email, firstName, lastName, password } = req.body
        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)
        let user = {
          username,
          email,
          firstName,
          lastName,
          passwordHash
        }
        users.push(user)//pushed into array
        let userToReturn = {...user}//clone this object and set it to new variable
        delete userToReturn.passwordHash//undo hash
        res.status(200).send(userToReturn)//return obj to user
    }
}





