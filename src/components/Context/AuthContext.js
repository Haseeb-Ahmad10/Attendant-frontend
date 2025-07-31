import { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password
      });
      
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      setUser(response.data.user);
      navigate(response.data.redirectTo);
    } catch (error) {
      throw error.response?.data?.message || 'Login failed';
    }
  };

  const logout = useCallback( () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    navigate('/');
  }, [setToken, setUser, navigate]);

//   useEffect(() => {
//     if (token) {
//       // Verify token and get user data if needed
//       axios.get('http://localhost:3000/api/protected', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       }).then(response => {
//         // You might want to update user data here
//       }).catch(() => {
//         logout();
//       }, [token, logout]);
//     }
//   }, );

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);