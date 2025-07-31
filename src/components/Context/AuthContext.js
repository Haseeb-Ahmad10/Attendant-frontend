import { createContext, useContext, useState, useEffect } from 'react';
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
      navigate('/dashboard');
    } catch (error) {
      throw error.response?.data?.error || 'Login failed';
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    if (token) {
      // Verify token and get user data if needed
      axios.get('http://localhost:3000/api/protected', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        // You might want to update user data here
      }).catch(() => {
        logout();
      });
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);