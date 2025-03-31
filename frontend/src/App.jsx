import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Notices from './components/Notices';
import NoticeDetail from './components/NoticeDetail';
import './styles/App.css';

function App(){
  return (
    <ErrorBoundary>
      <Router>
        <div>
          <nav>
            <Link className='home' to="/">Home</Link>
            <Link className='notices' to="/notices">Notices</Link>
            <Link className='events' to="/events">Events</Link>
          </nav>
          <div className="main">
            <h1>AxeConnect</h1>
            <Routes>
              <Route path="/" exact
                element={
                  <>
                    <h2>Welcome to AxeConnect!</h2>
                    <p>Find the latest updates and events happening on campus.</p>
                  </>
                }
              />
              <Route path="/api/notices" element={<Notices />} />
              <Route path="/api/notices/:id" element={<NoticeDetail />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
    
  );
};

export default App;