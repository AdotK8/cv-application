import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import jobIcon from "./assets/briefcase.svg";

export function SectionExperienceInput({ experiences, setExperience }) {
  //initialise state variable to show and hide edit fields
  const [showExpId, setShowExpId] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExperience((prevExperiences) => {
      return prevExperiences.map((experience) => {
        if (experience.id === showExpId) {
          return {
            ...experience,
            [name]: value,
          };
        } else return experience;
      });
    });
  };

  const addExperience = (
    //handle adding of new experience entries to array
    companyName = "Example Experience",
    positionTitle = "Example Position",
    startDate = "Date",
    endDate = "Date",
    location = "Example Location",
    description = "Examlpe Description"
  ) => {
    const newExperience = {
      id: uuidv4(),
      companyName: companyName,
      positionTitle: positionTitle,
      startDate: startDate,
      endDate: endDate,
      location: location,
      description: description,
    };
    setExperience([...experiences, newExperience]);
  };

  const removeExperience = (id) => {
    //handle removing of experience entries
    const newExperiences = experiences.filter(
      (experience) => experience.id !== id
    );
    setExperience(newExperiences);
  };
  return (
    <>
      <div className="header">
        <img className="icon-sectional" src={jobIcon} />
        <h1>Experience Details</h1>
      </div>

      {experiences.map((experience) => (
        <div className="experience-input-entry" key={experience.id}>
          {showExpId === experience.id ? (
            //html for show
            <div>
              <div>
                <Input
                  label="Company Name:"
                  name="companyName"
                  className="input-field"
                  defaultValue={experience.companyName}
                  onChange={handleChange}
                  placeholder="Name of Company"
                />
              </div>
              <div>
                <Input
                  label="Position:"
                  name="positionTitle"
                  className="input-field"
                  defaultValue={experience.positionTitle}
                  onChange={handleChange}
                  placeholder="Position Title"
                />
              </div>

              <div className="dates">
                <div>
                  <Input
                    label="Start Date:"
                    name="startDate"
                    className="input-field"
                    defaultValue={experience.startDate}
                    onChange={handleChange}
                    placeholder="Start Date"
                  />
                </div>
                <div>
                  <Input
                    label="End Date:"
                    name="endDate"
                    className="input-field"
                    defaultValue={experience.endDate}
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
                  defaultValue={experience.location}
                  onChange={handleChange}
                  placeholder="Enter Location"
                />
              </div>
              <div>
                <Input
                  label="Description:"
                  name="description"
                  className="description-field"
                  defaultValue={experience.description}
                  onChange={handleChange}
                  isTextarea
                  placeholder="Enter Description"
                />
              </div>
              <div className="edit-and-delete-container">
                <button
                  className="save"
                  onClick={() => {
                    setShowExpId(null);
                  }}
                >
                  Close
                </button>
                <button
                  className="delete"
                  onClick={() => {
                    removeExperience(experience.id);
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
                <div>{experience.companyName}</div>
                <button
                  onClick={() => {
                    setShowExpId(experience.id);
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
          addExperience();
        }}
      >
        <span>+</span> Add Experience
      </button>
    </>
  );
}

export function SectionExperienceDisplay({ experiences }) {
  console.log(experiences);
  return (
    <>
      <h1 className="section-header">Experience</h1>

      {experiences.map((experience) => (
        <div className="experience-entry" key={experience.id}>
          <div className="leftHand-exp">
            <div>{`${experience.startDate} - ${experience.endDate}`}</div>
            <div>{experience.location}</div>
          </div>
          <div className="rightHand">
            <div className="school">{experience.companyName}</div>
            <div>{experience.positionTitle}</div>
            <div>{experience.description}</div>
          </div>
        </div>
      ))}
    </>
  );
}
