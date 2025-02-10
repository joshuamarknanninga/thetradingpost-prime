// src/components/ContactFormModal.jsx

import React, { useState } from "react";
import Modal from "react-modal";

// Set the app element for accessibility (usually the root element)
Modal.setAppElement("#root");

const ContactFormModal = () => {
  // Modal open/close state
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    productType: "eggs", // Options: eggs, milk, or other
    price: "",
    exchangeOption: "cash", // Options: cash, barter
  });

  // Open the modal
  const openModal = () => setModalIsOpen(true);
  // Close the modal
  const closeModal = () => setModalIsOpen(false);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/form/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        alert("Form submitted successfully!");
        closeModal();
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={openModal} className="open-modal-btn">
        Open Contact Form
      </button>
      {/* The Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Form Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="close-modal-btn">
          X
        </button>
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Product Type:
              <select
                name="productType"
                value={formData.productType}
                onChange={handleChange}
              >
                <option value="eggs">Eggs</option>
                <option value="milk">Milk</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Price or Exchange Rate:
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Exchange Option:
              <select
                name="exchangeOption"
                value={formData.exchangeOption}
                onChange={handleChange}
              >
                <option value="cash">Cash</option>
                <option value="barter">Barter</option>
              </select>
            </label>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ContactFormModal;
