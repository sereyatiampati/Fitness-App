import React, { useState,useEffect } from "react";

function ContactUs() {
  const ContactForm = () => {
    // http request with method "GET"
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
      fetch("http://localhost:3001/messages")
        .then((response) => response.json())
        .then((data) => setMessages(data));
    }, []);

    const ContactForm = () => {
      // update the state of the the form
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      // this stores the validation errors for the form inputs
      const [errors, setErrors] = useState({});
      //   create a new object and then set the value of the input that was changed.
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
          // send the form data to the server after checking that the data is valid with http request method "POST"
          fetch("http://localhost:3001/messages", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      };
    };
  };
  //   form validation then submission
  const validateForm = (data) => {
    const errors = {};
    if (!data.name) {
      errors.name = "Name is required";
    }
    if (!data.email) {
      errors.email = "Email is required";
      // below checks if the email input matches the format of email address
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is not valid";
    }
    if (!data.message) {
      errors.message = "Message is required";
    }
    return errors;
  };
  //   form data & submitting
  let handleSubmit;
  let formData;
  let handleChange;
  let errors

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      {errors.message && <p className="error">{errors.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactUs;
