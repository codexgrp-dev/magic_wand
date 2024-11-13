import React, { useState, useRef } from "react";


function AllowListingForm() {
  const [formData, setFormData] = useState({
    highLevelSummary: "",
    reporter: "",
    description: "",
    ticketType: "",
    domains: "",
    e1ReleaseDate: "",
    e2ReleaseDate: "",
    e3ReleaseDate: "",
    allowlist: [],
    jiraTicket: "",
    infosecEmail: "",
  });
  const [fileName, setFileName] = useState("");

  // Create a ref for the file input
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        allowlist: checked
          ? [...prevData.allowlist, value]
          : prevData.allowlist.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleFileUpload = (e) => {
    setFileName(e.target.files[0] ? e.target.files[0].name : "");
  };

  // Function to handle clicking on the file upload field
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData===>", formData);
  };

  return (
    <div className="app-background">
      <div className="form-container">
        <h2>Allow-listing Request Register</h2>
        
        <div className="form-group">
          <label>High Level Summary *</label>
          <input
            type="text"
            name="highLevelSummary"
            value={formData.highLevelSummary}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Reporter *</label>
          <input
            type="text"
            name="reporter"
            value={formData.reporter}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Ticket Type *</label>
          <select
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="Bug">Bug</option>
            <option value="Feature Request">Feature Request</option>
          </select>
        </div>

        <div className="form-group">
          <label>Domains *</label>
          <textarea
            name="domains"
            placeholder="Add the URLs for your application. Include all required testing and production environments."
            value={formData.domains}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>E1 Release Date *</label>
          <input
            type="date"
            name="e1ReleaseDate"
            value={formData.e1ReleaseDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>E2 Release Date</label>
          <input
            type="date"
            name="e2ReleaseDate"
            value={formData.e2ReleaseDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>E3 Release Date *</label>
          <input
            type="date"
            name="e3ReleaseDate"
            value={formData.e3ReleaseDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Allowlist *</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="allowlist"
                value="One-data"
                checked={formData.allowlist.includes("One-data")}
                onChange={handleChange}
              />
              One-data
            </label>
            <label>
              <input
                type="checkbox"
                name="allowlist"
                value="UCM API"
                checked={formData.allowlist.includes("UCM API")}
                onChange={handleChange}
              />
              UCM API
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Akamai Jira Ticket *</label>
          <input
            type="text"
            name="jiraTicket"
            value={formData.jiraTicket}
            onChange={handleChange}
          />
        </div>

        {/* Custom File Upload Field */}
        <div className="form-group">
          <label>Infosec Approval Email *</label>
          <div className="file-upload" onClick={triggerFileInput}>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
            <span>{fileName || "Choose a file..."}</span>
          </div>
        </div>

        <div className="form-buttons">
          <button className="save-button" onClick={handleSubmit}>
            Save
          </button>
          <button className="close-button">Close</button>
        </div>
      </div>
    </div>
  );
}

export default AllowListingForm;
