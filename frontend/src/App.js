import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Userprofiles from './user-profiles/userProfiles';

function App() {
  return (
    <div className="App">
      <Userprofiles />
    </div>
  );
}

export default App;
