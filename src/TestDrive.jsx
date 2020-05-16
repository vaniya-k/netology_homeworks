import React from 'react';
import useJsonFetch from './hooks/useJsonFetch';

const TestDrive = ({url}) => {
  const [data, error, loading] = useJsonFetch(url); 

  return (
    <div>
      <p>Loading: {(loading) ? `still in progress..` : `finished`}</p>
      {loading === false && <p>Resulting JSON: {(error === null) ? data : `FAIL`}</p>}
      {error !== null && <p>Error code: {error}</p>}
    </div>
  )
};

export default TestDrive;
