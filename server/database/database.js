const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:') // In-memory DB; for persistence use a file

// Create the necessary tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT
  )`)

  db.run(`CREATE TABLE IF NOT EXISTS form_entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    location TEXT,
    productType TEXT,
    price TEXT,
    exchangeOption TEXT
  )`)

  db.run(`CREATE TABLE IF NOT EXISTS pins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    entryId INTEGER,
    name TEXT,
    lat REAL,
    lng REAL,
    productType TEXT,
    price TEXT,
    FOREIGN KEY(entryId) REFERENCES form_entries(id)
  )`)
})

module.exports = db
