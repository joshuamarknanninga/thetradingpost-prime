const { addFormEntry } = require('../models/formModel')
const { addPin } = require('../models/pinModel')

// Note: In production, add authentication middleware as needed.
exports.submitForm = async (req, res) => {
  const { name, email, location, productType, price, exchangeOption } = req.body
  try {
    const entry = await addFormEntry(name, email, location, productType, price, exchangeOption)
    
    // In a production app, convert the location (address) to lat/lng using a geocoding API.
    // Here, we use dummy coordinates.
    const [lat, lng] = [51.505, -0.09]
    await addPin(entry.id, name, lat, lng, productType, price)
    
    res.json({ success: true, entry })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
}
