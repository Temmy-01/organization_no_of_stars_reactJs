// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import useAuth from './useAuthContext'; // Adjust the import based on your actual hook location

// const ProtectedRoute = ({ element: Element, layout: Layout, ...rest }) => {
//     const user = JSON.parse(localStorage.getItem('userData'));

//     if (!user || !user.token) {
//       return <Navigate to="/auth/login" />;
//     }

//   // If user is authenticated, render the layout with the component
//   return Layout ? (
//     <Layout>
//       <Element {...rest} />
//     </Layout>
//   ) : (
//     <Element {...rest} />
//   );
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import { usePermissions } from "../context/PermissionContext";

const ProtectedRoute = ({
  element: Element,
  permission,
  layout: Layout,
  ...rest
}) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const permissions = JSON.parse(localStorage.getItem("userPermissions"));
  // const permpermissionsissions = usePermissions(); // Get permissions
  // Check if the user is authenticated
  if (!user || !user.token) {
    return <Navigate to="/auth/login" />;
  }

  // Check if the user has the required permission
  if (permission && !permissions.includes(permission)) {
    return <Navigate to="/unauthorized" />;
  }

  // Render the layout with the component if authenticated and authorized
  return Layout ? (
    <Layout>
      <Element {...rest} />
    </Layout>
  ) : (
    <Element {...rest} />
  );
};

export default ProtectedRoute;

// const ProtectedRoute = ({ element: Element, permission, layout: Layout, ...rest }) => {
//   const user = JSON.parse(localStorage.getItem('userData'));
//   const permissions = usePermissions();

//   console.log('User:', user);
//   console.log('Permissions:', permissions);

//   if (!user || !user.token) {
//       console.log('User not authenticated');
//       return <Navigate to="/auth/login" />;
//   }

//   if (permission && !permissions.includes(permission)) {
//       console.log('User does not have permission');
//       return <Navigate to="/unauthorized" />;
//   }

//   return Layout ? (
//       <Layout>
//           <Element {...rest} />
//       </Layout>
//   ) : (
//       <Element {...rest} />
//   );
// };

// export default ProtectedRoute;
