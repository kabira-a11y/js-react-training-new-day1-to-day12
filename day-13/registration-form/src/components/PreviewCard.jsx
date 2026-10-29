function PreviewCard({ formData }) {
  return (
    <div className="preview-card">
      <h2>Live Preview</h2>

      <div className="preview-avatar">
        {formData.fullName.trim()
          ? formData.fullName.trim().charAt(0).toUpperCase()
          : "?"}
      </div>

      <h3>{formData.fullName || "Your Name"}</h3>

      <p>{formData.email || "your.email@example.com"}</p>

      <p>
        <strong>City:</strong> {formData.city || "Not selected"}
      </p>

      <p>
        <strong>Terms accepted:</strong>{" "}
        {formData.agreeToTerms ? "Yes" : "No"}
      </p>

      <p className="privacy-note">
        Your password is never displayed in this preview.
      </p>
    </div>
  );
}

export default PreviewCard;