import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ServicePage from './pages/ServicePage/ServicePage';
import IntroducePage from './pages/IntroducePage/IntroducePage';
import ContactPage from './pages/ContactPage/ContactPage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route component={HomePage} path={'/'} exact/>
      <Route component={ServicePage} path={'/service'} />
      <Route component={IntroducePage} path={'/introduce'} />
      <Route component={ContactPage} path={'/contact'} />
    </div>
  );
}

export default App;
