import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import FormWrapper from '../components/FormWrapper';

function General() {

  const [generalData, generalDataDispatch] = useContext(GeneralContext);

  const inputHandler = (e) => {
    generalDataDispatch({type: e.target.name, payload: e.target.value})
  }

  return (
    <FormWrapper
      prevActive={false}
      nextLink='/education'
    >
      <h2>General information</h2>
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            value={generalData.name}
            onChange={inputHandler}
          />
        </label>
        <label>
          email
          <input
            type="email"
            name="email"
            required
            value={generalData.email}
            onChange={inputHandler}
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            required
            value={generalData.phone}
            onChange={inputHandler}
          />
        </label>
      </form>
    </FormWrapper>
  )
};

export default General;