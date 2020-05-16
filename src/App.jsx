import React from 'react';
import TestDrive from './TestDrive';

const urlForSuccess = `http://localhost:7070/data`;
const urlForFail = `http://localhost:7070/error`;
const urlForSlowSuccess = `http://localhost:7070/loading`;

const App = () => {
  return (
    <>
      <div>
        <h4>{urlForSuccess}</h4>
        <TestDrive url={urlForSuccess}/>
      </div>
      <div>
        <h4>{urlForFail}</h4>
        <TestDrive url={urlForFail}/>
      </div>
      <div>
        <h4>{urlForSlowSuccess}</h4>
        <TestDrive url={urlForSlowSuccess}/>
      </div>
    </>
  )
}

export default App;