// src/components/Signup.jsx
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const Signup = () => {
  // State for user signup fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    // Add any additional fields as needed
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  // Update form state as the user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!stripe || !elements) {
      setError("Stripe has not loaded yet");
      return;
    }

    setLoading(true);
    setError("");

    // Create a payment method using the card details from Stripe
    const cardElement = elements.getElement(CardElement);
    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (stripeError) {
      setError(stripeError.message);
      setLoading(false);
      return;
    }

    // Send the signup data along with the Stripe paymentMethod ID to your server
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          paymentMethodId: paymentMethod.id, // Send the payment method for processing
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Signup successful!");
        // You might redirect the user or update your UI here
      } else {
        setError(data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred during signup.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* User Details */}
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Payment Information */}
        <div className="mb-4">
          <label className="block mb-1">Payment Information</label>
          <div className="p-2 border border-gray-300 rounded">
            <CardElement options={{ hidePostalCode: true }} />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !stripe}
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
        >
          {loading ? "Signing up..." : "Sign Up & Pay $10/month"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
