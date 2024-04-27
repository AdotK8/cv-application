import emailIcon from "./assets/email.svg";
import mapIcon from "./assets/map-marker.svg";
import phoneIcon from "./assets/phone.svg";

export function SectionPersonalInput({ personalDetails, setPersonalDetails }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>Personal Details</h1>
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
    </>
  );
}

function Input({
  label,
  type = "text",
  name,
  className,
  defaultValue,
  onChange,
  placeholder,
}) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={className}
        defaultValue={defaultValue}
        onChange={onChange}
      />
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
