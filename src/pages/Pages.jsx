import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import General from './General';
import Education from './Education';
import Job from './Job';
import Preview from './Preview';

function Pages() {
  return (
    <Routes>
      <Route path="/odin-cv" element={<Home />} />
      <Route path="/general" element={<General />} />
      <Route path="/education" element={<Education />} />
      <Route path="/job" element={<Job/>} />
      <Route path="/preview" element={<Preview/>} />
    </Routes>
  )
};

export default Pages