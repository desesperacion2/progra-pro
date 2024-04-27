import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import AuthService from './AuthService'; // Importar el servicio de autenticación

function Login({ onLogin }) {
  const { t } = useTranslation(); // Hook para acceder a las traducciones
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Llamar al método login del servicio de autenticación
      await AuthService.login(username, password);
      // Si el login es exitoso, llamar a la función onLogin proporcionada por el componente padre
      onLogin();
      // Limpiar el estado y eliminar cualquier mensaje de error
      setUsername('');
      setPassword('');
      setError('');
    } catch (error) {
      // Si hay un error durante el proceso de autenticación, mostrar el mensaje de error correspondiente
      setError(t('invalidCredentials')); // Utilizar la traducción
    }
  };

  return (
    <Row className="justify-content-center mt-5">
      <Col xs={12} sm={8} md={6}>
        <div>
          <h2>{t('login')}</h2> {/* Utilizar la traducción */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Control
                type="text"
                placeholder={t('login.username')} /* Utilizar la traducción */
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder={t('login.password')} /* Utilizar la traducción */
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {t('login')} {/* Utilizar la traducción */}
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
