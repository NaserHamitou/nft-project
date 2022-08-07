import './App.css';
import Main from './components/main-container';
import HelpPage from './help-page';
import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
          <Route exact path='/' element={<Navigate to="/home" />}/>
          <Route path='/home' element={<Main />} />
          <Route path='/help' element={<HelpPage />}/>
      </Routes>
    </>
  );
}

export default App;
