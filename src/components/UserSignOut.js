import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function UserSignOut({signOutUser}) {
  useEffect(() => {
    signOutUser();
  });
  return (
    <Navigate to="/" replace />
  );
};
