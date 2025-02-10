const db = require('../database/database')

exports.addUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)')
    stmt.run(email, password, function(err) {
      if(err) return reject(err)
      resolve({ id: this.lastID, email })
    })
  })
}

exports.getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
      if(err) return reject(err)
      resolve(row)
    })
  })
}
