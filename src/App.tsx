import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Card from "./pages/Card/Card";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Main/>}/>
      <Route path={'/:id'} element={<Card />}/>
    </Routes>
  );
}

export default App;
