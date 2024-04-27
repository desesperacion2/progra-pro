// AuthService.js - Servicio para manejar la autenticación y el token JWT
class AuthService {
    // Método para iniciar sesión y obtener el token JWT del servidor
    static async login(username, password) {
      try {
        // Verificar las credenciales del usuario
        if (username === 'admin' && password === 'admin') {
          const token = 'TOKEN_JWT_SIMULADO'; // Aquí podrías obtener un token JWT del servidor
          localStorage.setItem('token', token); // Almacenar el token en el almacenamiento local
        } else {
          throw new Error('Invalid username or password');
        }
      } catch (error) {
        throw new Error('Invalid username or password');
      }
    }
  
    // Método para cerrar sesión y eliminar el token JWT
    static logout() {
      localStorage.removeItem('token'); // Eliminar el token del almacenamiento local
    }
  
    // Método para obtener el token JWT almacenado en el cliente
    static getToken() {
      return localStorage.getItem('token'); // Obtener el token del almacenamiento local
    }
  
    // Método para verificar si el usuario está autenticado
    static isAuthenticated() {
      const token = localStorage.getItem('token');
      // Verificar si el token existe y no está expirado
      return token !== null;
    }
  }
  
  export default AuthService;
  