const db = require('../database/database')

exports.addFormEntry = (name, email, location, productType, price, exchangeOption) => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare(
      'INSERT INTO form_entries (name, email, location, productType, price, exchangeOption) VALUES (?, ?, ?, ?, ?, ?)'
    )
    stmt.run(name, email, location, productType, price, exchangeOption, function(err) {
      if(err) return reject(err)
      resolve({ id: this.lastID, name, email, location, productType, price, exchangeOption })
    })
  })
}
