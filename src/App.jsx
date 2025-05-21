import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'animate.css';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { About_us } from './pages/About_us';
import { Service } from './pages/Service';
import { Projects } from './pages/Projects';
import { Contact_us } from './pages/Contact_us';
import Error from './pages/Error';
import NoInternet from './components/NoInternet';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div>
      {isOnline ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="About_us" element={<About_us />} />
            <Route path="Services" element={<Service />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Contact_us" element={<Contact_us />} />
          </Route>
        </Routes>
      ) : (
        <NoInternet />
      )}
    </div>
  );
}

export default App;