import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AuthService from './components/AuthService';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import LanguageSelector from './components/LanguageSelector'; // Importar LanguageSelector

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isAuthenticated());

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    AuthService.logout();
    setIsLoggedIn(false);
  };

  return (
    <Container>
      {/* Renderizar LanguageSelector para permitir cambiar de idioma */}
      <LanguageSelector />
      
      {isLoggedIn ? (
        <div>
          <Home />
          <Logout onLogout={handleLogout} />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Container>
  );
}

export default App;
