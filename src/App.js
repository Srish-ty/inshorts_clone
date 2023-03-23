import axios from "axios";
import { useState } from 'react';
import Header from './components/Header';
import BodyContainer from './components/BodyContainer';
import LeftPanel from './components/LeftPanel';
import { RedRibbon } from './components/RedRibbon';
import { BodyConrainer } from "./components/BodyConrainer";


function App() {


  return (
    <>
    <Header/>
    <LeftPanel/>
    <RedRibbon/>
    <BodyConrainer/>
    </>
  );
}

export default App;
