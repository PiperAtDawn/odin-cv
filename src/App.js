import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import { GeneralProvider } from './context/GeneralContext';
import { EducationsProvider } from './context/EducationsContext';
import { JobsProvider } from './context/JobsContext';

function App() {
  return (
    <JobsProvider>
      <EducationsProvider>
        <GeneralProvider>
          <div className="App">
            <BrowserRouter>
              <Header />
              <Main />
            </BrowserRouter>
          </div>
        </GeneralProvider>
      </EducationsProvider>
    </JobsProvider>
  );
};

export default App;
