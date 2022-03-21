import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home">
      <p>We will help you generate a CV!</p>
      <button
        type="button"
        onClick={() => navigate('/general')}
      >
        Let's get to it!
      </button>
    </div>
  )
};

export default Home