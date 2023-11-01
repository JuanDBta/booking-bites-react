import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import SectionDetail from './components/Detail';
import SectionNew from './components/SectionNew';
import ReservationNew from './components/ReservationNew';
import ReservationCreate from './components/ReservationCreate';
import Reservations from './components/Reservations';
import CreateRestaurantForm from './components/CreateRestaurantForm';
import Delete from './components/Delete';
import styles from './App.css';

export const SplashPage = () => (
  <div className={styles.splash_container}>
    <div className={styles.splash_content}>
      <h1 className={styles.splash_title}>BookingBites</h1>
      <p>Where Ambience Meets Appetite for Extraordinary Dining Experiences!</p>
      <div className={styles.splash_btn}>
        <button className={styles['splash-button']}><Link to="/login">Log In</Link></button>
        <button className={styles['splash-button']}><Link to="/register">Sign Up</Link></button>
      </div>
    </div>
  </div>

);

export const App = () => (
  <>
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/home" element={<Main />} />
      <Route path="/sections/:id" element={<SectionDetail />} />
      <Route path="/sections/new" element={<SectionNew />} />
      <Route path="/reservations/new" element={<ReservationNew />} />
      <Route path="/my" element={<Reservations />} />
      <Route path="/delete" element={<Delete />} />
      <Route path="/section/reserve/:section_id" element={<ReservationCreate />} />
      <Route path="/restaurant/new" element={<CreateRestaurantForm />} />
    </Routes>
  </>
);
