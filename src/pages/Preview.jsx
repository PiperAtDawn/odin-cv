import { EducationsContext } from "../context/EducationsContext";
import { JobsContext } from "../context/JobsContext";
import { GeneralContext } from "../context/GeneralContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Item from "../components/Item";

const Preview = () => {
  const [educations,] = useContext(EducationsContext);
  const [jobs,] = useContext(JobsContext);
  const[generalData,] = useContext(GeneralContext);
  const navigate = useNavigate();
  
  return (
    <div className="preview-container">
      <h2>General</h2>
      <Item obj={generalData} />
      <h2>Education</h2>
      <div className="preview-array">
        {
          educations.length > 0
          ? educations.map((edu, i) => (
            <Item
              obj={edu}
              key={i}
            />
          ))
          : <p className="red">Please enter at least one education</p>
        }
      </div>
      <h2>Employment</h2>
      <div className="preview-array">
        {
          jobs.length > 0
          ? jobs.map((job, i) => (
            <Item
              obj={job}
              key={i}
            />
          ))
          : <p className="red">Please enter at least one job</p>
        }
      </div>
      <button
        type="button"
        onClick={() => {navigate("/job")}}
      >
        Back
      </button>
    </div>
  )
};

export default Preview;