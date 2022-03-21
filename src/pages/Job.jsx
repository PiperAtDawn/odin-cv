import FormWrapper from "../components/FormWrapper";
import { useContext, useState } from "react";
import { JobsContext } from "../context/JobsContext";
import Item from "../components/Item";

const Job = () => {

  const [jobs, setJobs] = useContext(JobsContext);
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(prev => prev + 1);
  };

  const defaultState = {
    id: counter,
    employer: "",
    position: "",
    start: "",
    finish: ""
  };

  const [job, setJob] = useState(defaultState);

  const setJobParameter = (param, value) => {
    setJob(prev => {
      return { ...prev, [param]: value }
    });
  };

  const inputHandler = (e) => {
    const name = e.target.name;
    setJobParameter(name, e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setJobs(prev => {
      return [...prev, job];
    });
    incrementCounter();
    setJob(defaultState);
  };

  const handleDelete = (i) => {
    setJobs(prev =>
      prev.filter(
        (item, index) => index !== i
        )
      )
  }

  return (
    <div>
      <FormWrapper
        prevLink="/education"
        nextLink="/preview"
      >
        <h2>Employment</h2>
        <form
          onSubmit={submitHandler}
        >
          <label>
            Employer
            <input
              type="text"
              name="employer"
              required
              value={job.employer}
              onChange={inputHandler}
            />
          </label>
          <label>
            Position
            <input
              type="text"
              name="position"
              required
              value={job.position}
              onChange={inputHandler}
            />
          </label>
          <label>
            Start date
            <input
              type="date"
              name="start"
              required
              value={job.start}
              onChange={inputHandler}
            />
          </label>
          <label>
            Finish date
            <input
              type="date"
              name="finish"
              required
              value={job.finish}
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
            jobs.map((edu, i) =>
              <Item
                obj={edu}
                key={i}
                handleDelete={() => {handleDelete(i)}}
              />)
          }
        </div>
    </div>
  )
};

export default Job;
