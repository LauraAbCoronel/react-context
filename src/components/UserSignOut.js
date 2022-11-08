import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import userContext from '../context/userContext';

 const UserSignOut = () => {
  const {actions} = useContext(userContext);

  useEffect(() => actions.signOutUser());
  
  return (
    <Navigate to="/" replace />
  );
};

export default UserSignOut;