import { useEffect, useRef, useState } from "react";
import PreviewCard from "./PreviewCard";

const initialFormData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  city: "",
  agreeToTerms: false,
};

const cities = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Peshawar"];

function RegistrationForm() {
  const [formData, setFormData] = useState(() => {
    try {
      const savedDraft = localStorage.getItem("registrationDraft");

      if (savedDraft) {
        return {
          ...initialFormData,
          ...JSON.parse(savedDraft),
          password: "",
          confirmPassword: "",
        };
      }
    } catch {
      localStorage.removeItem("registrationDraft");
    }

    return initialFormData;
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const fullNameRef = useRef(null);

  // Focus the name input when the page loads
  useEffect(() => {
    fullNameRef.current?.focus();
  }, []);

  // Save the draft, excluding passwords
  useEffect(() => {
    const { fullName, email, city, agreeToTerms } = formData;

    localStorage.setItem(
      "registrationDraft",
      JSON.stringify({ fullName, email, city, agreeToTerms })
    );
  }, [
    formData.fullName,
    formData.email,
    formData.city,
    formData.agreeToTerms,
  ]);

  function validateForm(data) {
    const newErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!data.password) {
      newErrors.password = "Password is required.";
    } else if (data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (data.confirmPassword !== data.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!data.city) {
      newErrors.city = "Please select a city.";
    }

    if (!data.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms.";
    }

    return newErrors;
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    const updatedData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    setFormData(updatedData);
    setErrors(validateForm(updatedData));
    setSuccessMessage("");
  }

  const currentErrors = validateForm(formData);
  const isFormValid = Object.keys(currentErrors).length === 0;

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setSuccessMessage("Registration submitted successfully!");

    setFormData({ ...initialFormData });
    setErrors({});

    localStorage.removeItem("registrationDraft");

    fullNameRef.current?.focus();
  }

  return (
    <div className="registration-layout">
      <section className="form-card">
        <h1>Create Account</h1>
        <p className="subtitle">Fill in your details to register.</p>

        {successMessage && (
          <p className="success-message" role="status">
            {successMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              ref={fullNameRef}
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              aria-invalid={Boolean(errors.fullName)}
            />
            {errors.fullName && (
              <p className="error-message">{errors.fullName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && (
              <p className="error-message">{errors.email}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              autoComplete="new-password"
              aria-invalid={Boolean(errors.password)}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              autoComplete="new-password"
              aria-invalid={Boolean(errors.confirmPassword)}
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              aria-invalid={Boolean(errors.city)}
            >
              <option value="">Select your city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="error-message">{errors.city}</p>
            )}
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />
              I agree to the terms and conditions
            </label>

            {errors.agreeToTerms && (
              <p className="error-message">{errors.agreeToTerms}</p>
            )}
          </div>

          <button type="submit" disabled={!isFormValid}>
            Register
          </button>
        </form>
      </section>

      <PreviewCard formData={formData} />
    </div>
  );
}

export default RegistrationForm;