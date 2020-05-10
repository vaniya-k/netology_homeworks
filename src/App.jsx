import React from 'react';
import useJsonFetch from './hooks/useJsonFetch';

const App = () => {
  const successfulFetch = useJsonFetch(`http://localhost:7070/data`);
  const dataOfSuccessfulFetch = successfulFetch[0];

  const failedFetch = useJsonFetch(`http://localhost:7070/error`);
  const errorOfFailedFetch = failedFetch[1];

  const slowFetch = useJsonFetch(`http://localhost:7070/loading`);
  const statusOfSlowFetch = slowFetch[2];

  return (
    <div>
      <p>JSON from the 1st fetch: {`${dataOfSuccessfulFetch}`}</p>
      <p>Error from the 2nd fetch: {`${errorOfFailedFetch}`}</p>
      <p>Is the 3rd fetch loading: {`${statusOfSlowFetch}`}</p>
    </div>
  )
}

export default App;