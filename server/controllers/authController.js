const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { addUser, getUserByEmail } = require('../models/userModel')

const SECRET_KEY = 'your_jwt_secret' // For production, use an environment variable

exports.signup = async (req, res) => {
  const { email, password } = req.body
  try {
    const existingUser = await getUserByEmail(email)
    if(existingUser){
      return res.json({ success: false, message: 'User already exists' })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await addUser(email, hashedPassword)
    res.json({ success: true, user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await getUserByEmail(email)
    if(!user){
      return res.json({ success: false, message: 'User not found' })
    }
    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword){
      return res.json({ success: false, message: 'Invalid credentials' })
    }
    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' })
    res.json({ success: true, token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
}
