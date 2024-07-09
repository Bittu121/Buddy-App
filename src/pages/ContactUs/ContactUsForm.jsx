import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../ContactUs/ContactUs.module.css";
const ContactUsForm = () => {
  const countryCodes = [
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "India", code: "+91" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
    { name: "Germany", code: "+49" },
    { name: "France", code: "+33" },
    { name: "Italy", code: "+39" },
    { name: "Spain", code: "+34" },
    { name: "Brazil", code: "+55" },
    { name: "Mexico", code: "+52" },
    { name: "Russia", code: "+7" },
    { name: "China", code: "+86" },
    { name: "Japan", code: "+81" },
    { name: "South Korea", code: "+82" },
    { name: "South Africa", code: "+27" },
    { name: "Nigeria", code: "+234" },
    { name: "Egypt", code: "+20" },
    { name: "Saudi Arabia", code: "+966" },
    { name: "United Arab Emirates", code: "+971" },
    { name: "Argentina", code: "+54" },
    { name: "Chile", code: "+56" },
    { name: "Colombia", code: "+57" },
    { name: "Peru", code: "+51" },
    { name: "Turkey", code: "+90" },
    { name: "Indonesia", code: "+62" },
    { name: "Malaysia", code: "+60" },
    { name: "Singapore", code: "+65" },
    { name: "Thailand", code: "+66" },
    { name: "Vietnam", code: "+84" }
  ];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    countryCode: "+1",
    message: "",
    termsAndPolicy: false
  });
  useEffect(() => {
    const defaultCountryCode = countryCodes.find(country => country.code === formData.countryCode);
    if (defaultCountryCode) {
      setFormData(prevState => ({
        ...prevState,
        phoneNumber: ""
      }));
    }
  }, [formData.countryCode]);
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    if (name === "countryCode") {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: newValue
      }));
    } else if (name === "phoneNumber") {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    } else {
      if (name === "firstName" || name === "lastName") {
        const regex = /^[a-zA-Z\s]*$/;
        if (regex.test(value)) {
          setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
          }));
        }
      } else {
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: newValue
        }));
      }
    }
  };
  const validateForm = () => {
    const { firstName, lastName, email, phoneNumber, message, termsAndPolicy } = formData;
    if (!firstName || !lastName || !email || !phoneNumber || !message || !termsAndPolicy) {
      toast.error("Please fill in all fields and agree to the privacy policy.", {
        position: "top-center"
      });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-center"
      });
      return false;
    }
    return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    const phoneNumberWithCountryCode = `${formData.countryCode}${formData.phoneNumber}`;
    try {
      const response = await fetch("https://buddy-api.applore.in/api/app/website/queryForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          phoneNumber: phoneNumberWithCountryCode
        })
      });
      if (response.ok) {
        const responseData = await response.json();
        toast.success(responseData.message, {
          position: "top-center"
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          countryCode: "+1",
          message: "",
          termsAndPolicy: false
        });
      } else {
        const responseData = await response.json();
        toast.error(responseData.message || "Failed to submit form.", {
          position: "top-center"
        });
      }
    } catch (error) {
      toast.error("Error: " + error.message, {
        position: "top-center"
      });
    }
  };
  return (
    <>
      <div className={styles.contactFormContainer}>
        <div className={styles.contactForm}>
          <div className={styles.formHeader}>
            <h3>Get in touch</h3>
            <p>Our friendly team would love to hear from you.</p>
          </div>
          <div className={styles.formContent}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formBody}>
                <div className={styles.formFields}>
                  <div className={styles.firstNameInput}>
                    <label htmlFor="firstName">First name</label>
                    <div className={styles.firstName}>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className={styles.lastNameInput}>
                    <label htmlFor="lastName">Last name</label>
                    <div className={styles.lastName}>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.emailInput}>
                  <label htmlFor="email">Email</label>
                  <div className={styles.email}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className={styles.phoneInput}>
                  <label htmlFor="phoneNumber">Phone number</label>
                  <div className={styles.phoneNumberInput}>
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                    >
                      {countryCodes.map((country, index) => (
                        <option key={index} value={country.code}>
                          {country.name} ({country.code})
                        </option>
                      ))}
                    </select>
                    <div className={styles.phoneNumberInputField}>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.messageInput}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    cols="50"
                  />
                </div>
                <div className={styles.privacyAgreement}>
                  <input
                    type="checkbox"
                    id="termsAndPolicy"
                    name="termsAndPolicy"
                    checked={formData.termsAndPolicy}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="termsAndPolicy">
                    You agree to our{" "}
                    <NavLink
                      to="/TermsAndConditions"
                      style={{ color: "rgba(102, 112, 133, 1)" }}
                    >
                      privacy policy.
                    </NavLink>
                  </label>
                </div>
              </div>
              <button type="submit">Send message</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default ContactUsForm;