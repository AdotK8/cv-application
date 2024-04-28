import "./styles/App.scss";
import { v4 as uuidv4 } from "uuid";
import {
  SectionPersonalInput,
  SectionPersonalDisplay,
} from "./SectionPersonal";
import {
  SectionEducationInput,
  SectionEducationDisplay,
} from "./SectionEducation";

import { useState } from "react";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "Joe Bloggs",
    email: "example@example.com",
    phoneNumber: "123-456-7890",
    address: "London, UK",
  });

  const [educations, setEducation] = useState([
    {
      id: uuidv4(),
      schoolName: "University College London",
      degree: "Masters in Electronic and Electrical Engineering",
      startDate: "2014",
      endDate: "2018",
      location: "London, UK",
    },
  ]);

  const addEducation = (schoolName) => {
    const newEducation = { id: uuidv4(), schoolName: schoolName };
    setEducation([...educations, newEducation]);
  };

  return (
    <div className="main">
      <EditSide
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        educations={educations}
        setEducation={setEducation}
        addEducation={addEducation}
      />
      <CvSide personalDetails={personalDetails} educations={educations} />
    </div>
  );
}

function EditSide({
  personalDetails,
  setPersonalDetails,
  educations,
  setEducation,
  addEducation,
}) {
  return (
    <section className="edit-side">
      <div className="personal-details">
        <SectionPersonalInput
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
      </div>
      <div className="education-input">
        <SectionEducationInput
          educations={educations}
          setEducation={setEducation}
          addEducation={addEducation}
        />
      </div>
      <div className="experience"></div>
    </section>
  );
}

function CvSide({ personalDetails, educations }) {
  return (
    <section className="cv-side">
      <div className="cv-page">
        <div className="cv-top">
          <SectionPersonalDisplay personalDetails={personalDetails} />
        </div>
        <div className="cv-body">
          <SectionEducationDisplay educations={educations} />
        </div>
      </div>
    </section>
  );
}

export default App;