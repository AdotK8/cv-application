import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import schoolIcon from "./assets/school.svg";

export function SectionEducationInput({ educations, setEducation }) {
  //initialise state variable to show and hide edit detais
  const [showEducationId, setShowEducationId] = useState(null);

  //handle any change to variables and update educations array
  const handleChange = (event) => {
    const { name, value } = event.target;

    setEducation((prevEducations) => {
      return prevEducations.map((education) => {
        if (education.id === showEducationId) {
          return {
            ...education,
            [name]: value,
          };
        } else return education;
      });
    });
  };

  //handle adding of new education entries to array
  const addEducation = (
    schoolName = "London City University",
    degree = "Bachelors in Mathematics",
    startDate = "2018",
    endDate = "2021",
    location = "London, UK"
  ) => {
    const newEducation = {
      id: uuidv4(),
      schoolName: schoolName,
      degree: degree,
      startDate: startDate,
      endDate: endDate,
      location: location,
    };
    setEducation([...educations, newEducation]);
  };

  //handle removing of education entries
  const removeEducation = (id) => {
    const newEducations = educations.filter((education) => education.id !== id);
    setEducation(newEducations);
  };

  return (
    <>
      <div className="header">
        <img className="icon-sectional" src={schoolIcon} />
        <h1>Education Details</h1>
      </div>

      {educations.map((education) => (
        <div className="education-input-entry" key={education.id}>
          {showEducationId === education.id ? (
            //html for show
            <div>
              <div>
                <Input
                  label="School:"
                  name="schoolName"
                  className="input-field"
                  defaultValue={education.schoolName}
                  onChange={handleChange}
                  placeholder="Name of School"
                />
              </div>
              <div>
                <Input
                  label="Degree:"
                  name="degree"
                  className="input-field"
                  defaultValue={education.degree}
                  onChange={handleChange}
                  placeholder="Name of Degree"
                />
              </div>
              <div className="dates">
                <div>
                  <Input
                    label="Start Date:"
                    name="startDate"
                    className="input-field"
                    defaultValue={education.startDate}
                    onChange={handleChange}
                    placeholder="Start Date"
                  />
                </div>
                <div>
                  <Input
                    label="End Date:"
                    name="endDate"
                    className="input-field"
                    defaultValue={education.endDate}
                    onChange={handleChange}
                    placeholder="End Date"
                  />
                </div>
              </div>
              <div>
                <Input
                  label="Location:"
                  name="location"
                  className="input-field"
                  defaultValue={education.location}
                  onChange={handleChange}
                  placeholder="Enter Location"
                />
              </div>

              <div className="edit-and-delete-container">
                <button
                  className="save"
                  onClick={() => {
                    setShowEducationId(null);
                  }}
                >
                  Save
                </button>
                <button
                  className="delete"
                  onClick={() => {
                    removeEducation(education.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            //html for no show
            <>
              <div className="line">
                <div>{education.schoolName}</div>
                <button
                  onClick={() => {
                    setShowEducationId(education.id); // Show when the button is clicked
                  }}
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      ))}
      <button
        className="bottom-button"
        onClick={() => {
          addEducation();
        }}
      >
        <span>+</span> Add Education
      </button>
    </>
  );
}

export function SectionEducationDisplay({ educations }) {
  return (
    <>
      <h1 className="section-header">Education</h1>

      {educations.map((education) => (
        <div className="education-entry" key={education.id}>
          <div className="leftHand">
            <div>{`${education.startDate} - ${education.endDate}`}</div>
            <div>{education.location}</div>
          </div>
          <div className="rightHand">
            <div className="school">{education.schoolName}</div>
            <div>{education.degree}</div>
          </div>
        </div>
      ))}
    </>
  );
}
