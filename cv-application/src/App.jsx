import "./styles/App.scss";
import {
  SectionPersonalInput,
  SectionPersonalDisplay,
} from "./SectionPersonal";
import { useState } from "react";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "Joe Bloggs",
    email: "example@example.com",
    phoneNumber: "123-456-7890",
    address: "London, UK",
  });

  return (
    <div className="main">
      <EditSide
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <CvSide personalDetails={personalDetails} />
    </div>
  );
}

function EditSide({ personalDetails, setPersonalDetails }) {
  return (
    <section className="edit-side">
      <div className="personal-details">
        <SectionPersonalInput
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
      </div>
      <div className="education"></div>
      <div className="experience"></div>
    </section>
  );
}

function CvSide({ personalDetails }) {
  return (
    <section className="cv-side">
      <div className="cv-page">
        <div className="cv-top">
          <SectionPersonalDisplay personalDetails={personalDetails} />
        </div>
        <div className="cv-body"></div>
      </div>
    </section>
  );
}

export default App;
