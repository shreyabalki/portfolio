import React, { useContext, useState } from "react";
import "./Contact.scss";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



export default function Contact() {
  const { isDark } = useContext(StyleContext);
  const [showThankYou, setShowThankYou] = useState(false);
  const [name, setName] = useState("");
  const [emailField, setEmailField] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("No file chosen");
  const [isActive, setIsActive] = useState(false);

  const maxChars = 500;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">

          {/* LEFT - Form Section */}
          <div className="contact-form-wrapper">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className={isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"}>
              {contactInfo.subtitle}
            </p>

            <form
              className="contact-form"
              action="https://formspree.io/f/movwprwl"
              method="POST"
              encType="multipart/form-data"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const data = new FormData(form);
                fetch(form.action, {
                  method: form.method,
                  body: data,
                  headers: { Accept: "application/json" },
                }).then(() => {
                  form.reset();
                  setShowThankYou(true);
                  setName("");
                  setEmailField("");
                  setMessage("");
                  setFileName("No file chosen");
                  setTimeout(() => setShowThankYou(false), 4000);
                });
              }}
            >
              {/* Honeypot */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />

   {/* Name */}
<div className="form-field">
  <label htmlFor="name">Your Name</label>
  <div className="input-wrapper">
    <input
      type="text"
      id="name"
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      placeholder="Enter your full name"
    />
    <span className="icon"><i className="fas fa-user"></i></span>
  </div>
</div>

{/* Email */}
<div className="form-field">
  <label htmlFor="email">Your Email</label>
  <div className="input-wrapper">
    <input
      type="email"
      id="email"
      name="email"
      value={emailField}
      onChange={(e) => setEmailField(e.target.value)}
      required
      placeholder="example@email.com"
    />
    <span className="icon"><i className="fas fa-envelope"></i></span>
  </div>
</div>

{/* Phone Input with Country Code */}
<div className="form-field">
  <label htmlFor="phone">Phone Number (Optional)</label>
  <div className="phone-input-wrapper">
    <PhoneInput
      country="us"
      enableSearch
      placeholder="+1 234 567 8900"
      inputProps={{
        name: "phone",
        id: "phone",
        autoComplete: "tel",
      }}
      inputClass="phone-input-custom"
      containerClass="phone-container"
      buttonClass="phone-dropdown-button"
      dropdownClass="phone-dropdown-list"
      separateDialCode={false} 
    />
  </div>
</div>




              {/* Subject */}
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <div className="input-wrapper">
                  <select name="subject" id="subject" required defaultValue="">
                    <option value="" disabled>Select Subject</option>
                    <option value="recruiter-contact">I'm a recruiter interested in discussing opportunities</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="project">Project Inquiry</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="freelance">Freelance Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="form-field">
                <label>Your Message</label>
                <textarea
                  name="message"
                  rows="6"
                  maxLength={maxChars}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder=" "
                />
              </div>

              {/* Character Count */}
              <div className="char-counter">
                {message.length} / {maxChars} characters
              </div>

              {/* Preferred Contact Method */}
              <div className="form-field">
                <label>Preferred Contact Method</label>
                <div className="radio-group">
                  <label>
                    <input type="radio" name="preferred_contact" value="email" defaultChecked /> Email
                  </label>
                  <label>
                    <input type="radio" name="preferred_contact" value="phone" /> Phone
                  </label>
                </div>
              </div>

              {/* File Upload */}
              <div className="form-field file-upload">
                <label htmlFor="attachment">Attach a File (optional)</label>
                <label
                  htmlFor="attachment"
                  className={`file-wrapper ${isActive ? "active" : ""}`}
                  onMouseDown={() => setIsActive(true)}
                  onMouseUp={() => setIsActive(false)}
                  onMouseLeave={() => setIsActive(false)}
                >
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    onChange={(e) =>
                      setFileName(e.target.files[0]?.name || "No file chosen")
                    }
                  />
                  <div className="button-fake">Choose File</div>
                  <span className="file-name">{fileName}</span>
                </label>
              </div>

              {/* Submit */}
              <button type="submit">Send Message</button>
            </form>

            {/* Thank You Modal */}
            {showThankYou && (
              <div className="contact-thankyou-overlay">
                <div className="contact-thankyou-box">
                  <i className="fas fa-check-square"></i>
                  Thank you! I’ll get back to you soon.
                </div>
              </div>
            )}
          </div>

          {/* RIGHT - Lottie or Image */}
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
