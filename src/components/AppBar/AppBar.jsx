import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { userLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {userLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};