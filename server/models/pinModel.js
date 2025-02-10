const db = require('../database/database')

exports.addPin = (entryId, name, lat, lng, productType, price) => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare(
      'INSERT INTO pins (entryId, name, lat, lng, productType, price) VALUES (?, ?, ?, ?, ?, ?)'
    )
    stmt.run(entryId, name, lat, lng, productType, price, function(err) {
      if(err) return reject(err)
      resolve({ id: this.lastID, entryId, name, lat, lng, productType, price })
    })
  })
}

exports.getAllPins = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM pins', [], (err, rows) => {
      if(err) return reject(err)
      resolve(rows)
    })
  })
}
