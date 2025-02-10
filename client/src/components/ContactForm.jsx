import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

// Replace with your Stripe test publishable key
const stripePromise = loadStripe('your-publishable-key')

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    productType: 'eggs', // eggs, milk, or others
    price: '',
    exchangeOption: 'cash' // or 'barter'
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Post the form data to your server
    const res = await fetch('http://localhost:5000/api/form/submit', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })
    const data = await res.json()
    if(data.success) {
      alert('Form submitted successfully!')
    } else {
      alert('Submission failed.')
    }
  }

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>Location (address or coordinates):
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>
        <br />
        <label>Product Type:
          <select name="productType" value={formData.productType} onChange={handleChange}>
            <option value="eggs">Eggs</option>
            <option value="milk">Milk</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>Price or Exchange Rate:
          <input type="text" name="price" value={formData.price} onChange={handleChange} required />
        </label>
        <br />
        <label>Exchange Option:
          <select name="exchangeOption" value={formData.exchangeOption} onChange={handleChange}>
            <option value="cash">Cash</option>
            <option value="barter">Barter</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* For future integration: Wrap your payment elements in <Elements stripe={stripePromise}> ... </Elements> */}
    </div>
  )
}

export default ContactForm
