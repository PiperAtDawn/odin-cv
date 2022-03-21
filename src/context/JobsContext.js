import React, { useState, createContext } from 'react';

export const JobsContext = createContext();

export const JobsProvider = ({ children }) => {

  const [jobs, setJobs] = useState([]);

  return(
    <JobsContext.Provider value={[jobs, setJobs]}>
      { children }
    </JobsContext.Provider>
  );
};