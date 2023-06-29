import { React } from "react";
// import { Filter } from 'components/Filter/Filter';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import css from 'components/App.module.css';

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/thunks';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { userRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return userRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// export const App = () => {
   
//    return (
      // <div className={css.pageWrap}>
      //    <h1 className={css.pageTitle}>Phonebook</h1>
      //    <ContactForm
      //    />
      //    <h2 className={css.title}>Contacts</h2>
      //    <div className={css.contactsArea}>
      //       <Filter
      //       />
      //       <ContactList
      //       />
      //       <ToastContainer
      //       position="top-right"
      //       autoClose={3000}
      //       hideProgressBar={false}
      //       newestOnTop={false}
      //       closeOnClick
      //       rtl={false}
      //       pauseOnFocusLoss
      //       draggable={false}
      //       pauseOnHover
      //       theme="colored"
      //       />
      //    </div>
      // </div>
//    );           
//    };

