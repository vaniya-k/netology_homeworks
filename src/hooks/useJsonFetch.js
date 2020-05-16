import {useState, useEffect} from 'react';

export default function useJsonFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(setLoading(true))
      .then(response => {
        if(response.ok){
          return response.json()
        }
        throw new Error(response.status);
      })
      .then(data => {setData(JSON.stringify(data)); setLoading(false)})
      .catch(error => {setError(error.message); setLoading(false)})
  }, []);

  return [data, error, loading];
};