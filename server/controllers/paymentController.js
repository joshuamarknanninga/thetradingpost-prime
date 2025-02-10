const stripe = require('stripe')('your_stripe_secret_key') // Replace with your Stripe secret key

exports.createCheckoutSession = async (req, res) => {
  const { priceId } = req.body
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        }
      ],
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel'
    })
    res.json({ success: true, sessionId: session.id })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
}
