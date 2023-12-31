import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { userLoggedIn, userRefreshing } = useAuth();
  const shouldRedirect = !userLoggedIn && !userRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};