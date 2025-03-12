const db = require('../database/database');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  createUser: async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return new Promise((resolve, reject) => {
      const stmt = db.prepare(
        'INSERT INTO users (email, password) VALUES (?, ?)'
      );
      stmt.run(email, hashedPassword, function(err) {
        if(err) {
          if(err.message.includes('SQLITE_CONSTRAINT: UNIQUE')) {
            return reject(new Error('Email already exists'));
          }
          return reject(err);
        }
        resolve({
          id: this.lastID,
          email,
          isAdmin: false,
          createdAt: new Date().toISOString()
        });
      });
    });
  },

  findUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      db.get(
        'SELECT * FROM users WHERE email = ?',
        [email],
        (err, row) => {
          if(err) return reject(err);
          resolve(row);
        }
      );
    });
  },

  findUserById: (id) => {
    return new Promise((resolve, reject) => {
      db.get(
        'SELECT id, email, isAdmin, createdAt FROM users WHERE id = ?',
        [id],
        (err, row) => {
          if(err) return reject(err);
          resolve(row);
        }
      );
    });
  },

  comparePassword: async (candidatePassword, hashedPassword) => {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  }
};
