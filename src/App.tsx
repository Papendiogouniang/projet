import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Elearning from './components/Elearning';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function RequireAuth({ user, children }: { user: { username: string; role: string } | null; children: JSX.Element }) {
  const location = useLocation();
  if (!user) {
    // Redirect to login page and save current location for redirect after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function App() {
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);

  const handleLogin = (data: { token: string; username: string; role: string }) => {
    localStorage.setItem('token', data.token);
    setUser({ username: data.username, role: data.role });
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="font-body">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/elearning"
                element={
                  <RequireAuth user={user}>
                    <Elearning />
                  </RequireAuth>
                }
              />
              <Route
                path="/login"
                element={user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
              />
              <Route
                path="/register"
                element={user ? <Navigate to="/dashboard" /> : <Register />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard username={user.username} role={user.role} /> : <Navigate to="/login" />}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
