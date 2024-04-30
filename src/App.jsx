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
import {
  SectionExperienceInput,
  SectionExperienceDisplay,
} from "./SectionExperience";

import { useState } from "react";

function App() {
  //initise perosnal details array
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "Joe Bloggs",
    email: "example@example.com",
    phoneNumber: "123-456-7890",
    address: "London, UK",
  });

  //initialise educations arrary
  const [educations, setEducation] = useState([
    {
      id: uuidv4(),
      schoolName: "University College London",
      degree: "Masters in Electronic and Electrical Engineering",
      startDate: "2014",
      endDate: "2018",
      location: "London, UK",
    },
    {
      id: uuidv4(),
      schoolName: "School of Arts",
      degree: "Bachelors in History",
      startDate: "2018",
      endDate: "2020",
      location: "Berlin, Germany",
    },
  ]);

  //initialise Experience arrary

  const [experiences, setExperience] = useState([
    {
      id: uuidv4(),
      companyName: "Umbrella Inc",
      positionTitle: "UX & UI Designer",
      startDate: "2021",
      endDate: "2023",
      location: "New York City, US",
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    },
    {
      id: uuidv4(),
      companyName: "Black Mesa Labs",
      positionTitle: "UX & UI Designer",
      startDate: "2021",
      endDate: "2023",
      location: "New York City, US",
      description:
        "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
    },
  ]);

  //return App layout
  return (
    <div className="main">
      <EditSide
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        educations={educations}
        setEducation={setEducation}
        experiences={experiences}
        setExperience={setExperience}
      />
      <CvSide
        personalDetails={personalDetails}
        educations={educations}
        experiences={experiences}
      />
    </div>
  );
}

//return edit side component
function EditSide({
  personalDetails,
  setPersonalDetails,
  educations,
  setEducation,
  experiences,
  setExperience,
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
        />
      </div>
      <div className="experience-input">
        <SectionExperienceInput
          experiences={experiences}
          setExperience={setExperience}
        />
      </div>
    </section>
  );
}

//return cv side component
function CvSide({ personalDetails, educations, experiences }) {
  return (
    <section className="cv-side">
      <div className="cv-page">
        <div className="cv-top">
          <SectionPersonalDisplay personalDetails={personalDetails} />
        </div>
        <div className="cv-body">
          <SectionEducationDisplay educations={educations} />
          <SectionExperienceDisplay experiences={experiences} />
        </div>
      </div>
    </section>
  );
}

export default App;
