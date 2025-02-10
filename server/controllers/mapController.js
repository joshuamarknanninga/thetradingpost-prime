const { getAllPins } = require('../models/pinModel')

exports.getPins = async (req, res) => {
  try {
    const pins = await getAllPins()
    res.json({ success: true, pins })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
}
