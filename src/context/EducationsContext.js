import React, { useState, createContext } from 'react';

export const EducationsContext = createContext();

export const EducationsProvider = ({ children }) => {

  const [educations, setEducations] = useState([]);

  return(
    <EducationsContext.Provider value={[educations, setEducations]}>
      { children }
    </EducationsContext.Provider>
  )
};