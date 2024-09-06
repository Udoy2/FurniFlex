import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate replaces useHistory
import { AuthContext } from '../../context/AuthContext';

const useAuthCheck = () => {
  const { isAuthenticated, setIsAuthenticated, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => {
    // Check if a user is stored in localStorage
    const storedUser = JSON.parse(localStorage.getItem('authUser'));

    if (storedUser) {
        
      // If a user is found, update the context
      setCurrentUser(storedUser);
      setIsAuthenticated(true);
    } 
    // else {
    //   // If no user is found, redirect to the login page
    //   if (!isAuthenticated) {
    //     navigate('/login'); // useNavigate instead of history.push
    //   }
    // }
  }, [isAuthenticated, setIsAuthenticated, setCurrentUser, navigate]);
};

export default useAuthCheck;
