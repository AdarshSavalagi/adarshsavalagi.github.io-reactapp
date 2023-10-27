import './App.css'
import React from 'react';

import HomeRoute from './routes/home'

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './routes/layout';
import LoginRoute from './routes/login';
import PageNotFound from './routes/pageNotFound';
import StudentDashboard from './routes/student_dashborad';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/adarshsavalagi.github.io-reactapp/" element={<Layout />}>
            <Route index element={<HomeRoute />} />
            <Route path='login' exact element={<LoginRoute />} />
            <Route path='student-dashboard' exact element={<StudentDashboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
