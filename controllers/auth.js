const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const saltRounds = 10

const register = (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const hashedPassword = bcrypt.hashSync(password, saltRounds)
  const user = {
    username,
    password: hashedPassword
  }
  
  User.push(user)
  
  return res.status(201).json({ message: 'Register successfully' })
}

const login = (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const dataUser = User.find((user) => user.username == username)

  if (!dataUser) {
    return res.status(401).json({ message: 'Username not found' })
  }
    // const password = await bcrypt.compare(password, dataUser.password)

  if (bcrypt.compareSync(password, dataUser.password)) {
    const token = jwt.sign(username, process.env.JWT_TOKEN)

    res.status(200).json({ token })
  } else {
    return res.status(401).json({ message: 'Wrong password' })
  }
}

// const register = async (req, res) => {
//     try {
//         const { username, password } = req.body
//         const hashedPassword = await bcrypt.hashSync(password, saltRounds)
//         // const hashedPassword = bcrypt.hashSync(password, saltRounds)
    
//         await User.create({
//             username,
//             password: hashedPassword
//         })
    
//         // User.push(user)
    
//         res.status(201).json({ message: 'Registerd successfully' })
//     } catch (err) {
//         res.status(500).json({ message: 'Server error' })
//     }
// }

// const login = async (req, res) => {
//     try {
//         const { username, password } = req.body
//         const user = await User.findOne({ username })

//         if (!user) {
//             return res.status(401).json({ message: 'Username not found' })
//         } else {
//           const passwordMatch = await bcrypt.compareSync(password, user.password)

//           // if (!bcrypt.compareSync(password, user.password)) {
//           if (!passwordMatch) {
//               const token = jwt.sign(username, secret_key)
      
//               res.status(200).json({ token })
//           } else {
//               return res.status(401).json({ message: 'Wrong password' })
//           }
//         }
//     } catch (err) {
//         res.status(500).json({ message: 'Server error' })
//     }
// }

// const login = (req, res) => {
//     const { username, password } = req.body

//     // create a JWT token with user information
//     const token = jwt.sign(username, secret_key)

//     // send the token to the user
//     res.json({ token })
// }

// const userRegister = async (req, res) => {
//     try {
//         const { username, password } = req.body
//         const hashedPassword = await bcrypt.hash(password, 10)

//         await User.create({ username, password: hashedPassword })

//         res.status(201).json({ message: 'Registered succescfully' })
//     } catch (err) {
//         res.status(500).json({ error: 'Server error' })
//     }
// }

// const login = async (req, res) => {
//     try {
//         const { username, password } = req.body
//         const user = await User.findOne({ username })

//         if (!user) {
//             return res.status(401).json({ error: 'Invalid username or password' })
//         }

//         const passwordMatch = await bcrypt.compare(password, user.password)

//         if (!passwordMatch) {
//             return res.status(401).json({ error: 'Invalid username or password' })
//         }

//         const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expriresIn: '1h' })
//         res.status(200).json({ token })
//     } catch (err) {
//         res.status(500).json({ error: 'Server error' })
//     }
// }

module.exports = {
    register,
    login
}