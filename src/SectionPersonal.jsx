import emailIcon from "./assets/email.svg";
import mapIcon from "./assets/map-marker.svg";
import userIcon from "./assets/account.svg";
import jobIcon from "./assets/briefcase.svg";

import phoneIcon from "./assets/phone.svg";
import { useState } from "react";
import Input from "./Input";

export function SectionPersonalInput({ personalDetails, setPersonalDetails }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="header">
        <img className="icon-sectional" src={userIcon} />
        <h1>Personal Details</h1>
      </div>

      {!showDetails && (
        <button className="bottom-button" onClick={handleToggle}>
          Expand
        </button>
      )}
      {showDetails && (
        <div>
          <div>
            <Input
              label="Full Name:"
              name="fullName"
              className="input-field"
              defaultValue={personalDetails.fullName}
              onChange={handleChange}
              placeholder="First and Last name"
            />
          </div>
          <div>
            <Input
              label="Email:"
              type="text"
              name="email"
              className="input-field"
              defaultValue={personalDetails.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div>
            <Input
              label="Phone Number:"
              type="tel"
              name="phoneNumber"
              className="input-field"
              defaultValue={personalDetails.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <Input
              label="Address:"
              name="address"
              className="input-field"
              defaultValue={personalDetails.address}
              onChange={handleChange}
              placeholder="City, Country"
            />
          </div>
          <button className="bottom-button close" onClick={handleToggle}>
            Close
          </button>{" "}
          {/* Button to toggle back */}
        </div>
      )}
    </>
  );
}

export function SectionPersonalDisplay({ personalDetails }) {
  return (
    <>
      <div className="name-display">{personalDetails.fullName}</div>
      <div className="contact-info-display">
        <div>
          <img className="icon" src={emailIcon} />
          <p>{personalDetails.email}</p>
        </div>
        <div>
          <img className="icon" src={phoneIcon} />
          <p>{personalDetails.phoneNumber}</p>
        </div>
        <div>
          <img className="icon" src={mapIcon} />
          <p>{personalDetails.address}</p>
        </div>
      </div>
    </>
  );
}
