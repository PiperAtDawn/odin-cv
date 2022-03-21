import FormWrapper from "../components/FormWrapper";
import { useContext, useState } from "react";
import { EducationsContext } from "../context/EducationsContext";
import Item from "../components/Item";

const Education = () => {

  const [educations, setEducations] = useContext(EducationsContext);
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(prev => prev + 1);
  };
  const defaultState = {
    id: counter,
    school: "",
    course: "",
    start: "",
    finish: ""
  };
  const [education, setEducation] = useState(defaultState);

  const setEducationParameter = (param, value) => {
    setEducation(prev => {
      return { ...prev, [param]: value }
    });
  };

  const inputHandler = (e) => {
    const name = e.target.name;
    setEducationParameter(name, e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setEducations(prev => {
      return [...prev, education];
    });
    incrementCounter();
    setEducation(defaultState);
  };

  const handleDelete = (i) => {
    setEducations(prev =>
      prev.filter(
        (item, index) => index !== i
        )
      )
  }

  return (
    <div>
      <FormWrapper
        prevLink="/general"
        nextLink="/job"
      >
        <h2>Education</h2>
        <form
          onSubmit={submitHandler}
        >
          <label>
            School
            <input
              type="text"
              name="school"
              required
              value={education.school}
              onChange={inputHandler}
            />
          </label>
          <label>
            Course
            <input
              type="text"
              name="course"
              required
              value={education.course}
              onChange={inputHandler}
            />
          </label>
          <label>
            Start date
            <input
              type="date"
              name="start"
              required
              value={education.start}
              onChange={inputHandler}
            />
          </label>
          <label>
            Finish date
            <input
              type="date"
              name="finish"
              required
              value={education.finish}
              onChange={inputHandler}
            />
          </label>
          <button
            type="submit"
          >
            Submit
          </button>
        </form>
      </FormWrapper>
        <div className="preview-array">
          {
            educations.map((edu, i) => (
              <Item
                obj={edu}
                key={i}
                handleDelete={() => handleDelete(i)}
              />
            ))
          }
        </div>
    </div>
  )
};

export default Education;
