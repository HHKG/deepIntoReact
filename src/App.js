import React from 'react';
import logo from './logo.svg';
import './App.css';
import List1 from './pages/List';
import List2 from './pages/List2';
import MyComponent from '../src/pages/MyComponent';
import SelectInput from '../src/pages/SelectInput/index';
import ImmutableSetState from '../src/pages/Immutable_setState';
import CssTransition from '../src/components/cssTransition';
import ReactSmooth from '../src/pages/ReactSmooth';
import ReactMotion from '../src/pages/ReactMotion';
import StargeredMotion from '../src/pages/StargeredMotion';

function App() {
  return (
    <div className="App">
      <div>
        <List1></List1>
        <List2></List2>
      </div>
      <MyComponent></MyComponent>
      {/* <SelectInput SelectItem="selectItem"></SelectInput> */}
      <ImmutableSetState></ImmutableSetState>
      <CssTransition></CssTransition>
      <ReactSmooth></ReactSmooth>
      <ReactMotion></ReactMotion>
      <StargeredMotion></StargeredMotion>
    </div>
  );
}

export default App;
