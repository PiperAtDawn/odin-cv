import { useNavigate } from 'react-router-dom';

const FormWrapper = (
  {
    prevName = 'Previous',
    prevLink = '/',
    prevActive = true,
    nextName = 'Next',
    nextLink,
    children,
  }
  ) => {

  const navigate = useNavigate();

  return (
    <div className='form-wrapper'>
      { children }
      <div className='nav-button-wrapper'>
        <button
          type='button'
          disabled={!prevActive}
          onClick={() => navigate(prevLink) }
        >
          { prevName }
        </button>
        <button
          type='button'
          onClick={() => navigate(nextLink) }
        >
          { nextName }
        </button>
      </div>
    </div>
  )
}

export default FormWrapper;