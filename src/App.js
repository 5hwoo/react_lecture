import React, { Component, Fragment, useState, useEffect, useCallback, useMemo, } from 'react';
import logo from './logo.svg';
import styles from './App.css';

import Name from './components/Name'
import NameButton from './components/NameButton'
import HeaderTabs from './components/HeaderTabs'
import RootRouter from './routers/RootRouter'
import {BrowserRouter,} from 'react-router-dom';

import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'

function App(){
  return(
    <BrowserRouter>
      <HeaderTabs/>
      <RootRouter/>
    </BrowserRouter>
  )
}

export default App;