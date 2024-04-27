import { useState } from "react";

export function SectionEducationInput({ educations, setEducation }) {
  const [showId, setShowId] = useState(null);
  console.log(showId);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducation((prevEducations) => ({
      ...prevEducations,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Education Details</h1>

      {educations.map((education) => (
        <div key={education.id}>
          {showId === education.id ? (
            //html for show
            <div>
              <Input
                label="School Name:"
                name="schoolName"
                className="input-field"
                defaultValue={education.schoolName}
                onChange={handleChange}
                placeholder="First and Last name"
              />
              <div>Education details...</div>{" "}
              <button
                onClick={() => {
                  setShowId(null);
                }}
              >
                v
              </button>
            </div>
          ) : (
            //html for no show
            <div className="line">
              <div>{education.schoolName}</div>
              <button
                onClick={() => {
                  setShowId(education.id); // Show when the button is clicked
                }}
              >
                ^
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
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

export function SectionEducationDisplay({ educations }) {
  return (
    <div>
      {educations.map((education) => (
        <div key={education.id}>{education.schoolName}</div>
      ))}
    </div>
  );
}
