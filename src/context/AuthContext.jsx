import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // useNavigate replaces useHistory

export const AuthContext = createContext();

const usersFile = [
  {
    email: "existinguser@email.com",
    password: "password123",
    firstName: "John",
    lastName: "Doe",
  },
];

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  // Save user data to localStorage
  const persistUser = (user) => {
    localStorage.setItem("authUser", JSON.stringify(user));
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  // Signup function
  const signup = (userData) => {
    const { email, password, firstName, lastName } = userData;

    // Check if user already exists
    const userExists = usersFile.find((user) => user.email === email);

    if (userExists) {
      alert("User already exists. Please log in.");
    } else {
      const newUser = { email, password, firstName, lastName };
      usersFile.push(newUser);

      // Persist the new user
      persistUser(newUser);
      navigate('/login')
    }
  };

  // Login function
  const login = (email, password) => {
    const foundUser = usersFile.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      persistUser(foundUser);
      navigate('/')
    } else {
      alert("Invalid email or password.");
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("authUser");
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentUser,
        signup,
        login,
        logout, }}
    >
      {children}
    </AuthContext.Provider>
  );
};
